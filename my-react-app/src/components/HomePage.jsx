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
import { tutorProfiles } from '../constants/tutorProfiles'; // Import tutorProfiles from the constants folder


const StyledHomePage = styled.div`
  background: url(${background_image}) no-repeat center center;
  background-size: cover;
  position: relative;
  width: 100%;
  height: 500px;
`;

const TextWrapper = styled.p`
  text-align: center;
  margin-top: 2rem;
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
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const TutorProfile = styled.div`
  margin-top: 200px; /* Adjust the margin as needed */
  cursor: pointer;
  text-align: center;
`;

const TutorImage = styled.img`
max-width: 400px; /* Increase this value to make the images larger */
max-height: 200px; /* Increase this value to make the images larger */
`;

export const HomePage = ({ tutors_data, tutors_loading, tutors_error }) => {
  const [query, setQuery] = useState('');
  const results = useSelector(state => state.results);
  const dispatch = useDispatch();

  const handleSearch = query => {
    dispatch(searchAsync(query));
  };

  

  return (
    <StyledHomePage>
      <NavBar />
      <div className="div">
        <TextWrapper>What Would You Like To Learn?</TextWrapper>
        <SearchBar isHomePage={true} />

        <div className="rectangle-5" />
        <TextWrapper1>
          Welcome to our platform, where knowledge and opportunity converge. Explore a world of learning, connect with top
          tutors, discover engaging courses, and search any department or subject effortlessly to unlock your full potential.
        </TextWrapper1>
        <TutorProfilesWrapper>
          {tutorProfiles.map((profile, index) => (
            <TutorProfile
              key={index}
              onClick={() => {
                // Handle the click to navigate to the tutor's profile
                // Example: history.push(profile.link);
              }}
            >
              <TutorImage src={profile.image} alt={`Tutor ${index + 1}`} />
              <div>{profile.name}</div>
              <div>{profile.topic}</div>
            </TutorProfile>
          ))}
        </TutorProfilesWrapper>
      </div>
    </StyledHomePage>
  );
};

const mapStateToProps = state => ({
  tutors_data: state.tutors.data,
  tutors_loading: state.tutors.loading,
  tutors_error: state.tutors.error,
});

const mapDispatchToProps = {
  searchAsync,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
