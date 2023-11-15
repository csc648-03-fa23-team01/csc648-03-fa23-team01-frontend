import React, { useState }  from "react";
import styled from "styled-components";
import { NavBar } from "../components/NavBar";
import { Description } from "@mui/icons-material";

// Styled components
const ApplyForATutor = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;


const OverlapGroup = styled.div`
  background-color: #ffffff;
  border: 1px solid;
  border-color: #0000004c;
  border-radius: 10px;
  box-shadow: 0px 4px 4px #00000040;
  height: 1081px;
  left: 210px;
  position: absolute;
  top: 109px;
  width: 860px;
`;

const ApplyToBeATutor = styled.p`
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 30px;
  font-weight: 400;
  left: 243px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: -13px;
  width: 390px;
`;

const IAgreeToWebsite = styled.p`
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  left: 176px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 947px;
  width: 563px;
`;

const TextWrapper = styled.span`
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0;
`;

const Span = styled.span`
  text-decoration: underline;
`;

const CheckBox = styled.input`
  background-color: #ffffff;
  border: 1px solid;
  border-color: #0000004c;
  box-shadow: 0px 4px 4px #00000040;
  height: 20px;
  position: absolute;
  left: 131px;
  top: 966px;
  width: 20px;
`;

const TextWrapper2 = styled.div`
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  position: absolute;
  left: 279px;
  letter-spacing: 0;
  line-height: normal;
  top: 67px;
  width: 265px;
`;

const TextWrapper3 = styled.div`
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  position: absolute;
  left: 281px;
  letter-spacing: 0;
  line-height: normal;
  top: 172px;
  width: 285px;
`;

const Paragraph = styled.p`
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  position: absolute;
  left: 281px;
  letter-spacing: 0;
  line-height: normal;
  top: 252px;
  width: 285px;
`;

const TextWrapper4 = styled.div`
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  position: absolute;
  left: 281px;
  letter-spacing: 0;
  line-height: normal;
  top: 360px;
  width: 285px;
`;
const TextWrapper5 = styled.div`
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  position: absolute;
  left: 281px;
  letter-spacing: 0;
  line-height: normal;
  top: 667px;
  width: 285px;
`;

const TextWrapper6 = styled.div`
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  position: absolute;
  left: 281px;
  letter-spacing: 0;
  line-height: normal;
  top: 764px;
  width: 285px;
`;

const TextWrapper7 = styled.div`
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  position: absolute;
  left: 281px;
  letter-spacing: 0;
  line-height: normal;
  top: 861px;
  width: 285px;
`;

const ClickOnTheChoose = styled.p`
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  position: absolute;
  left: 281px;
  letter-spacing: 0;
  line-height: normal;
  top: 447px;
  width: 551px;
`;

const ClickOnTheChoose2 = styled.p`
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  position: absolute;
  left: 279px;
  letter-spacing: 0;
  line-height: normal;
  top: 551px;
  width: 551px;
`;
const Topic = styled.input`
background-color: #ffffff;
border: 1px solid;
border-color: #0000004c;
border-radius: 10px;
box-shadow: 0px 4px 4px #00000040;
height: 40px;
position: absolute;
left: 282px;
top: 208px;
width: 309px;
`;

const ClassesTook = styled.input`
background-color: #ffffff;
border: 1px solid;
border-color: #0000004c;
border-radius: 10px;
box-shadow: 0px 4px 4px #00000040;
height: 40px;
position: absolute;
left: 279px;
top: 304px;
width: 309px;
`;

const DescriptionInput = styled.input`
background-color: #ffffff;
border: 1px solid;
border-color: #0000004c;
border-radius: 10px;
box-shadow: 0px 4px 4px #00000040;
height: 40px;
position: absolute;
left: 279px;
top: 401px;
width: 309px;
`;

const LanguageInput = styled.input`
background-color: #ffffff;
border: 1px solid;
border-color: #0000004c;
border-radius: 10px;
box-shadow: 0px 4px 4px #00000040;
height: 40px;
position: absolute;
left: 279px;
top: 708px;
width: 309px;
`;

const AvailableTimes = styled.input`
background-color: #ffffff;
border: 1px solid;
border-color: #0000004c;
border-radius: 10px;
box-shadow: 0px 4px 4px #00000040;
height: 40px;
position: absolute;
left: 279px;
top: 805px;
width: 309px;
`;     

const InPersonOrVirtual = styled.input`
  background-color: #ffffff;
  border: 1px solid;
  border-color: #0000004c;
  border-radius: 10px;
  box-shadow: 0px 4px 4px #00000040;
  height: 40px;
  position: absolute;
  left: 279px;
  top: 902px;
  width: 309px;
`;

const Overlap2 = styled.div`
  border-radius: 10px;
  height: 61px;
  position: absolute;
  left: 214px;
  top: 1007px;
  width: 432px;
`;

const SignIn = styled.div`
  background-color: #f6a833;
  border: 1px solid transparent;
  border-radius: 10px;
  height: 61px;
  position: absolute;
  left: 214px;
  top: 1000px;
  width: 432px;
`;

