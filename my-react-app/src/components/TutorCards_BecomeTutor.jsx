import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Import from React Router if you're using it
import { Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
// import RatingStars from './RatingStars'; // Import your star rating component

// Adjusted StyledTutorCard for smaller size
const StyledTutorCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 1.5vw;
  width: 65rem;
  height: auto; // Changed from a fixed height to accommodate the button
  margin: 2vw auto;
  border: 0.7vw solid #ccc;
  border-radius: 0.8vw;
  box-shadow: 0 0.4vw 0.8vw rgba(0, 0, 0, 0.1);
  background: #fff;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-0.5vw);
  }

  img {
    width: 8vw; // Adjust for smaller image size
    height: 8vw; // Adjust for smaller image size
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1vw;
  }

  h3 {
    margin: 0.5vw 0;
    font-size: 1.5vw; // Adjust for smaller text size
  }

  .attribute {
    font-size: 1vw; // Adjust for smaller text size
    margin: 0.5vw 0;
    line-height: 1.4;
  }
`;
const ViewProfileButton = styled.button`
  position: absolute; // Keep the button absolutely positioned within the card
  bottom: 1vw; // Adjust as needed to place the button from the bottom
  right: 1vw; // Adjust as needed to place the button from the right
  padding: 0.5em 1em; // Padding inside the button
  border: none;
  border-radius: 0.4vw;
  background-color: #FFFFFF; // Example button color
  color: black;
  box-shadow: 0 0.4vw 0.8vw rgba(0, 0, 0, 0.1);
  border: 0.1vw solid #000;
  border-radius: 5vw;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #F6A833; // Darker shade when hovered for visual feedback
  }
`;
const RatingContainer = styled.div`
  position: absolute;
  bottom: 3vw; // Adjust this value so it appears above the button
  right: 1.5vw; // Align to the right, same as the button
  display: flex;
  align-items: center; // Center align the items for better aesthetics
`;
const profileGroupStyle1 = {
  marginBottom: "10px",
  display: 'flex',       // Enable flexbox
  justifyContent: 'start', // Center children horizontally
  display: 'flex',
  'flex-direction' : 'row'
};



const imageStyle = {
  width: '3.375rem',
  height: '3.375rem',
  'margin-right': '0.3rem',
}

const tutorCardNameStyle = {
  'font-size': '1.25rem'
}
const fullStyle = {
  display: 'flex',
  'flex-direction' : 'column'
}

// TutorCards_BecomeTutor component

const TutorCards_BecomeTutor = ({
    profilePicture,
    name,
    description,
    subjects,
    // link,
    ratings, // Use 'ratings' here if that's what's being passed
    price,

    // ... other props
  }) => {
    const truncateText = (text, length) => {
      return text.length > length ? text.substring(0, length) + '...' : text;
    };

  return (
    // <Link to={link} style={{ textDecoration: 'none', color: 'inherit' }}> {/* Use Link for navigation */}
      <StyledTutorCard>
        <div style={fullStyle}>
          <div style={profileGroupStyle1}>
            <img style={imageStyle} src={profilePicture} alt={`Tutor ${name}`} />
            <div>
              <h3 style={tutorCardNameStyle}>{name}</h3>
              <Rating
                name="text-feedback"
                value={ratings}
                readOnly
                precision={0.5}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
              />
            </div>
          </div>
          <div className="attribute">{truncateText(description, 200)}</div> {/* Limit the bio to 80 characters */}
          {/* Add a div or span to display the ratings here */}
        <div style={{ alignSelf: 'flex-end', marginRight: '1.5vw', marginBottom: '1.5vw' }}>
          {price && <span>price: ${price}/hr</span>}
        </div>
          <h4>{subjects[0]} tutor</h4>
        </div>
        <ViewProfileButton>View Tutor Profile</ViewProfileButton>
      </StyledTutorCard>
    // </Link>
  );
};

export default TutorCards_BecomeTutor;
