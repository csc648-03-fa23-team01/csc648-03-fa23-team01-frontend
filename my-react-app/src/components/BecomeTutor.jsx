import React, { useState } from "react";
import NavBar from './NavBar';
import { buttonStyle, errorTextStyle } from '../styles/styles'; // Adjust the import path
import InputField from './InputField'; // Import the InputField component

function BecomeTutor() {
  const [resume, setResume] = useState(null);
  const [topic, setTopic] = useState("");
  const [classes, setClasses] = useState("");
  const [picture, setPicture] = useState(null);
  const [video, setVideo] = useState(null);
  const [agree, setAgree] = useState(false);

  const [errors, setErrors] = useState({
    resume: false,
    topic: false,
    classes: false,
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
    backgroundColor: "#f5f5f5",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    textAlign: "left",
    maxWidth: "400px",
    margin: "0 auto",
  };

  const formGroupStyle = {
    marginBottom: "10px",
  };

  return (
    <div>
      <NavBar />
      <div className="content" style={{ marginTop: '20px' }}> 
        <div style={formBoxStyle}>
          <h1>Apply to be a Tutor</h1>
          <form onSubmit={handleSubmit}>
            <InputField
              type="file"
              label="*Resume:"
              value={resume}
              onChange={(e) => setResume(e.target.files[0])}
              error={errors.resume}
            />

            <InputField
              type="text"
              label="*Topic:"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              error={errors.topic}
            />

            <InputField
              type="text"
              label="*Classes you took at SFSU:"
              value={classes}
              onChange={(e) => setClasses(e.target.value)}
              error={errors.classes}
            />

            <InputField
              type="text"
              label="*Tell us about yourself:"
              value={classes}
              onChange={(e) => setClasses(e.target.value)}
              error={errors.classes}
            />

            <InputField
              type="file"
              label="Upload your picture:"
              value={picture}
              onChange={(e) => setPicture(e.target.files[0])}
              error={false}
            />

            <InputField
              type="file"
              label="Upload your video:"
              value={video}
              onChange={(e) => setVideo(e.target.files[0])}
              error={false}
            />

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
