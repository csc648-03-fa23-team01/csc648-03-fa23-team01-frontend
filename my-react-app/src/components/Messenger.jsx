import React, { useEffect,useState } from 'react';
import styled from "styled-components";
import { getUserTutors } from "../actions/userAction";
import { fetchTutor } from '../actions/tutorAction';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const StyledMessenger = styled.div`
    .message-writer {
        max-width: 66.66vw; /* Adjust the viewport width if needed */
        margin: 2rem auto;
        padding: 1.5rem;
        background-color: #f9f9f9;
        border-radius: 0.5rem;
        box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        align-items: center;

        .recipient-card {
            display: flex;
            align-items: center;
            background-color: #f2f2f2;
            border-radius: 0.5rem;
            padding: 0.5rem;
            margin-bottom: 1rem;
            width: calc(100% - 2rem); /* Match width with inputs and textarea */
        }

        .recipient-photo {
            width: 3rem;
            height: 3rem;
            border-radius: 1.5rem;
            object-fit: cover;
            margin-right: 0.5rem;
        }

        .recipient-info h3 {
            margin: 0;
            font-size: 1rem;
        }

        input,
        textarea,
        button {
            display: block;
            width: calc(100% - 2rem); /* Adjust width considering padding */
            padding: 0.5rem;
            margin-bottom: 0.5rem;
            border: 1px solid #ddd;
            border-radius: 0.25rem;
            box-sizing: border-box;
        }

        textarea {
            resize: vertical;
        }

        button {
            padding: 0.5rem 1rem;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 0.25rem;
            cursor: pointer;
            font-size: 1rem;

            &:hover {
                background-color: #0056b3;
            }
        }
    }
`;

const getUserIdByEmail = async (email) => {
    try {
      // Constructing the query URL with a query parameter for email
      const queryAddress = `${process.env.REACT_APP_BACKEND_URL}/getUserByEmail?email=${encodeURIComponent(email)}`;
  
      const response = await fetch(queryAddress, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Include other headers as required by your API
        },
      });
  
      const data = await response.json();
      console.log("Received", data);
  
      if (response.ok) {
        // Assuming the response structure contains an object with a 'user' field
        return data.user; 
      } else {
        throw new Error(data.detail || 'Unknown error occurred');
      }
    } catch (error) {
      console.error('Error fetching user:', error);
      return null; // Handle the error as per your app's design
    }
  };
  
const Messenger = ({ recipient, sender, users_data}) => {

    const [message, setMessage] = useState('');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [user, setUser] = useState(null); // Use state for tutor
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSendMessage = async () => {
        console.log('Message sent:', message);
        console.log("sender reciever ",sender, recipient)
        // Define the payload
        const queryParams = new URLSearchParams({
            sender_id: sender.id,
            receiver_id: recipient.id,
            text: message
        });
        const queryAddress = `${process.env.REACT_APP_BACKEND_URL}/message?${queryParams.toString()}`;

        try {
            // Send POST request to your endpoint
            const response = await fetch(queryAddress, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            const data = await response.json();
            console.log('Response:', data);
            
            setShowSuccessMessage(true);
            setTimeout(() => {setShowSuccessMessage(false);navigate('/ResultPage');  // Navigate to ResultsPage after 3 seconds
        }, 2000); // Hide the message after 3 seconds
            
            setMessage(''); // Clear the message input after sending
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    useEffect(() => {
        const fetchUser = async () => {
          if (users_data) {
            const fetchedUser = await getUserIdByEmail(users_data.email);
            setUser(fetchedUser); // Update user state
            console.log("Logged in as:", users_data);
            console.log("userid", fetchedUser); // Log the fetched user
          }
        };
      
        fetchUser();
      }, [users_data]);
    

    console.log("recipient", user)
    return (
        <StyledMessenger>
            {showSuccessMessage && (
            <div style={{ color: 'green', marginTop: '10px', textAlign:"center"}}>
                Message sent successfully!
            </div>
        )}
            <div className="message-writer">
            <div className="recipient-card">
                <img src={recipient.profilePictureLink} alt={recipient.name} className="recipient-photo" />
                <div className="recipient-info">
                    <h3>{recipient.firstName} {recipient.lastName}</h3>
                </div>
            </div>
            <textarea
                    placeholder="Body"
                    rows="4"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button onClick={handleSendMessage}>Send Message</button>
            </div>
            
        </StyledMessenger>
    );
};

const mapStateToProps = (state) => ({
  tutors_data: state.tutors.data,
  tutors_loading: state.tutors.loading,
  tutors_error: state.tutors.error,
  users_data: state.users.userData
});

const mapDispatchToProps = {
  fetchTutor,
  getUserTutors
};

export default connect(mapStateToProps, mapDispatchToProps)(Messenger);
