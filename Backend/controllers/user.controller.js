import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "./../utils/ApiError.js";
import { User } from "../models/user.model.js";
// import { uploadOnCloudinary } from "../../utils/cloudinary.js";
import { ApiResponse } from "./../utils/ApiResponse.js";
import jwt from "jsonwebtoken";

const generateAccessandRefreshToken = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });
    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(500, "Something went wrong");
  }
};

const registerUser = asyncHandler(async (req, res) => {
  // Taking info from frontend
  const { username, email, password, fullName } = req.body;

  // Debugging logs
  console.log("Received data:", { username, email, password, fullName });

  // Checking if all fields are filled
  if ([fullName, username, email, password].some((field) => !field?.trim())) {
    throw new ApiError(400, "All fields are required");
  }

  // Checking if user already exists
  const existedUser = await User.findOne({ $or: [{ username }, { email }] });
  if (existedUser) {
    throw new ApiError(409, "User already exists. Please Login instead!!");
  }

  //   // Taking avatar
  //   const avatarLocalPath = req.files?.avatar?.[0]?.path;

  //   if (!avatarLocalPath) {
  //     throw new ApiError(400, "Avatar is required");
  //   }

  //   // Upload to cloudinary
  //   const avatar = await uploadOnCloudinary(avatarLocalPath);

  //   if (!avatar) {
  //     throw new ApiError(500, "Error uploading avatar");
  //   }

  // Add details in db
  const user = await User.create({
    username: username.toLowerCase(),
    email,
    password,
    fullName,
    // avatar: avatar.url || "",
  });

  // Check if the user is created in db
  const checkCreatedUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );
  if (!checkCreatedUser) {
    throw new ApiError(500, "Error creating user");
  }

  // Send response
  res
    .status(201)
    .json(
      new ApiResponse(200, checkCreatedUser, "User created Successfully!!")
    );
});
// User Login
const loginUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username && !email) {
    throw new ApiError(400, "Username or Email is required");
  }
  // Check if user exists by usewrname 0r email
  const user = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  const isPasswordValid = await user.isPasswordCorrect(password);

  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid Credentials!!");
  }

  const { refreshToken, accessToken } = await generateAccessandRefreshToken(
    user._id
  );

  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  // sending cookies
  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("refreshToken", refreshToken, options)
    .cookie("accessToken", accessToken, options)
    .json(
      new ApiResponse(
        200,
        {
          user: loggedInUser,
          accessToken,
          refreshToken,
        },
        "User Logged In Successfully!!"
      )
    );
});

const logoutUser = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    { $set: { refreshToken: undefined } },
    { new: true }
  );

  const options = {
    httpOnly: true,
    secure: true,
    sameSite: "None", // Ensure cross-site cookies are handled correctly
  };

  return res
    .status(200)
    .clearCookie("refreshToken", options)
    .clearCookie("accessToken", options)
    .json(new ApiResponse(200, {}, "User Logged Out Successfully!!"));
});

const refreshAccessToken = asyncHandler(async (req, res) => {
  const incomingRefreshToken =
    req.cookies.refreshToken || req.body.refreshToken;

  if (!incomingRefreshToken) {
    throw new ApiError(401, "Unauthorized Request!!");
  }

  try {
    const decodedToken = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );
    const user = await User.findById(decodedToken._id);

    if (!user) {
      throw new ApiError(401, "Invalid refresh token!!");
    }

    if (incomingRefreshToken !== refreshToken._id) {
      throw new ApiError(401, "Refresh token not valid or used!!");
    }
    const options = {
      httpOnly: true,
      secure: true,
    };

    const { accessToken, newRefreshToken } =
      await generateAccessandRefreshToken(user._id);
    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", newRefreshToken, options)
      .json(
        new ApiResponse(
          200,
          { accessToken, refreshToken: newRefreshToken },
          "Access Token Refreshed Successfully!!"
        )
      );
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid token!!");
  }
});

export { registerUser, loginUser, logoutUser, refreshAccessToken };
