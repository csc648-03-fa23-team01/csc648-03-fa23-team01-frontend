import React, { useEffect,useState } from 'react';
 import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getUserTutors } from "../actions/userAction";
import { connect } from 'react-redux';

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: space-between; // Adjusted to 'space-between' for consistent spacing
  flex-wrap: wrap; // This will allow items to wrap onto the next line if the viewport is not wide enough
  margin: 30px auto; // Center the wrapper with a top margin
  width: 100%; // Ensure the wrapper spans the full width
  max-width: 1200px; // Adjust this value as needed to be 2/3 of your max page width
`;
const ProfileAboutContainer = styled.div`
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
  padding: 30px;
  display: flex;
  flex: 1 1 45%; // Adjusted for closer spacing, represents the maximum width
  flex-direction: column;
  align-items: center;
  margin: auto;
`;
const ProfileContainer = styled.div`
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
  padding: 30px;
  flex: 1 1 300px; // Flex-grow, flex-shrink and flex-basis
  max-width: calc(50% - 15px); // Subtract half the gap to account for flex spacing
  max-width: 540px; // Half of the ProfileWrapper's max-width minus the gap
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;
const Header = styled.header`
  text-align: center;
  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #eaeaea;
  }
  h1 {
    margin: 10px 0;
  }
  div {
    font-size: 1em;
    color: #ffcc00;
  }
`;

const Button = styled.button`
  background-color: #f0ad4e;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px 30px;
  margin-top: 20px;
  font-size: 1em;
  cursor: pointer;
  &:hover {
    background-color: #ec971f;
  }
`;

const InfoSection = styled.div`
  width: 100%;
`;


const Skills = styled.div`
  gap: 10px;
  margin-top: 20px;
  text-align: center;

`;

const SkillItem = styled.div`
  background-color: #f3f3f3;
  color: #333;
  border-radius: 15px;
  padding: 10px;
  font-size: 1em;
  text-align: center;
`;

const AboutSection = styled.section`
  text-align: left;
  margin-top: 20px;
`;

const Title = styled.h2`
  font-size: 1.5em;
  color: #000;
  margin-bottom: 10px;
  text-align:center;
`;

const DescriptionText = styled.p`
  font-size: 1em;
  margin-bottom: 10px;
`;

const CoursesSection = styled.div`
  margin-top: 20px;
`;

const CourseList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const CourseItem = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: 1em;
  margin-bottom: 5px;
`;

const LanguagesSection = styled.div`
  margin-top: 20px;
`;

const LanguageList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const LanguageItem = styled.span`
  background-color: #f3f3f3;
  color: #333;
  border-radius: 15px;
  padding: 5px 10px;
  font-size: 0.9em;
  text-align: center;
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
    subjects,users_data, getUserTutors
}

) => {
    const courseList = classes.split(',').map((course) => course.trim());
    const languageList = mainLanguages
      ? [mainLanguages, ...(otherLanguages ? otherLanguages.split(',') : [])]
      : [];
      const [isLoggedin, setIsLoggedin] = useState(false);

      useEffect(() => {
        if (users_data) {
            console.log("Logged in as :", users_data);
            setIsLoggedin(true); // Set isLoggedin to true if users_data exists
        } else {
            setIsLoggedin(false); // Set to false if users_data is not available
        }
    }, [users_data]);

    return (
        <ProfileWrapper>
        <ProfileContainer>
      <Header>
        <img src={profilePictureLink} alt={`${firstName} ${lastName}`} />
        <h1>{`${firstName} ${lastName}`}</h1>
        <div>
          {Array.from({ length: 5 }, (_, index) => (
            <span key={index}>★</span>
          ))}
          {averageRatings}
        </div>
        <span>Computer Science</span>
        <div>Hourly Rate: ${price}</div>
      </Header>
      {isLoggedin ? (
                    <Link to={`/message/${id}`} style={{ textDecoration: 'none' }}>
                        <Button>Message</Button>
                    </Link>
                ) : (
                  <Link to={`/login`} style={{ textDecoration: 'none' }}>
                    <Button>Login</Button>
                    </Link>

                )}
      <InfoSection>
        {/* ...InfoItems */}
      </InfoSection>
      <Skills>
        {timesAvailable}
      </Skills>
    </ProfileContainer>

        <ProfileAboutContainer>
            <AboutSection>
                <Title>About</Title>
                <DescriptionText>{description}</DescriptionText>
            </AboutSection>
            <CoursesSection>
                <Title>SFSU Courses</Title>
                <CourseList>
                    {courseList.map((course, index) => (
                        // Assuming each even index is a course code and each odd index is the course name
                        index % 2 === 0 ? (
                            <CourseItem key={course}>
                                <span>{course}</span> 
                                <span>{courseList[index + 1]}</span>
                            </CourseItem>
                        ) : null
                    ))}
                </CourseList>
            </CoursesSection>
            {languageList.length > 0 && (
                <LanguagesSection>
                    <Title>Languages</Title>
                    <LanguageList>
                        {languageList.map((language, index) => (
                            <LanguageItem key={index}>{language.trim()}</LanguageItem>
                        ))}
                    </LanguageList>
                </LanguagesSection>
            )}
        </ProfileAboutContainer>

      </ProfileWrapper>

      );
    };
    const mapStateToProps = (state) => ({
      users_data: state.users.userData
    });
    const mapDispatchToProps = {
      getUserTutors
    };

export default connect(mapStateToProps, mapDispatchToProps)(TutorProfile);
