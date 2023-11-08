import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import image1 from '../assets/images/Polygon1.svg';
import image2 from '../assets/images/Rectangle46.svg';
import { connect } from 'react-redux';
import { searchAsync } from '../actions/tutorAction';
import background_image from '../assets/images/Background_Image.png';
import { tutorProfiles } from '../constants/tutorProfiles';

import TutorCard from './TutorCards'; // Adjust the path to your TutorCard component


const StyledHomePage = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh; // Changed to ensure full vertical coverage
`;

const BackgroundImage = styled.div`
  background: url(${background_image}) no-repeat center center fixed;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  z-index: -1;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background-color: rgba(0, 0, 0, 0.4); // Dark overlay with 40% opacity
  z-index: 1; // Ensure the overlay is above the background image
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 2; // Ensure the content is above the overlay
`;


const TextWrapper = styled.p`
  color: #fff; /* This sets the text color to white */
  text-align: center;
  margin-top: 2rem;
  font-size: 2.5em; /* Example size, adjust as needed */
  font-weight: bold;
  font-family: 'Open Sans', sans-serif;
`;

const TextWrapper1 = styled.div`
  text-align: center;
  margin: 2rem auto;
  width: 80%;
  line-height: 1.5;
  font-weight: bold;
  font-family: 'Open Sans', sans-serif;
`;
const TutorProfilesWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 2vw 0;
`;

// Styled components for TutorCard
const StyledTutorCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2vw;
  width: 35vw;
  margin: 2vw;
  border: 0.1vw solid #ccc;
  border-radius: 0.8vw;
  box-shadow: 0 0.4vw 0.8vw rgba(0, 0, 0, 0.1);
  background: #fff;

  img {
    width: 10vw;
    height: 10vw;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1vw;
  }

  h3 {
    margin: 0.5vw 0;
    font-size: 2vw;
  }

  .attribute {
    font-size: 1.2vw;
    margin: 0.5vw 0;
    text-align: center;
    line-height: 1.4;
  }
`;



// HomePage component definition
const HomePage = ({ tutors_data, tutors_loading, tutors_error }) => {
  const dispatch = useDispatch();
  
  return (
    <StyledHomePage>
      <BackgroundImage />
      <Overlay />
      <ContentContainer>
        <NavBar />
        <TextWrapper>"Welcome to the world of learning!"</TextWrapper>
        <SearchBar isHomePage={true} onSearch={(query) => dispatch(searchAsync(query))} />
        <TutorProfilesWrapper>
          {tutorProfiles.map((profile, index) => (
            <TutorCard
              key={index}
              profilePicture={profile.image}
              name={profile.name}
              description="Experienced Physics tutor dedicated to demystifying the laws of the universe, making science engaging and accessible for all"
              subjects={profile.topic} // Make sure this is the correct prop to pass based on your data structure
            />
          ))}
        </TutorProfilesWrapper>
      </ContentContainer>
    </StyledHomePage>
  );
};

// Redux connect for the HomePage
const mapStateToProps = state => ({
  tutors_data: state.tutors.data,
  tutors_loading: state.tutors.loading,
  tutors_error: state.tutors.error,
});

const mapDispatchToProps = {
  searchAsync,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);