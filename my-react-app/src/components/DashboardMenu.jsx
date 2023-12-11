import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSentMessages } from "../actions/userAction"; // Assuming you have an action to fetch messages
import MessageCard from './MessageCard'; 

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    display: 'flex', // Enable Flexbox
    justifyContent: 'center', // Center the content horizontally
    margin: 'auto',
    textAlign: 'center',
    width: '100%', // Set width to 100% of the page
  },
  dashboardSection: {
    flex: 1, // Take up equal space

  },
  messagesSection: {
    margin: '8px',
    flex: 2, // Take up double space compared to dashboardSection
    textAlign: 'left', // Align text to the left for messages
  },
  header: {
    margin: '20px 0',
    fontWeight: 'bold',
  },
  welcome: {
    margin: '10px 0',
    fontWeight: 'normal',
  },
  menuContainer: {
    border: '1px solid #000',
    borderRadius: '10px',
    padding: '20px',
  },
  button: {
    display: 'block',
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #000',
    borderRadius: '5px',
    background: '#fff',
    cursor: 'pointer',
  },
  resourcesSection: {
    flex: 2, // Same as messagesSection to take up double space
    padding: '10px', // Add padding for spacing
    border: '1px solid #ccc', // Add a border for visual separation
    borderRadius: '8px', // Rounded corners
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // Box shadow for depth
    margin: '8px'

  },
  resourceList: {
    listStyleType: 'none', // Remove default list styling
    padding: 0,
  },
  resourceItem: {
    marginBottom: '10px', // Space out the items
  },
  resourceLink: {
    textDecoration: 'none', // Remove underline from links
    color: '#007bff', // Link color, can be adjusted
    ':hover': {
      textDecoration: 'underline', // Underline on hover for better UX
    },
  },

  accountSection: {
    textAlign: 'center',
    flex: 2, // Consistent with messagesSection for layout
    textAlign: 'left',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    margin: '8px'

  },
  accountHeader: {
    fontWeight: 'bold',
    fontSize: '18px',
    marginBottom: '10px',
  },
  accountInfo: {
    fontSize: '14px',
    lineHeight: '1.5',
    color: '#333',
  }

};

const DashboardMenu = ({ users_data, messages_data, fetchSentMessages }) => {
  const [showMessages, setShowMessages] = useState(false);
  const [showResources, setShowResources] = useState(false); // New state for resources menu
  const [showAccount, setShowAccount] = useState(false); // New state for My Account section



  useEffect(() => {
    if (showMessages && users_data) {
      fetchSentMessages(users_data.email);
    }
  }, [showMessages, users_data, fetchSentMessages]);


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
  };
  return (
    <div style={styles.container}>
      <div style={styles.dashboardSection}>
        <div style={styles.header}>Dashboard</div>
        <div style={styles.welcome}>Welcome, {users_data ? users_data.firstName : 'John'}</div>
        <div style={styles.menuContainer}>
        <button style={styles.button} onClick={handleAccountClick}>My Account</button>
          <button style={styles.button} onClick={handleMessagesClick}>Messages</button>
        <button style={styles.button} onClick={handleResourcesClick}>Resources</button>
        </div>
      </div>
      {showMessages && (<div style={styles.messagesSection}>
        { !messages_data?.loading && Array.isArray(messages_data.data) && messages_data.data.length > 0 ? (
          messages_data.data.map((message, index) => (
            <MessageCard content={message.message_text} recipient_first_name={message.receiver_first_name} recipient_last_name={message.receiver_last_name} key={index} />
          ))
        ) : (
          <p></p>
        )}
        {showMessages && messages_data.error && <p>Error loading messages.</p>}
      </div>)}
      {showResources && (
  <div style={styles.resourcesSection}>
    <p>Resource Links:</p>
    <ul style={styles.resourceList}>
      <li style={styles.resourceItem}><a style={styles.resourceLink} href="#link1">https://canvas.sfsu.edu/</a></li>
      <li style={styles.resourceItem}><a style={styles.resourceLink} href="#link2">https://gateway.sfsu.edu</a></li>
      <li style={styles.resourceItem}><a style={styles.resourceLink} href="#link2">https://www.khanacademy.org/</a></li>
      <li style={styles.resourceItem}><a style={styles.resourceLink} href="#link2">https://gateway.sfsu.edu</a></li>
    </ul>
  </div>
)}
 {/* My Account Section */}
 {showAccount && (
        <div style={styles.accountSection}>
        <h2 style={styles.accountHeader}>My Account</h2>
        <p style={styles.accountInfo}>{users_data.firstName} {users_data.lastName}</p>
        <p style={styles.accountInfo}>{users_data.email}</p>
        {/* Add more account details as needed */}
      </div>
      )}
    </div>
  );
};


const mapStateToProps = state => ({
  users_data: state.users.userData, // Assuming 'users' reducer is setup correctly
  messages_data: state.messages // Assuming 'messages' reducer is setup correctly
});

const mapDispatchToProps = {
  fetchSentMessages
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardMenu);
