import React, { useState } from 'react';

const PatientInfoForm = ({ onSubmit }) => {
  const [patientID, setPatientID] = useState('');
  const [age, setAge] = useState('');
  const [disease, setDisease] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ patientID, age, disease });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Patient ID"
        value={patientID}
        onChange={(e) => setPatientID(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Disease"
        value={disease}
        onChange={(e) => setDisease(e.target.value)}
        required
      />
      <button type="submit">Embed Data</button>
    </form>
  );
};

export default PatientInfoForm;
