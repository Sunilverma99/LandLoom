import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase.js'; // Adjust the path if necessary

export default function AddUserProperty() {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    imageUrls: [],
    nftURL: "",
    description: "",
    rate: 0,
    pincode: 0,
    userRef: currentUser._id,
    address: "",
  });

  const uploadImages = async (e) => {
    e.preventDefault();

    if (images.length > 0 && images.length + formData.imageUrls.length < 4) {
      const promises = [];
      
      try {
        setLoading(true);
        for (let i = 0; i < images.length; i++) {
          const file = images[i];
          const fileName = new Date().getTime() + file.name;
          const storageRef = ref(storage, `images/${fileName}`);
          const uploadTask = uploadBytesResumable(storageRef, file);

          promises.push(uploadTask);

          uploadTask.on(
            "state_changed",
            (snapshot) => {
              const progress = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              );
              console.log(progress);
            },
            (error) => {
              setLoading(false);
              setError(error.message || "An error occurred during upload");
              console.log(error);
            },
            async () => {
              const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
              setFormData((prevData) => ({
                ...prevData,
                imageUrls: [...prevData.imageUrls, downloadURL],
              }));
              setError('');
              console.log("File available at", downloadURL);
            }
          );
        }

        await Promise.all(promises);
        setLoading(false);
        console.log("All images uploaded successfully");
      } catch (err) {
        console.log(err);
        setError(err.message || "An error occurred during upload");
        setLoading(false);
      }
    } else {
      setError("You can only upload 3 images");
      setLoading(false);
    }
  };

  const handleRemoveImage = (index) => {
    setFormData({ ...formData, imageUrls: formData.imageUrls.filter((_, i) => i !== index) });
  }

  const handleChange = (e) => {
    e.preventDefault();
    const { id, type, value, checked } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: type === 'checkbox' ? checked : value }));
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(formData),
    };

    try {
      setLoading(true);
      const response = await fetch('http://localhost:3000/api/createListing', config);
      const data = await response.json();
      if (data.success === false) {
        setError("There is some problem");
        return;
      }
      setError("");
      setLoading(false);
      navigate("/profile");
      console.log(data);
    } catch (error) {
      setError('An error occurred during listing.');
      setLoading(false);
    }
  }

  return (
    <div style={{ backgroundColor: '#fad0c4' }}>
      <main className='p-3 max-w-4xl w-full mx-auto h-full'>
        <h1 className='text-3xl font-semibold text-center my-7'>
          Create a Listing
        </h1>
        
        <form onSubmit={formSubmit} className='flex flex-col sm:flex-row gap-4'>
          <div className='flex flex-col gap-4 flex-1'>
            <input
              onChange={handleChange}
              value={formData.nftURL}
              type='text'
              placeholder='Name'
              className='border p-3 rounded-lg'
              id='nftURL'
              maxLength='62'
              minLength='10'
              required
            />
            <textarea
              onChange={handleChange}
              value={formData.description}
              placeholder='Description'
              className='border p-3 rounded-lg'
              id='description'
              required
            />
            <input
              onChange={handleChange}
              value={formData.address}
              type='text'
              placeholder='Address'
              className='border p-3 rounded-lg'
              id='address'
              required
            />
            <input
              onChange={handleChange}
              value={formData.pincode}
              type='number'
              placeholder='Pincode'
              className='border p-3 rounded-lg'
              id='pincode'
              required
            />
            <input
              onChange={handleChange}
              value={formData.rate}
              type='number'
              placeholder='Rate'
              className='border p-3 rounded-lg'
              id='rate'
              required
            />
          </div>
          <div className='flex flex-col flex-1 gap-4'>
            <p className='font-semibold'>
              Images:
              <span className='font-normal text-gray-600 ml-2'>
                The first image will be the cover (max 4)
              </span>
            </p>
            <div className='flex gap-4'>
              <input
                onChange={(e) => setImages(Array.from(e.target.files))}
                className='p-3 border border-gray-300 rounded w-full'
                type='file'
                id='images'
                accept='image/*'
                multiple
              />
              <button
                onClick={uploadImages}
                type='button'
                className='p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80'
              >
                {loading ? "...Loading" : "Upload"}
              </button>
            </div>
            <p className='text-red-700 text-sm'>{error}</p>
            {formData.imageUrls.length > 0 && formData.imageUrls.map((url, index) => (
              <div className='flex justify-between p-3 border items-center' key={url}>
                <img
                  src={url}
                  alt='listing image'
                  className='w-20 h-20 object-contain rounded-lg'
                />
                <button
                  type='button'
                  onClick={() => handleRemoveImage(index)}
                  className='p-3 text-red-700 rounded-lg uppercase hover:opacity-75'
                >
                  Delete
                </button>
              </div>
            ))}
            <button disabled={loading}
              className='p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
            >
              {loading ? "...Loading" : "Create listing"}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
