import React from 'react';
import styled from 'styled-components';
import { Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';

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
const messageStyle = {
    position: 'absolute',
    top: '0', // Adjust as needed for your layout
    right: '0', // Adjust as needed for your layout
    left: '0', // Adjust as needed for your layout
    textAlign: 'center', // Centers the text in the div
    backgroundColor: '#FFF', // Change this to match your design
    padding: '0.5rem 1rem', // Add some padding around the text
    // Add other styling as needed for your design
  };
  
const profileGroupStyle1 = {
  marginBottom: "10px",
  display: 'flex',       // Enable flexbox
  justifyContent: 'start', // Center children horizontally
  display: 'flex',
  'flex-direction' : 'row'
};

const DescriptionStyle = {
    maxWidth: '500px', // Adjust the pixel width as needed
    whiteSpace: 'pre-wrap', // This will ensure that text respects newline characters and wraps
    wordWrap: 'break-word', // This ensures that long words do not overflow
  };
  
  const priceStyle = {
  position: 'absolute', // This positions the price absolutely within the StyledTutorCard
  top: '4rem', // Adjust as needed for your layout
  right: '6rem', // Adjust as needed for your layout
  fontSize: '1rem', // Adjust as needed for your layout
};

const ratingContainerStyle = {
    position: 'absolute', // This positions the rating container absolutely within the StyledTutorCard
    top: '2rem', // Adjust as needed for your layout
    right: '4.4rem', // Adjust as needed for your layout
    display: 'flex', // This will align the Rating component and the text next to each other
    alignItems: 'center', // This will vertically center align the items in the container
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

const ratingValue = 4.5; // Your dynamic rating value
const reviewCount = 100; // Your dynamic review count value

// TutorCards_BecomeTutor component

const TutorCards_BecomeTutor = ({
  id,
    name,
    description,
    subjects,
    profilePictureLink,
    // link,
    ratings, // Use 'ratings' here if that's what's being passed
    price,

    // ... other props
  }) => {
    const truncateText = (text, length) => {
      return text.length > length ? text.substring(0, length) + '...' : text;
    };

    return (
        // <Link to={link} style={{ textDecoration: 'none', color: 'inherit' }}>
          <StyledTutorCard>
            <div style={fullStyle}>
              <div style={profileGroupStyle1}>
                <img style={imageStyle} src={profilePictureLink} alt={`Tutor ${name}`} />
                <div>
                  <h3 style={tutorCardNameStyle}>{name}</h3>
                  {/* Absolute positioned rating div */}
          <div style={ratingContainerStyle}>
            <Rating
              name="text-feedback"
              value={ratings}
              readOnly
              precision={0.5}
              emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            {/* Span for rating value and review count */}
            <span><strong>{ratingValue}</strong> ({reviewCount})</span>
          </div>
                </div>
              </div>
              <div style={DescriptionStyle}>{description}</div>
              <h4>{subjects[0]} tutor</h4>
              {/* Absolute positioned price div */}
          {price && (
            <div style={priceStyle}>
              price: ${price}/hr
            </div>
          )}
      <Link to={`/tutor/${id || '404'}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <ViewProfileButton>View Tutor Profile</ViewProfileButton>
              </Link>
            </div>
          </StyledTutorCard>
        // </Link>
      );
      
      
};

export default TutorCards_BecomeTutor;
