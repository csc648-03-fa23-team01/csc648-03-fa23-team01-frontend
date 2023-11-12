import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTutor } from '../actions/tutorAction';
import styled from 'styled-components';
import NavBar from './NavBar';
import TutorProfile from './TutorProfile';
import { TutorModel } from '../models/tutorModel';  // Adjust the path as needed
import { connect } from 'react-redux';
import SearchBar from './SearchBar';

const StyledHomePage = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  & .div {
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100vw;
    max-width: 1280px;
  }
`;

const TutorPage = ({ tutors_data, tutors_loading, tutors_error, fetchTutor }) => {
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

  if (loading || tutors_loading) {
    console.log("test",tutors_data)
    return <div>Loading...</div>;
  }

  if (tutor) {
    return (
      <StyledHomePage>
        <div className="div">
          <NavBar />
          <SearchBar/>
          <TutorProfile {...tutor} />
        </div>
        <div>

        </div>
      </StyledHomePage>
    );
  } else {
    return <div>Tutor data not available</div>;
  }
};

const mapStateToProps = (state) => ({
  tutors_data: state.tutors.data,
  tutors_loading: state.tutors.loading,
  tutors_error: state.tutors.error,
});

const mapDispatchToProps = {
  fetchTutor
};

export default connect(mapStateToProps, mapDispatchToProps)(TutorPage);
