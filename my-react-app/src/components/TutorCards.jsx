import React from 'react';
import styled from 'styled-components';

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
    ratings, 
    classes, 
    description, 
    price, 
    availability, 
    primaryLanguages, 
    cv, 
    secondaryLanguages, 
    subjects,
    name
}) => {
    return (
        <StyledTutorCard>
            {/* This is a placeholder image. You can replace it with a dynamic image linked to the registered user */}
            <img src={profilePicture} alt={`Tutor`} />
            <h3>{name}</h3>
            <div className="attribute"><strong>Classes:</strong> {classes || "N/A"}</div>
            <div className="attribute"><strong>Description:</strong> {description || "N/A"}</div>
            <div className="attribute"><strong>Price:</strong> {price ? `$${price}/hr` : "N/A"}</div>
            <div className="attribute"><strong>Primary Languages:</strong> {primaryLanguages || "N/A"}</div>
            <div className="attribute"><strong>CV:</strong> {cv ? <a href={cv} target="_blank" rel="noreferrer">View CV</a> : "N/A"}</div>
            <div className="attribute"><strong>Secondary Languages:</strong> {secondaryLanguages || "N/A"}</div>
        </StyledTutorCard>
    );
}

export default TutorCard;
