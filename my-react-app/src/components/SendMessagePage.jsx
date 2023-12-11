import React, { useEffect,useState } from 'react';
import Navbar from "./NavBar.jsx";
import { useParams } from 'react-router-dom';
import { fetchTutor } from '../actions/tutorAction';
import styled from "styled-components";
import Messenger from "./Messenger.jsx"
import { connect } from 'react-redux';
import { searchAsync } from '../actions/tutorAction';
import { TutorModel } from '../models/tutorModel.jsx';
import { getUserTutors } from "../actions/userAction";

const StyledResultPage = styled.div`
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


export const SendMessagePage = ({ users_data,tutors_data, tutors_loading, tutors_error }) => {

  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [tutor, setTutor] = useState(null); // Use state for tutor
  const [user, setUser] = useState(null); // Use state for tutor

  useEffect(() => {
    const user_id = params.user_id;
    console.log(user_id)
    if (user_id) {
      setLoading(true);
      console.log("loading")
      fetchTutor(user_id);
    }
  }, [fetchTutor, params.user_id]);

  useEffect(() => {
    if (tutors_data) {
      console.log("loading found", tutors_data)
      setLoading(false);
      setTutor(TutorModel.fromJSON(tutors_data)); // Update tutor state
    }
  }, [tutors_data]);

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
  
  const [query, setQuery] = useState('');
  if (tutor) {
    return (
      <StyledResultPage>
        <div>
        <Navbar />
        </div>
        <div >
        <Messenger recipient={tutor} sender={user} />

        </div>

      </StyledResultPage>
    );
  } else {
    return <div>Tutor data not available</div>;
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(SendMessagePage);
