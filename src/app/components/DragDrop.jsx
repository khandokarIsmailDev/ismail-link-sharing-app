"use client";

import React, { useCallback, useState,useEffect } from "react";
import { useDropzone } from "react-dropzone";

export default function DragDrop({onImageChange}) {
  const [selectedImage, setSelectedImage] = useState("/images/man.png"); // Default background image

  // Handle image drop
  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles[0];
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setSelectedImage(data.filePath);
        onImageChange(data.filePath)
      } else {
        console.error('Upload failed');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  }, [onImageChange]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({onDrop});

  useEffect(() =>{
    onImageChange(selectedImage)
  },[])


  return (
    <div
      {...getRootProps()}
      className="sm:w-1/3 sm:h-full h-[60%] w-1/3 my-4 bg-cover bg-center rounded-lg relative cursor-pointer"
      style={{
        backgroundImage: `url(${selectedImage})`, // Set selected image as background
      }}
    >
      <input {...getInputProps()} />
      <div className="absolute inset-0 bg-black opacity-50 rounded-lg" />
      <div className="flex flex-col justify-center items-center h-full z-10 relative text-white text-sm">
        <img src="/images/icon-upload-image.svg" alt="Upload Icon" />
        {isDragActive ? (
          <p className="text-center">Drop the image here ...</p>
        ) : (
          <p className="text-center">Change Image</p>
        )}
      </div>
    </div>
  );
}
