import React, { useState } from "react";
import NavBar from './NavBar';

function BecomeTutor() {
  // Use state to manage form input values
  const [resume, setResume] = useState(null);
  const [topic, setTopic] = useState("");
  const [classes, setClasses] = useState("");
  const [picture, setPicture] = useState(null);
  const [video, setVideo] = useState(null);
  const [agree, setAgree] = useState(false);

  // Use state to manage form validation errors
  const [errors, setErrors] = useState({
    resume: false,
    topic: false,
    classes: false,
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    const newErrors = {
      resume: !resume,
      topic: topic.trim() === "",
      classes: classes.trim() === "",
      agree: !agree,
    };

    setErrors(newErrors);

    // If there are errors, prevent form submission
    if (Object.values(newErrors).some((error) => error)) {
      return;
    }

    // Add code to handle form submission, e.g., sending data to the server
    // You can access form input values from the state variables (resume, topic, classes, etc.)
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

  const checkmarkStyle = {
    color: "green",
    fontWeight: "bold",
  };

  return (
    <div>
      <NavBar /> {/* Render the Navbar component at the top of the page */}
      <div className="content">
        <div style={formBoxStyle}>
          <h1>Apply to be a Tutor</h1>
          <form onSubmit={handleSubmit}>
            <div style={formGroupStyle}>
              <label>*Resume:</label>
              <div>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => setResume(e.target.files[0])}
                />
              </div>
              {errors.resume && <span style={{ color: "red" }}>This field is required.</span>}
            </div>
            <div style={formGroupStyle}>
              <label>*Topic:</label>
              <div>
                <input
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                />
              </div>
              {errors.topic && <span style={{ color: "red" }}>This field is required.</span>}
            </div>
            <div style={formGroupStyle}>
              <label>*Classes you took at SFSU:</label>
              <div>
                <input
                  type="text"
                  value={classes}
                  onChange={(e) => setClasses(e.target.value)}
                />
              </div>
              {errors.classes && <span style={{ color: "red" }}>This field is required.</span>}
            </div>
            <div style={formGroupStyle}>
              <label>*Tell us about yourself:</label>
              <div>
                <input
                  type="text"
                  value={classes}
                  onChange={(e) => setClasses(e.target.value)}
                />
              </div>
              {errors.classes && <span style={{ color: "red" }}>This field is required.</span>}
            </div>
            <div style={formGroupStyle}>
              <label>Upload your picture:</label>
              <div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setPicture(e.target.files[0])}
                />
              </div>
            </div>
            <div style={formGroupStyle}>
              <label>Upload your video:</label>
              <div>
                <input
                  type="file"
                  accept="video/*"
                  onChange={(e) => setVideo(e.target.files[0])}
                />
              </div>
            </div>
            <div style={formGroupStyle}>
              <label>
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                />{" "}
                I agree to Website Name terms of use and privacy policy.
              </label>
              {errors.agree && <span style={{ color: "red" }}>This field is required.</span>}
            </div>
            <div style={formGroupStyle}>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BecomeTutor;
