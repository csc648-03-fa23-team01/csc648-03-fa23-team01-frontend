import React, { useEffect,useState } from 'react';
import Navbar from "./NavBar.jsx";
import { useParams } from 'react-router-dom';
import { fetchTutor } from '../actions/tutorAction';
import styled from "styled-components";
import Messenger from "./Messenger.jsx"
import { connect } from 'react-redux';
import { searchAsync } from '../actions/tutorAction';
import { TutorModel } from '../models/tutorModel.jsx';

const StyledResultPage = styled.div`
`;

const recipient = {
    name: "John Doe",
    photo: "https://via.placeholder.com/150" // Replace with actual image source
};

export const SendMessagePage = ({ tutors_data, tutors_loading, tutors_error }) => {

  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [tutor, setTutor] = useState(null); // Use state for tutor

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
  const [query, setQuery] = useState('');
  if (tutor) {
    return (
      <StyledResultPage>
        <div>
        <Navbar />
        </div>
        <div >
        <Messenger recipient={tutor} />

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
});

const mapDispatchToProps = {
  fetchTutor
};

export default connect(mapStateToProps, mapDispatchToProps)(SendMessagePage);
