import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const ImageUploader = ({ onImageUpload }) => {
  const [image, setImage] = useState(null);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result;
      setImage(dataUrl);
      onImageUpload(dataUrl);
    };
    reader.readAsDataURL(file);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div class="imageUploader" {...getRootProps()} style={{ border: '2px dashed #ddd', padding: '20px', cursor: 'pointer' }}>
      <input {...getInputProps()} />
      {image ? <img src={image} alt="Medical" style={{ maxWidth: '100%' }} /> : 'Drop an image here, or click to upload'}
    </div>
  );
};

export default ImageUploader;
