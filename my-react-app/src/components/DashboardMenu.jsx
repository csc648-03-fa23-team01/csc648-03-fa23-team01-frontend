import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchSentMessages, getUser } from "../actions/userAction"; // Assuming you have an action to fetch messages
import MessageCard from "./MessageCard";
import { getUserTutors } from "../actions/userAction";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom'; // For React Router v6


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
  button: (isActive) => ({
    display: "block",
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #000",
    borderRadius: "5px",
    background: isActive ? "#007bff" : "#fff", // Change background color based on isActive
    color: isActive ? "#fff" : "#000", // Change text color based on isActive
    cursor: "pointer",
  }),
  container: {
    fontFamily: "Arial, sans-serif",
    display: "flex", // Enable Flexbox
    justifyContent: "flex-start", // Align content to the left
    width: "33%", // Set width to 33% of the screen size
    flexDirection: "column", // Stack children vertically
    textAlign: "center", // Align text to the left
  },
  dashboardSection: {
    width: "100%", // Ensure the dashboard takes the full width of the container

    flex: 1, // Take up equal space
  },
  messagesSection: {
    margin: "8px",
    flex: 2, // Take up double space compared to dashboardSection
    textAlign: "left", // Align text to the left for messages
  },
  header: {
    margin: "20px 0",
    fontWeight: "bold",
  },
  welcome: {
    margin: "10px 0",
    fontWeight: "normal",
  },
  menuContainer: {
    border: "1px solid #000",
    borderRadius: "10px",
    padding: "20px",
  },
  button: {
    display: "block",
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #000",
    borderRadius: "5px",
    background: "#fff",
    cursor: "pointer",
  },
  resourcesSection: {
    flex: 2, // Same as messagesSection to take up double space
    padding: "10px", // Add padding for spacing
    border: "1px solid #ccc", // Add a border for visual separation
    borderRadius: "8px", // Rounded corners
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)", // Box shadow for depth
    margin: "8px",
  },
  resourceList: {
    listStyleType: "none", // Remove default list styling
    padding: 0,
  },
  resourceItem: {
    marginBottom: "10px", // Space out the items
  },
  resourceLink: {
    textDecoration: "none", // Remove underline from links
    color: "#007bff", // Link color, can be adjusted
    ":hover": {
      textDecoration: "underline", // Underline on hover for better UX
    },
  },
};
const parentStyles = {
  display: "flex", // Enable Flexbox
  justifyContent: "flex-start", // Align children to the start (left)
};
const AccountSection = styled.div`
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 8px;
`;

const AccountHeader = styled.h2`
  color: #333;
  margin-bottom: 20px;
`;

const AccountInfo = styled.p`
  color: #666;
  margin: 5px 0;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-top: 10px;
`;

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
      return data.user;
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
      navigate('/login'); // Redirect to login page
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
            setUser(fetchedUser);
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
            Welcome, {users_data ? users_data.firstName : "John"}
          </div>
          <div style={styles.menuContainer}>
  <button
    style={getButtonStyle(showAccount)}
    onClick={handleAccountClick}>
    My Account
  </button>
  <button
    style={getButtonStyle(showMessages)}
    onClick={handleMessagesClick}>
    Messages
  </button>
  <button
    style={getButtonStyle(showResources)}
    onClick={handleResourcesClick}>
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
      {showAccount && (
        <AccountSection>
          <AccountHeader>My Account</AccountHeader>
          {user && (
            <>
              <AccountInfo>
                Name: {user.first_name} {user.last_name}
              </AccountInfo>
              <AccountInfo>Email: {user.email}</AccountInfo>

              {user.profilePictureLink && (
                <ProfileImage src={user.profilePictureLink} alt="Profile" />
              )}

              {user.admin_status && <AccountInfo>Role: Admin</AccountInfo>}
              {user.verified_status && (
                <AccountInfo>Status: Verified</AccountInfo>
              )}

              {/* Additional fields */}
            </>
          )}
        </AccountSection>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  users_data: state.users.userData,
  messages_data: state.messages,
});

const mapDispatchToProps = {
  fetchSentMessages,
  getUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardMenu);
