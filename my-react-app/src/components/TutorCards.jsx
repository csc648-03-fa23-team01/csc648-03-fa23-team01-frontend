import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Import from React Router if you're using it
// import RatingStars from './RatingStars'; // Import your star rating component

// Adjusted StyledTutorCard for smaller size
const StyledTutorCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5vw;
  width: 20vw;
  margin: 2vw auto; // Add 'auto' to keep it centered horizontally and '2vw' for top and bottom margin
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
    text-align: center;
    line-height: 1.4;
  }
`;

// TutorCard component

const TutorCard = ({
  profilePicture,
  name,
  description,
  link, // Assuming you have a link prop for the tutor's profile page
  // ... other props
}) => {
  // Truncate the description to fit within the card
  const truncateText = (text, length) => {
    return text.length > length ? text.substring(0, length) + '...' : text;
  };

  return (
    <Link to={link} style={{ textDecoration: 'none', color: 'inherit' }}> {/* Use Link for navigation */}
      <StyledTutorCard>
        <img src={profilePicture} alt={`Tutor ${name}`} />
        <h3>{name}</h3>
        {/* <RatingStars rating={5} /> Replace with your star rating component */}
        <div className="attribute">{truncateText(description, 80)}</div> {/* Limit the bio to 80 characters */}
      </StyledTutorCard>
    </Link>
  );
};

export default TutorCard;
