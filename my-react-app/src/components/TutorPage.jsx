import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import NavBar from './NavBar';
import { connect } from 'react-redux';
import { fetchTutor } from '../actions/tutorAction';
import TutorCard from './TutorCards';

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
    height: 100vh;   /* Adjusted from a fixed height */
    width: 100vw;    /* Adjusted from a fixed width */
    max-width: 1280px;  /* If you still want to limit it to 1280px at larger screens */
  }

`;



export const TutorPage = ({ tutors_data, tutors_loading, tutors_error, match}) => {
  const [id, setQuery] = useState('');
  const results = useSelector(state => state.results);
  const dispatch = useDispatch();
  
  const handleSearch = (id) => {
    dispatch(fetchTutor(id));
  };


  
    return (
      <StyledHomePage>
        <div className="div">
          <NavBar />
        </div>
        <div>
            <TutorCard/>
        </div>
      </StyledHomePage>
  );
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