const SubmitButton = styled.button`
  background-color: #f6a833;
  border: 1px solid;
  border-color: #0000004c;
  border-radius: 10px;
  box-shadow: 0px 4px 4px #00000040;
  height: 58px;
  width: 450px;

  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  left: -10px;
  top: 0px; // Adjust this value so it is below the "Forgot Password?" link

  cursor: pointer;
`;

const Resume = styled.input`
  background-color: #ffffff;
  border: 3px solid #d3d2d2d9;
  border-radius: 10px;
  height: 48px;
  position: absolute;
  left: 280px;
  top: 109px;
  width: 309px;
`;

const TextWrapper9 = styled.div`
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  position: absolute;
  left: 56px;
  letter-spacing: 0;
  line-height: normal;
  top: 9px;
  white-space: nowrap;
`;

const UploadPhoto = styled.input`
  background-color: #ffffff;
  border: 3px solid #d3d2d2d9;
  border-radius: 10px;
  height: 48px;
  position: absolute;
  left: 280px;
  top: 499px;
  width: 309px;
`;

const UploadVideo = styled.input`
  background-color: #ffffff;
  border: 3px solid #d3d2d2d9;
  border-radius: 10px;
  height: 48px;
  position: absolute;
  left: 280px;
  top: 604px;
  width: 309px;
`;

function TutorApply() {
    const [resume, setResume] = useState('');
    const [topic, setTopic] = useState('');
    const [classesTook, setClassesTook] = useState('');
    const [description, setDescription] = useState('');
    const [uploadPicture, setUploadPicture] = useState('');
    const [uploadVideo, setUploadVideo] = useState('');
    const [language, setLanguage] = useState('');
    const [availableTimes, setAvailableTimes] = useState('');
    const [inPersonOrVirtual, setInPersonOrVirtual] = useState('');
    const [termsAndConditions, setTermsAndConditions] = useState('');
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      // Perform validation here if needed
  
      // Prepare data to be sent to backend
      const userData = {resume, topic, classesTook, description, uploadPicture, uploadVideo, language, availableTimes, inPersonOrVirtual, termsAndConditions};
  
      // Send data to backend
      // This is a placeholder, replace with actual backend call
      console.log('Sending data to backend:', userData);
    };
  
// Your component
  return (
    <ApplyForATutor>
        <OverlapGroup>
          <ApplyToBeATutor>&nbsp;&nbsp;&nbsp;&nbsp;Apply to be a tutor</ApplyToBeATutor>
          <IAgreeToWebsite>
            <TextWrapper>I agree to Website Name </TextWrapper>
            <Span>terms of use </Span>
            <TextWrapper>and </TextWrapper>
            <Span>privacy policy</Span>
            <TextWrapper>.</TextWrapper>
          </IAgreeToWebsite>
          
          <TextWrapper2>*Resume</TextWrapper2>
          <TextWrapper3>*Topic</TextWrapper3>
          <Paragraph>*Classes you took at SFSU</Paragraph>
          <TextWrapper4>*Tell us about yourself</TextWrapper4>
          <TextWrapper5>Language</TextWrapper5>
          <TextWrapper6>Available times</TextWrapper6>
          <TextWrapper7>In Person or Virtual</TextWrapper7>
          <ClickOnTheChoose>Click on the "Choose File" button to upload your picture:</ClickOnTheChoose>
          <ClickOnTheChoose2>Click on the "Choose File" button to upload your video:</ClickOnTheChoose2>
          <Resume type="file"
                    accept = "application/pdf"
                        value={resume}
                        onChange={e => setResume(e.target.value)}/>
          <Topic type="text"
                        value={topic}
                        onChange={e => setTopic(e.target.value)}/>
          
          <ClassesTook  type="text"
                        value={classesTook}
                        onChange={e => setClassesTook(e.target.value)}/>
          <DescriptionInput  type="text"
                        value={description}
                        onChange={e => setDescription(e.target.value)}/>
          <UploadPhoto  type="file"
                        accept="image/jpeg, image/png, image/gif"
                        value={uploadPicture}
                        onChange={e => setUploadPicture(e.target.value)}/>
          <UploadVideo  type="file"
                        accept="video/mp4, video/x-m4v, video/*"
                        value={uploadVideo}
                        onChange={e => setUploadVideo(e.target.value)}/>
          <LanguageInput  type="text"
                        value={language}
                        onChange={e => setLanguage(e.target.value)}/>
          <AvailableTimes  type="text"
                        value={availableTimes}
                        onChange={e => setAvailableTimes(e.target.value)}/>
          <InPersonOrVirtual  type="text"
                        value={inPersonOrVirtual}
                        onChange={e => setInPersonOrVirtual(e.target.value)}/>
          <CheckBox type="checkbox"
                        value={termsAndConditions}
                        onChange={e => setTermsAndConditions(e.target.value)}/>
          <Overlap2 />
          <SignIn />
          <SubmitButton type="submit">Submit</SubmitButton>
          
          
        </OverlapGroup>
        <NavBar/>
    </ApplyForATutor>
  );
};
export default TutorApply;
