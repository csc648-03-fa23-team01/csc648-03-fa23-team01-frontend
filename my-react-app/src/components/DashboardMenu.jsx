import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchSentMessages, getUser } from "../actions/userAction"; // Assuming you have an action to fetch messages
import MessageCard from "./MessageCard";
import { getUserTutors } from "../actions/userAction";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // For React Router v6

const getButtonStyle = (isActive) => ({
  display: "block",
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  border: "1px solid #000",
  borderRadius: "5px",
  background: isActive ? "#C4BB8C" : "#fff", // Change background color based on isActive
  color: isActive ? "#fff" : "#000", // Change text color based on isActive
  cursor: "pointer",
});

const styles = {
  // Use percentage and viewport width (vw) for relative width and padding
  container: {
    fontFamily: "Arial, sans-serif",
    display: "flex",
    justifyContent: "flex-start",
    width: "33vw", // 33% of the viewport width
    flexDirection: "column",
    textAlign: "center",
    padding: '1vw', // Relative padding
  },
  dashboardSection: {
    width: "100%",
    padding: '1vw',
  },
  messagesSection: {
    margin: "1vw",
    width: "66vw", // 66% of the viewport width
    textAlign: "left",
  },
  menuContainer: {
    border: "1px solid #000",
    borderRadius: "10px",
    padding: "1vw",
    margin: '1vw 0',
  },
  button: {
    display: "block",
    width: "100%",
    padding: "1vw",
    margin: "1vw 0",
    border: "1px solid #000",
    borderRadius: "5px",
    background: "#fff",
    cursor: "pointer",
  },
  resourcesSection: {
    margin: "1vw",
    padding: "1vw",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    width: "66vw", // 66% of the viewport width
  },
  resourceList: {
    listStyleType: "none",
    padding: 0,
  },
  resourceItem: {
    marginBottom: "1vw",
  },
  resourceLink: {
    textDecoration: "none",
    color: "#007bff",
  },
  AccountSection: {
    padding: "1vw",
    textAlign: "center",
    borderRadius: "10px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    maxWidth: "66vw", // 66% of the viewport width
    margin: "1vw",
  },
  AccountHeader: {
    color: "#333",
    marginBottom: "1vw",
  },
  AccountInfo: {
    textAlign: "left",
    color: "#666",
    margin: "1vw 0",
  },
  ProfileImage: {
    width: "10vw", // Use vw unit for responsive width
    height: "10vw", // Use vw unit for responsive height, keep it equal to width for a circle
    borderRadius: "50%",
    marginTop: "1vw",
  },
};

// For parent container to fill the screen
const parentStyles = {
  display: "flex",
  flexDirection: "row", // Change to 'column' on smaller screens if needed
  width: '100vw',
  padding: '1vw',
};


const renderTutorAccountSection = (tutorInfo) => (
  <div style={styles.AccountSection}>
    <div style={styles.AccountHeader}>Tutor Account</div>
    <div style={styles.AccountInfo}>Email: {tutorInfo.user_email}</div>
    <div style={styles.AccountInfo}>Average Ratings: {tutorInfo.average_ratings.toFixed(2)}</div>
    <div style={styles.AccountInfo}>Classes: {tutorInfo.classes}</div>
    <div style={styles.AccountInfo}>Description: {tutorInfo.description}</div>
    <div style={styles.AccountInfo}>Price per hour: ${tutorInfo.price.toFixed(2)}</div>
    <div style={styles.AccountInfo}>Main Languages: {tutorInfo.main_languages}</div>
    <div style={styles.AccountInfo}>Prefer In-Person: {tutorInfo.prefer_in_person ? "Yes" : "No"}</div>
    {tutorInfo.cv_link && <a href={tutorInfo.cv_link} target="_blank" style={styles.resourceLink}>View CV</a>}
    <div style={styles.AccountInfo}>Other Languages: {tutorInfo.other_languages}</div>
    {tutorInfo.profile_picture_link && (
      <img
        style={styles.ProfileImage}
        src={tutorInfo.profile_picture_link}
        alt="Profile"
      />
    )}
    {tutorInfo.video_link && <a href={tutorInfo.video_link} target="_blank" style={styles.resourceLink}>Introduction Video</a>}
    {/* Additional fields and relationships */}
  </div>
);

const renderUserAccountSection = (user) => (
  <div style={styles.AccountSection}>
          <div style={styles.AccountHeader}>My Account</div>
          {user && (
            <>
              <div style={styles.AccountInfo}>
                Name: {user.first_name} {user.last_name}
              </div>
              <div style={styles.AccountInfo}>Email: {user.email}</div>

              {user.profilePictureLink && (
                <img
                  style={styles.ProfileImage}
                  src={user.profilePictureLink}
                  alt="Profile"
                />
              )}

              {user.admin_status ? (
                <div style={styles.AccountInfo}>Role: Admin</div>
              ) : (
                <div style={styles.AccountInfo}>Role: User</div>
              )}
              {user.verified_status ? (
                <div style={styles.AccountInfo}>Status: Verified</div>
              ) : (
                <div style={styles.AccountInfo}>Status: Unverified</div>
              )}

              {/* Additional fields */}
            </>
          )}
        </div>
);

