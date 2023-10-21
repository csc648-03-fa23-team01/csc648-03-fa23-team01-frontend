import React from 'react';
import styled from 'styled-components';

const StyledTutorCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  width: 350px;
  margin: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 4px;
    margin-bottom: 16px;
  }

  h3 {
    margin: 0;
    margin-bottom: 8px;
    font-size: 20px;
  }

  .attribute {
    font-size: 16px;
    margin-bottom: 8px;
  }
`;

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
    expertiseInSubject,
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
            <div className="attribute"><strong>Secondary Languages:</strong> {secondaryLanguages || "N/A"}</div>
            <div className="attribute"><strong>Expertise in Subject:</strong> {expertiseInSubject || "N/A"}</div>
        </StyledTutorCard>
    );
}

export default TutorCard;
