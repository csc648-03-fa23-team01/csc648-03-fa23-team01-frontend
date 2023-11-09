import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';



const ProfileContainer = styled.div`
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
  padding: 30px;
  width: 66vw; // 2/3 of the viewport width
  max-width: 800px; // Max width can be adjusted or removed as necessary
  display: flex;
  flex-direction: column;
  align-items: center; // Center children horizontally
  margin: auto; // Center the container in the available space
  margin-top: 30px; // Adjust as needed for spacing from the top
  img {
    width: 10vw ;
    align: center
  }
`;

const InfoSection = styled.div`
`;

const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eaeaea;
  padding: 10px 0;
  font-size: 1.5em;
`;



const Skills= styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
`;


const SkillItem = styled.div`
  background-color: #f3f3f3;
  color: #333;
  border-radius: 15px;
  font-size: 0.8em;
  margin-right: 10px;
  margin-bottom: 10px;
`;

const TutorProfile = ({
    id,
    firstName,
    lastName,
    email,
    profilePictureLink,
    verifiedStatus,
    averageRatings,
    classes,
    description,
    price,
    timesAvailable,
    mainLanguages,
    preferInPerson,
    cvLink,
    otherLanguages,
    subjects
}) => {
  return (
    <ProfileContainer>
    <header>
      <img src={profilePictureLink} alt={`${firstName} ${lastName}`} />
      <h1>{`${firstName} ${lastName}`}</h1>
      <div>Rankings: {averageRatings}/10</div>
    </header>
    <Link to={`/message`} style={{ textDecoration: 'none', color: 'inherit' }}>
    <button>Send Message</button>
    </Link>
    <InfoSection>
      <InfoItem>
        <span>Email</span>
        <span>{email}</span>
      </InfoItem>
      <InfoItem>
        <span>Classes</span>
        <span>{classes}</span>
      </InfoItem>
      <InfoItem>
        <span>Description</span>
        <span>{description}</span>
      </InfoItem>
      <InfoItem>
        <span>Price</span>
        <span>${price}</span>
      </InfoItem>
      <InfoItem>
        <span>Times Available </span>
        <span>{timesAvailable}</span>
      </InfoItem>
      <InfoItem>
        <span>Main Languages</span>
        <span>{mainLanguages}</span>
      </InfoItem>
      <InfoItem>
        <span>Other Languages</span>
        <span>{otherLanguages}</span>
      </InfoItem>
      <InfoItem>
        <span>Prefer In-Person</span>
        <span>{preferInPerson ? "Yes" : "No"}</span>
      </InfoItem>
    </InfoSection>
    <Skills>
      {subjects && subjects.map(subject => <SkillItem key={subject}>{subject}</SkillItem>)}
    </Skills>
  </ProfileContainer>
);
};

export default TutorProfile;
