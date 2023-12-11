import React, { useState, useEffect } from "react";
import NavBar from './NavBar';
import  { buttonStyle, errorTextStyle, chooseFileButtonStyle, hiddenFileInputStyle } from '../styles/styles'; // Adjust the import path
import InputField from './InputField'; // Import the InputField component
import image from '../assets/images/Upload_File_Icon.png';
import {becomeTutor} from '../actions/tutorAction'; 
import { connect } from 'react-redux';
import uploadMedia from '../utilities/media';
import { v4 as uuidv4 } from 'uuid';
import { Storage } from 'aws-amplify';


const BecomeTutorPage = ({tutors_data, tutors_loading, tutors_error, becomeTutor}) => {

  const [resume, setResume] = useState(null);


  const [classes, setClasses] = useState("");
  const [language, setLanguage] = useState('');
  const [days, setDays] = useState([]);
  const [sessionType, setSessionType] = useState(null);
  const [about, setAbout] = useState(""); // Added state for the 'about' field
  const [picture, setPicture] = useState(null);
  const [video, setVideo] = useState(null);
  const [agree, setAgree] = useState(false);
  const SessionType =[
    "In Person",
    "Virtual"
   ];

   const [selectedDays, setSelectedDays] = useState([]);


   const handleUpload = async (selectedFile, fileType) => {
    if (!selectedFile) {
      return; // No file selected, nothing to upload
    }
  
    try {
      // Specify the folder path and default file extension
      const folderPath = ''; // Replace with your desired folder path
      let fileExtension = 'png'; // Default extension (e.g., for images)
  
      // Determine the file extension based on fileType
      if (fileType === 'resume') {
        fileExtension = 'pdf';
      } else if (fileType === 'video') {
        fileExtension = 'mp4'; // Change to the appropriate video format extension
      }
  
      // Generate the file name with the determined extension
      const fileName = `${fileType}-${uuidv4()}.${fileExtension}`;
  
      // // Use the uploadMedia function to upload the selected file
      // const uploadedKey = await uploadMedia(selectedFile, folderPath, fileName);
  
      // // Do something with the uploaded key (e.g., store it or display it)
      // console.log('Uploaded key:', uploadedKey);
    
      // Do something with the fileURL (e.g., store it or display it)
      console.log('Uploaded URL:', fileName);
      // Clear the selected file input
      switch (fileType) {
        case 'resume':
          setResume(fileName);
          break;
        case 'picture':
          setPicture(fileName);
          break;
        case 'video':
          setVideo(fileName);
          break;
        default:
          // Handle other file types if needed
          break;
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };
  
  const handleResumeChange = (e) => {
    const selectedFile = e.target.files[0];
    setResume(selectedFile); // Store the selected file in state
    
  };
  
  const handlePictureChange = (e) => {
    const selectedFile = e.target.files[0];
    setPicture(selectedFile);
    
  };
  
  const handleVideoChange = (e) => {
    const selectedFile = e.target.files[0];
    setVideo(selectedFile);
    
  };

  // const [errors, setErrors] = useState({
  //   resume: false,
  //   topic: false,
  //   classes: false,
  //   about: false, // Added error state for the 'about' field
  //   agree: false,
  // });
  useEffect(() => {
    console.log("Tutor DAta: ", tutors_data);
    if(tutors_data){
      // navigate("/");
    }
    else if(tutors_error){
      // Handle sign-up failure locally
      console.error('Become Tutor failed:', tutors_error);


      alert('Tutors failed: ' + tutors_error.message);
    }
  }, [tutors_data, tutors_loading, tutors_error]);
  


  const handleSubmit = async (event) => {
    if (!agree) {
      alert("Please agree to the terms and conditions.");
      return;
    }
    event.preventDefault();
    handleUpload(resume, 'resume');
    handleUpload(picture, 'picture');
    handleUpload(video, 'video');
    // const newErrors = {
    //   resume: !resume,
    //   topic: topic.trim() === "",
    //   classes: classes.trim() === "",
    //   agree: !agree,
    // };
    
    // setErrors(newErrors);

    // if (Object.values(newErrors).some((error) => error)) {
    //   return;
    // }

    // Handle form submission here
    const tutorData = { resume, selectedTopic, classes, language, days, sessionType, about, picture, video, agree };
    console.log("Data being passed to tutorAction: ", tutorData);
    // In your component
    becomeTutor(resume, selectedTopic, classes, language, days, sessionType, about, picture, video, agree ); 
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
    marginBottom: "20px", // This will add space at the bottom of the form

  };

  const formGroupStyle = {
    marginBottom: "10px",
    display: 'flex',       // Enable flexbox
    justifyContent: 'center', // Center children horizontally
    marginBottom: '10px',
    display: 'flex',
    'flex-direction' : 'column'
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
   ];

   
   const handleDayChange = (event) => {
    const day = event.target.value;
    if (days.includes(day)) {
        // Remove the day from the array if it's already selected
        setDays(days.filter(d => d !== day));
    } else {
        // Add the day to the array if it's not already selected
        setDays([...days, day]);
    }
};


  return (
    <div>
      <NavBar />
      <div className="content" style={{ marginTop: '20px' }}> 
        <div style={formBoxStyle}>
          <h1>Apply to be a Tutor</h1>
          <form onSubmit={handleSubmit}>
            
           {/* Resume */}
          <div style={formGroupStyle}>
            <label>*Resume</label>
            <label htmlFor="resumeInput" style={chooseFileButtonStyle}>
              <img src={image} alt="Upload" style={{ width: '20px', height: '20px', verticalAlign: 'middle' }} /> CHOOSE A FILE
            </label>
            <input
              id="resumeInput"
              type="file"
              style={hiddenFileInputStyle}
              onChange={handleResumeChange}
            />
            {/* Handle picture error if any */}
            </div>


            {/* Topic dropdown */}
      <div style={formGroupStyle}>
        <label htmlFor="topicSelect">*Topic:</label>
        <select 
          id="topicSelect"
          value={selectedTopic}
          onChange={(e) => setSelectedTopic(e.target.value)}
          style={{ display: 'block', width: '55%', padding: '8px', marginBottom: '10px' }} // Make sure the width and padding match other inputs
        >
          <option value="">Select a topic</option>
          {topics.map((topic, index) => (
            <option key={index} value={topic}>{topic}</option>
          ))}
        </select>
        {/* {errors.topic && <span style={errorTextStyle}>This field is required.</span>} */}
      </div>


      {/* Classes taken at SFSU field */}
      <div style={{...formGroupStyle, display: 'block'}}> {/* Ensures this section is on a new line */}
        <label htmlFor="classesInput">*Classes you took at SFSU:</label>
        <input
          id="classesInput"
          value={classes}
          onChange={(e) => setClasses(e.target.value)}
          style={{ display: 'block', width: '50%', padding: '8px', height: '10px' }} // Adjust height as needed
        />
        {/* {errors.classes && <span style={errorTextStyle}>This field is required.</span>} */}
      </div>

          {/* Language field */}
        <div style={{...formGroupStyle, display: 'block'}}> {/* Ensures this section is on a new line */}
          <label htmlFor="classesInput">Language</label>
          <input
            id="classesInput"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            style={{ display: 'block', width: '50%', padding: '8px', height: '10px' }} // Adjust height as needed
          />
          {/* {errors.classes && <span style={errorTextStyle}>This field is required.</span>} */}
        </div>

          {/* Available Time field*/}
          <div style={{...formGroupStyle, display: 'block'}}> {/* Ensures this section is on a new line */}
              <label htmlFor="availableDays">Available Days</label>
              <div id="availableDays" style={{ display: 'block', width: '50%', padding: '8px' }}>
                  <div><label><input type="checkbox" value="Saturday" onChange={handleDayChange} /> Saturday</label></div>
                  <div><label><input type="checkbox" value="Sunday" onChange={handleDayChange} /> Sunday</label></div>
                  <div><label><input type="checkbox" value="Monday" onChange={handleDayChange} /> Monday</label></div>
                  <div><label><input type="checkbox" value="Tuesday" onChange={handleDayChange} /> Tuesday</label></div>
                  <div><label><input type="checkbox" value="Wednesday" onChange={handleDayChange} /> Wednesday</label></div>
                  <div><label><input type="checkbox" value="Thursday" onChange={handleDayChange} /> Thursday</label></div>
                  <div><label><input type="checkbox" value="Friday" onChange={handleDayChange} /> Friday</label></div>
              </div>
              {/* {errors.classes && <span style={errorTextStyle}>Please select at least one day.</span>} */}
          </div>


        {/* Session type dropdown */}
            <div style={formGroupStyle}>
                      <label htmlFor="topicSelect">*In Person or Virtual:</label>
                      <select 
                      id="topicSelect"
                      value={sessionType}
                      onChange={(e) => setSessionType(e.target.value)}
                      style={{ display: 'block', width: '55%', padding: '10px', marginBottom: '10px' }} // Make sure the width and padding match other inputs
                      >
                    <option value="">Select your Sesssion Type</option>
                {SessionType.map((topic, index) => (
                  <option key={index} value={topic}>{topic}</option>
                ))}
              </select>
              {/* {errors.topic && <span style={errorTextStyle}>This field is required.</span>} */}
            </div>
      {/* Tell us about yourself */}
        <div style={{...formGroupStyle, display: 'block'}}> {/* Ensures this section is on a new line */}
          <label htmlFor="classesInput">*Tell us about yourself:</label>
          <input
            id="classesInput"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            style={{ display: 'block', width: '50%', padding: '8px', height: '10px' }} // Adjust height as needed
          />
          {/* {errors.classes && <span style={errorTextStyle}>This field is required.</span>} */}
        </div>

            {/* Label and custom file input for picture */}
    <div style={formGroupStyle}>
      {/* Picture input */}
      <label htmlFor="pictureInput">*Upload your Profile Picture:</label>
      <input
        id="pictureInput"
        type="file"
        accept="image/*" // Restrict to image files
        onChange={handlePictureChange}
      />
      {/* {picture && <img src={URL.createObjectURL(picture)} alt="Selected Picture" />} */}
    </div>
    
    {/* Video input */}
    <div style={{ ...formGroupStyle, display: 'block' }}>
      <label htmlFor="videoInput">*Upload a short video about why you're a good tutor:</label>
      <input
        id="videoInput"
        type="file"
        accept="video/*" // Restrict to video files
        onChange={handleVideoChange}
      />
    </div>
    <div style={{ ...formGroupStyle, display: 'block' }}>
      {video && (
        <video controls>
          {/* <source src={URL.createObjectURL(video)} type="video/mp4" /> */}
          Your browser does not support the video tag.
        </video>
      )}
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
              {/* {errors.agree && <span style={errorTextStyle}>This field is required.</span>} */}
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

const mapStateToProps = state => ({
  tutors_data: state.tutors.tutorData,
  tutors_loading: state.tutors.isLoading,
  tutors_error: state.tutors.error,
});

const mapDispatchToProps = {
  becomeTutor,
};

export default connect(mapStateToProps, mapDispatchToProps)(BecomeTutorPage);