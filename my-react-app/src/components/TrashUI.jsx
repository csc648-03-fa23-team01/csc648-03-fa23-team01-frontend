


import React, { useState } from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
import { Storage } from 'aws-amplify'; // Import Amplify and Storage
import SearchBar from './SearchBar';
import { v4 as uuidv4 } from 'uuid';
import uploadMedia from '../utilities/media';

const StyledHomePage = styled.div`
background-color: #ffffff;
display: flex;
justify-content: center;
align-items: center;
height: 100vh;

& .div {
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;   /* Adjusted from a fixed height */
  width: 100vw;    /* Adjusted from a fixed width */
  max-width: 1280px;  /* If you still want to limit it to 1280px at larger screens */
}

& .text-wrapper-8 {
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 1.25rem;   /* Adjusted font size */
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
}

& .rectangle-5 {
  background-color: #ffffff;
  border: 1px solid #000000;
  border-radius: 1rem;  /* Adjusted border radius */
}

& .text-wrapper-12 {
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 2rem;  /* Adjusted font size */
  font-weight: 400;
  text-align: center;
  width: 80%;  /* Adjusted width */
  margin-top: 2rem;  /* Adjusted margin */
}
`;




const HomePage = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    // When the user selects a file, store it in the component state
    setFile(e.target.files[0]);
  };

  const handleUpload = async (fileType) => {
    if (file) {
      try {
        // Specify the folder path and file name
        const folderPath = ''; // Replace with your desired folder path
        const fileName = `${fileType}-${uuidv4()}.png`; // Replace with your desired file name
        
        // Use the uploadMedia function to upload the selected file
        const uploadedKey = await uploadMedia(file, folderPath, fileName);
  
        // Do something with the uploaded key (e.g., store it or display it)
        console.log('Uploaded key:', uploadedKey);
        
  
        // Clear the file input
        setFile(null);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };
  

  return (
    <StyledHomePage>
      <div className="div">
        <NavBar />
        <SearchBar isHomePage={true} />
        <form>
          <label htmlFor="fileInput">Select a file:</label>
          <input
            type="file"
            id="fileInput"
            name="fileInput"
            onChange={handleFileChange}
          />
          <button type="button" onClick={()=>handleUpload('picture')}>
            Upload
          </button>
        </form>
      </div>
    </StyledHomePage>
  );
};

// Export the component without connecting it to Redux (if not needed)
export default HomePage;
