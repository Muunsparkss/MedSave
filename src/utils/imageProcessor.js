export const embedPatientData = (imageDataUrl, patientData) => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const image = new Image();

  return new Promise((resolve) => {
    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      ctx.drawImage(image, 0, 0);

      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imgData.data;

      const patientInfo = `${patientData.patientID},${patientData.age},${patientData.disease}`;
      const binaryInfo = textToBinary(patientInfo);
      console.log(binaryInfo);

      for (let i = 0; i < binaryInfo.length; i++) {
        pixels[i * 4] = binaryInfo[i] === '1' ? pixels[i * 4] | 1 : pixels[i * 4] & ~1;
      }

      ctx.putImageData(imgData, 0, 0);
      resolve(canvas.toDataURL());
    };

    image.src = imageDataUrl;
  });
};

const textToBinary = (text) => {
  return text
    .split('')
    .map((char) => char.charCodeAt(0).toString(2).padStart(8, '0'))
    .join('');
};
