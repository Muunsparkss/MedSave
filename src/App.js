import React, { useState } from 'react';
import ImageUploader from './components/ImageUploader';
import PatientInfo from './components/PatientInfo';
import { embedPatientData } from './utils/imageProcessor';
import logo from './images/logo.png'

const App = () => {
  const [imageData, setImageData] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);

  const handleImageUpload = (image) => {
    setImageData(image);
  };

  const handlePatientInfoSubmit = async (patientData) => {
    if (!imageData) {
      alert('Please upload an image first.');
      return;
    }

    try {
      const result = await embedPatientData(imageData, patientData);
      setProcessedImage(result);
    } catch (error) {
      console.error('Error processing the image:', error);
    }
  };

  return (
    <>
      <div style={{ textAlign: 'center', padding: '0px' }}>
        <h1 class="mainheader">Medical Image Embedder</h1>
        <div class="welcome"> <p class="para1">Welcome to the medical image information embedding system. Here, we simply help you enrypt and embed the patient information into the gray scale medical image. <br/> You have to login to share the medical image with hospitals or other doctors. You can scrape and decrypt the information out of a medical image by entering your doctor id to the key input box. Thank you for using medical image embedder!</p></div>
        <div class="med-sec">
        <h2>Enter Patient Information</h2>
        {/* Image Uploader */}
        <div class="container-1" style={{ marginBottom: '20px' }}>
          <ImageUploader onImageUpload={handleImageUpload} />
        </div>

        {/* Patient Information Form */}
        <div style={{ marginBottom: '20px' }}>
          <PatientInfo onSubmit={handlePatientInfoSubmit} />
        </div>

        {/* Processed Image Preview */}
        {processedImage && (
          <div>
            <h3>Processed Image:</h3>
            <img src={processedImage} alt="Processed Medical" style={{ maxWidth: '100%' }} />
            <br />
            <a href={processedImage} download="processed-image.png">
              <button style={{ marginTop: '10px' }}>Download Image</button>
            </a>
          </div>
        )}
      </div>
      </div>
    </>
  );
};

export default App;