import React from 'react';
import styled from 'styled-components';

const StyledTutorCard = styled.div`
  border: 0.1vw solid #ccc;
  border-radius: 0.8vw;
  padding: 1.6vw;
  width: 35vw;
  margin: 2vw;
  align-items: center;

  box-shadow: 0 0.4vw 0.8vw rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 20vw;
    object-fit: cover;
    border-radius: 0.4vw;
    margin-bottom: 1.6vw;
  }

  h3 {
    margin: 0;
    margin-bottom: 0.8vw;
    font-size: 2vw;
  }

  .attribute {
    font-size: 1.6vw;
    margin-bottom: 0.8vw;
  }

`;

const TutorCard = ({
    tutorID,
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
            <div className="attribute"><strong>Expertise in Subject:</strong> {subjects.slice(0, -1).join(', ') + ' and ' + subjects.slice(-1) || "N/A"}</div>
        </StyledTutorCard>
    );
}

export default TutorCard;