const getUserIdByEmail = async (email) => {
  try {
    // Constructing the query URL with a query parameter for email
    const queryAddress = `${
      process.env.REACT_APP_BACKEND_URL
    }/getUserByEmail?email=${encodeURIComponent(email)}`;

    const response = await fetch(queryAddress, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Include other headers as required by your API
      },
    });

    const data = await response.json();
    console.log("Received", data);

    if (response.ok) {
      // Assuming the response structure contains an object with a 'user' field
      return data;
    } else {
      throw new Error(data.detail || "Unknown error occurred");
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    return null; // Handle the error as per your app's design
  }
};

const DashboardMenu = ({ users_data, messages_data, fetchSentMessages }) => {
  const [showMessages, setShowMessages] = useState(true);
  const [showResources, setShowResources] = useState(false); // New state for resources menu
  const [showAccount, setShowAccount] = useState(false); // New state for My Account section
  const [user, setUser] = useState(null); // Use state for tutor
  const navigate = useNavigate();


  useEffect(() => {
    // Check if the user is not logged in
    if (!users_data) {
      navigate("/login"); // Redirect to login page
      // history.push('/login'); // For older versions
    }
  }, [users_data, navigate]);

  useEffect(() => {
    if (showMessages && users_data) {
      fetchSentMessages(users_data.email);
    }
  }, [showMessages, users_data, fetchSentMessages]);

  useEffect(() => {
    const fetchUser = async () => {
      if (users_data) {
        try {
          const fetchedUser = await getUserIdByEmail(users_data.email);
          if (fetchedUser) {
            setUser(fetchedUser.user);
            console.log("Fetched user:", fetchedUser); // Logs the fetched user details
          } else {
            console.log("No user data returned from fetch.");
          }
        } catch (error) {
          console.error("Error fetching user:", error);
        }
      }
    };

    fetchUser();
  }, [users_data]);
  const handleMessagesClick = () => {
    setShowMessages(true);
    setShowResources(false);
    setShowAccount(false); // Hide account when showing messages
  };

  const handleResourcesClick = () => {
    setShowResources(true);
    setShowMessages(false);
    setShowAccount(false); // Hide account when showing resources
  };

  const handleAccountClick = () => {
    setShowAccount(true); // Toggle My Account section
    setShowMessages(false);
    setShowResources(false);
    console.log(user);
  };
  return (
    <div style={parentStyles}>
      <div style={styles.container}>
        <div style={styles.dashboardSection}>
          <div style={styles.header}>Dashboard</div>
          <div style={styles.welcome}>
            Welcome, {user ? user.first_name : "John"}
          </div>
          <div style={styles.menuContainer}>
            <button
              style={getButtonStyle(showAccount)}
              onClick={handleAccountClick}
            >
              My Account
            </button>
            <button
              style={getButtonStyle(showMessages)}
              onClick={handleMessagesClick}
            >
              Messages
            </button>
            <button
              style={getButtonStyle(showResources)}
              onClick={handleResourcesClick}
            >
              Resources
            </button>
          </div>
        </div>
      </div>

      {showMessages && (
        <div style={styles.messagesSection}>
          {!messages_data?.loading &&
          Array.isArray(messages_data.data) &&
          messages_data.data.length > 0 ? (
            messages_data.data.map((message, index) => (
              <React.Fragment key={index}>
                {user && user.isTutor ? (
                  // Render TutorCard if the user is a tutor
                  <MessageCard
                    content={message.message_text}
                    sender_first_name={message.sender_first_name}
                    sender_last_name={message.sender_last_name}
                    isTutor={true}
                  />
                ) : (
                  // Render MessageCard for non-tutor users
                  <MessageCard
                    content={message.message_text}
                    recipient_first_name={message.receiver_first_name}
                    recipient_last_name={message.receiver_last_name}
                    profilePicture={message.receiver_profile_pic}
                  />
                )}
              </React.Fragment>
            ))
          ) : (
            <p>No messages.</p>
          )}
        </div>
      )}
      {showResources && (
        <div style={styles.resourcesSection}>
          <p>Resource Links:</p>
          <ul style={styles.resourceList}>
            <li style={styles.resourceItem}>
              <a style={styles.resourceLink} href="#link1">
                https://canvas.sfsu.edu/
              </a>
            </li>
            <li style={styles.resourceItem}>
              <a style={styles.resourceLink} href="#link2">
                https://gateway.sfsu.edu
              </a>
            </li>
            <li style={styles.resourceItem}>
              <a style={styles.resourceLink} href="#link2">
                https://www.khanacademy.org/
              </a>
            </li>
            <li style={styles.resourceItem}>
              <a style={styles.resourceLink} href="#link2">
                https://gateway.sfsu.edu
              </a>
            </li>
          </ul>
        </div>
      )}
      {/* My Account Section */}
      {showAccount && (user && user.isTutor ? renderTutorAccountSection(user.tutor) : renderUserAccountSection(user))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  users_data: state.users.userData,
  messages_data: state.messages,
});

const mapDispatchToProps = {
  fetchSentMessages,
  getUser
};



export default connect(mapStateToProps, mapDispatchToProps)(DashboardMenu);
