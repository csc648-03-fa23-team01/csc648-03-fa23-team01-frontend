import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Import from React Router if you're using it
import { Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const StyledTutorCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 1.5vw;
  width: 20rem;
  height: 13.94rem;
  margin: 0; // Add 'auto' to keep it centered horizontally and '2vw' for top and bottom margin
  margin-right: 2rem;
  border: 0.7vw solid #ccc;
  border-radius: 0.8vw;
  box-shadow: 0 0.4vw 0.8vw rgba(0, 0, 0, 0.1);
  background: #fff;
  transition: transform 0.3s ease;
  font-family: 'Inter';

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
    font-size: 1.25rem; // Adjust for smaller text size
    font-weight: 400;
  }

  .subject {
    color: #7133F6;
    fontSize : 0.94rem;
    font-weight: 400;
  }

  .description {
    fontSize : 0.94rem;
    margin: 0.5rem 0;
    line-height: 1.4;
  }
`;

const profileGroupStyle1 = {
  marginBottom: 0,
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
  'font-size': '1.25rem',
  'margin-bottom' : 0
}
const fullStyle = {
  display: 'flex',
  'flex-direction' : 'column'
}


// TutorCard component

const TutorCard = ({
  profilePicture,
  name,
  description,
  rating,
  subject,
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
        <div style = {fullStyle}>
        <div style ={profileGroupStyle1}>
        <img style={imageStyle} src={profilePicture} alt={`Tutor ${name}`} />
          <div>
          <h3 style={tutorCardNameStyle}>{name}</h3>
          <Rating
            name="customized-rating"
            value={rating}
            readOnly
            precision={0.5}
            icon={<StarIcon style={{ width: '0.7rem', height: '0.7rem' }} fontSize="inherit" />}
            emptyIcon = {<StarIcon style={{ width: '0.7rem', height: '0.7rem' }} fontSize="inherit" />}
          />
          </div>
        </div>
        <div className="description">{truncateText(description, 200)}</div> {/* Limit the bio to 80 characters */}
        </div>
        <div className="subject" >{subject} tutor</div>
        
      </StyledTutorCard>
    </Link>
  );
};

export default TutorCard;