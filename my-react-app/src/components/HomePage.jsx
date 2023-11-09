import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import { connect } from 'react-redux';
import { searchAsync } from '../actions/tutorAction';

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

  & .text-wrapper-8 {
    color: #000000;
    font-family: "Inter-Regular", Helvetica;
    font-size: 1.25rem;   /* Adjusted font size */
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
    white-space: nowrap;
  }

  & .rectangle-5 {
    background-color: #ffffff;
    border: 1px solid #000000;
    border-radius: 1rem;  /* Adjusted border radius */
  }

  & .text-wrapper-12 {
    color: #000000;
    font-family: "Inter-Regular", Helvetica;
    font-size: 2rem;  /* Adjusted font size */
    font-weight: 400;
    text-align: center;
    width: 80%;  /* Adjusted width */
    margin-top: 2rem;  /* Adjusted margin */
  }
`;



export const HomePage = ({ tutors_data, tutors_loading, tutors_error }) => {
  const [query, setQuery] = useState('');
  const results = useSelector(state => state.results);
  const dispatch = useDispatch();
  
  const handleSearch = (query) => {
    dispatch(searchAsync(query));
  };


  
    return (
      <StyledHomePage>
        <div className="div">
          <NavBar />
          <SearchBar />
  
          <p className="text-wrapper-8">What Would You Like To Learn?</p>
            
          <div className="rectangle-5" />
          <p className="text-wrapper-12">
            Welcome to our platform, where knowledge and opportunity converge. Explore a world of learning, connect with
            top tutors, discover engaging courses, and search any department or subject effortlessly to unlock your full
            potential.
          </p>
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
  searchAsync
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
