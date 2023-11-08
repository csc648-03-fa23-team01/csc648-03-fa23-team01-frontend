import React, { useState } from "react";
import NavBar from './NavBar';
import  { buttonStyle, errorTextStyle, chooseFileButtonStyle, hiddenFileInputStyle } from '../styles/styles'; // Adjust the import path
import InputField from './InputField'; // Import the InputField component
import image from '../assets/images/Upload_File_Icon.png';


function BecomeTutor() {
  const [resume, setResume] = useState(null);
  const [topic, setTopic] = useState("");
  const [classes, setClasses] = useState("");
  const [about, setAbout] = useState(""); // Added state for the 'about' field
  const [picture, setPicture] = useState(null);
  const [video, setVideo] = useState(null);
  const [agree, setAgree] = useState(false);

  const [errors, setErrors] = useState({
    resume: false,
    topic: false,
    classes: false,
    about: false, // Added error state for the 'about' field
    agree: false,
  });


  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      resume: !resume,
      topic: topic.trim() === "",
      classes: classes.trim() === "",
      agree: !agree,
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error)) {
      return;
    }

    // Handle form submission here
  };

  const formBoxStyle = {
    backgroundColor: "#fFfFfF",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    textAlign: "left",
    maxWidth: "400px",
    margin: "0 auto",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", 

  };

  const formGroupStyle = {
    marginBottom: "10px",
    display: 'flex',       // Enable flexbox
    justifyContent: 'center', // Center children horizontally
    marginBottom: '10px',
  };

   // Add a new state for the dropdown selection
   const [selectedTopic, setSelectedTopic] = useState('');

   // Add your topics here
   const topics = [
     "Mathematics",
     "Physics",
     "Chemistry",
     "Biology",
     "English Literature",
     "Computer Science",
     // ... more topics
   ];

   
  return (
    <div>
      <NavBar />
      <div className="content" style={{ marginTop: '20px' }}> 
        <div style={formBoxStyle}>
          <h1>Apply to be a Tutor</h1>
          <form onSubmit={handleSubmit}>
            
            {/* Label and custom file input for picture */}
            <div style={formGroupStyle}>
              <label>*Resume</label>
              <label htmlFor="pictureInput" style={chooseFileButtonStyle}>
              <img src={image} alt="Upload" style={{ width: '20px', height: '20px', verticalAlign: 'middle' }} /> CHOOSE A FILE
              </label>
              <input
                id="pictureInput"
                type="file"
                style={hiddenFileInputStyle}
                onChange={(e) => setPicture(e.target.files[0])}
              />
              {/* Handle picture error if any */}
            </div>

            {/* ... other input fields ... */}

            {/* Topic dropdown */}
      <div style={formGroupStyle}>
        <label htmlFor="topicSelect">*Topic:</label>
        <select 
          id="topicSelect"
          value={selectedTopic}
          onChange={(e) => setSelectedTopic(e.target.value)}
          style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '10px' }} // Make sure the width and padding match other inputs
        >
          <option value="">Select a topic</option>
          {topics.map((topic, index) => (
            <option key={index} value={topic}>{topic}</option>
          ))}
        </select>
        {errors.topic && <span style={errorTextStyle}>This field is required.</span>}
      </div>


      {/* Classes taken at SFSU field */}
      <div style={{...formGroupStyle, display: 'block'}}> {/* Ensures this section is on a new line */}
        <label htmlFor="classesInput">*Classes you took at SFSU:</label>
        <textarea
          id="classesInput"
          value={classes}
          onChange={(e) => setClasses(e.target.value)}
          style={{ display: 'block', width: '50%', padding: '8px', height: '10px' }} // Adjust height as needed
        />
        {errors.classes && <span style={errorTextStyle}>This field is required.</span>}
      </div>

      {/* Tell us about yourself */}
        <div style={{...formGroupStyle, display: 'block'}}> {/* Ensures this section is on a new line */}
          <label htmlFor="classesInput">*Tell us about yourself:</label>
          <textarea
            id="classesInput"
            value={classes}
            onChange={(e) => setClasses(e.target.value)}
            style={{ display: 'block', width: '50%', padding: '8px', height: '10px' }} // Adjust height as needed
          />
          {errors.classes && <span style={errorTextStyle}>This field is required.</span>}
        </div>

            {/* Label and custom file input for picture */}
            <div style={formGroupStyle}>
              <label>*Click on the "Choose File" button to upload your picture:</label>
              <label htmlFor="pictureInput" style={chooseFileButtonStyle}>
              <img src={image} alt="Upload" style={{ width: '20px', height: '20px', verticalAlign: 'middle' }} /> CHOOSE A FILE
              </label>
              <input
                id="pictureInput"
                type="file"
                style={hiddenFileInputStyle}
                onChange={(e) => setPicture(e.target.files[0])}
              />
              {/* Handle picture error if any */}
            </div>

            {/* Label and custom file input for video */}
            <div style={formGroupStyle}>
              <label>Click on the "Choose File" button to upload your video:</label>
              <label htmlFor="videoInput" style={chooseFileButtonStyle}>
              <img src={image} alt="Upload" style={{ width: '20px', height: '20px', verticalAlign: 'middle' }} /> CHOOSE A FILE
              </label>
              <input
                id="videoInput"
                type="file"
                style={hiddenFileInputStyle}
                onChange={(e) => setVideo(e.target.files[0])}
              />
            </div>

            {/* Submit button*/}
            <div style={formGroupStyle}>
              <label>
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                />{" "}
                I agree to Website Name terms of use and privacy policy.
              </label>
              {errors.agree && <span style={errorTextStyle}>This field is required.</span>}
            </div>

            <div style={formGroupStyle}>
              <button type="submit" style={buttonStyle}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BecomeTutor;