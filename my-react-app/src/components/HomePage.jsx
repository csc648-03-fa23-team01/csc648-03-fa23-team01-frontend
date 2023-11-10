import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import { connect } from 'react-redux';
import { searchAsync } from '../actions/tutorAction';
import background_image from '../assets/images/Background_Image.png';
import { tutorProfiles } from '../constants/tutorProfiles';

import TutorCard from './TutorCards'; 


const StyledHomePage = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh; // Changed to ensure full vertical coverage
  overflow-x: hidden;
`;

const BackgroundImage = styled.div`
  background: url(${background_image}) no-repeat center center fixed;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 27.5rem;
  z-index: -1;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 27.5rem;
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
  font-size: 2.5rem;
  font-weight: 400;
  font-family: 'Inter';
`;

const TutorProfilesWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 12rem; // Adjust this value to position the wrapper as desired
  margin-right: 2rem;
  margin-left: 2rem;
  margin-bottom: 2rem;
`;

// HomePage component definition
const HomePage = () => {
  const dispatch = useDispatch();

  return (
    <StyledHomePage>
      <BackgroundImage />
      <Overlay />
      <ContentContainer>
        <NavBar />
        <TextWrapper>"Welcome to the world of learning!"</TextWrapper>
        <SearchBar isHomePage={true} large ={true} onSearch={(query) => dispatch(searchAsync(query,"Subject"))} />
        <TutorProfilesWrapper  >
          {tutorProfiles.map((profile, index) => (
            <TutorCard
              key={index}
              profilePicture={profile.image}
              name={profile.name}
              description={profile.description}
              subjects={profile.topic} // Make sure this is the correct prop to pass based on your data structure
              rating={profile.rating}
              subject={profile.subject}
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