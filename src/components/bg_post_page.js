import React, { useState, useRef } from 'react';
import loadinggif from '../Images/loading.gif';
import './components.css';
import Cropper from 'react-easy-crop';
import { getCroppedImg } from './getcroppedfun'; // Import the function

const BgPictureUpload = ({ userId }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState('');
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  // const port = "http://localhost:5000";
  const port = "https://thrive-backend-o6k3.onrender.com"

  const infoid = localStorage.getItem("infoid");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setPreview(URL.createObjectURL(event.target.files[0]));
  };

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    if (!selectedFile || !croppedAreaPixels) return;

    try {
      const croppedImage = await getCroppedImg(preview, croppedAreaPixels);
      const formData = new FormData();
      formData.append('profilePicture', croppedImage);
      formData.append('userId', infoid);

      const response = await fetch(`${port}/cloud/upload-bg-picture`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        window.location.href = '/profile';
        setLoading(false);
        console.log('File uploaded successfully', data);
      } else {
        console.error('Error uploading file', response.statusText);
      }
    } catch (error) {
      console.error('Error uploading file', error);
    }
  };

  return (
    <>
      {loading && (
        <div className='absolute w-full inset-0 opacity-90 fill-neutral-950 z-[1000]'>
          <div className='h-[30vh] bg-[#000000]'></div>
          <img className='w-[100vw]' src={loadinggif} alt='Loading' />
          <div className='h-[30vh] bg-[#000000]'></div>
        </div>
      )}
      <div className='bg-[#0c0c0c] h-[100vh] w-full flex flex-col justify-center items-center overflow-y-scroll '>
        <div className='w-[90%] h-[90vh] text-[#a7a7a7]'>
          <form onSubmit={handleSubmit} className=' text-[#b0b0b0]'>
            <input type="file" onChange={handleFileChange} />
            {preview && (
              <div className='mt-5 border-[1px] border-[#838383]' style={{ position: 'relative', width: '100%', height: '400px' }}>
                <Cropper
                  image={preview}
                  crop={crop}
                  zoom={zoom}
                  aspect={7/2}
                  onCropChange={setCrop}
                  onZoomChange={setZoom}
                  onCropComplete={onCropComplete}
                  
                  showGrid={false}
                  showZoomControls={false}
                />
              </div>
            )}
            {preview && (
              <div className='w-full flex justify-center items-center h-[5rem]'>
                <button className='w-[30%] glass3 rounded-[10px] pt-2 pb-2 font-mochiy-pop text-[#d1d1d1]' type="submit" onClick={handleSubmit}>Save</button>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default BgPictureUpload;
