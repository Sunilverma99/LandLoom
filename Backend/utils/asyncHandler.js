const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    // Use the statusCode from ApiError or default to 500
    const statusCode = error.statusCode || 500;
    res.status(statusCode).json({
      success: false,
      message: error.message || "Internal Server Error",
      errors: error.errors || [], // Include errors if available
    });
  }
};

export { asyncHandler };
