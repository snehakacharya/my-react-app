import React, { useState } from 'react';


const FileUpload = ({ onSubmit }) => {
  const [file, setFile] = useState(null);

  
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      onSubmit(file);
    } else {
      alert("Please upload a file");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Upload PDF</h2>
      <input 
        type="file" 
        accept="application/pdf" 
        onChange={handleFileChange} 
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FileUpload;
