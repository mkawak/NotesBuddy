import React, { useState } from 'react';
import axios from 'axios';
import AddButton from "../components/AddButton";

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    const formData = new FormData();
    formData.append('file', selectedFile);

    axios.post('/myapp/upload/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((response) => {
      console.log('File uploaded successfully');
      // You can handle the response from the server here
    })
    .catch((error) => {
      console.error('Error uploading file:', error);
    });
  };

  return (
    <div>
      <h2>File Upload</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload</button>
      <AddButton/>
    </div>
  );
}

export default FileUpload;
