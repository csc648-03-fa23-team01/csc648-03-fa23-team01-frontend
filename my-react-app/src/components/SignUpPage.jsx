import React, { useState }  from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NavBar from '../components/NavBar';
import { Auth } from 'aws-amplify'
import { useNavigate } from "react-router-dom";

const SignUpPageContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

const SignUpPageWrapper = styled.div`
  background-color: #ffffff;
  height: 52rem;
  position: relative;
  width: 100%;
`;

const Navbar = styled.div`
  background-color: #ffffff;
  border: 1px solid;
  border-color: #000000;
  height: 99px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1280px;
`;

const TextWrapper = styled.div`
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  left: ${props => props.left}px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: ${props => props.top}px;
  white-space: nowrap;
`;

const Rectangle = styled.div`
  background-color: #ffffff;
  border: 1px solid;
  border-color: #000000;
  height: 99px;
  left: -1px;
  position: absolute;
  top: -1px;
  width: 1280px;
`;

const OverlapGroup = styled.div`
  background-color: #ffffff;
  border: 1px solid;
  border-color: #0000004c;
  border-radius: 10px;
  box-shadow: 0px 4px 4px #00000040;
  height: 685px;
  left: 210px;
  position: absolute;
  top: 109px;
  width: 860px;
`;
    
    
const CreateAFree = styled.p`
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 30px;
  font-weight: 400;
  left: 38px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: -10px;
  width: 782px;
`;

const AlreadyHaveAn = styled.p`
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 30px;
  font-weight: 400;
  left: 170px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 66px;
  width: 480px;
`;

const Span = styled.span`
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 30px;
  font-weight: 400;
  letter-spacing: 0;
  position: absolute;
  top: -27px;
`;

const IAgreeToWebsite = styled.p`
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  left: 177px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 554px;
  width: 563px;
`;

const TextWrapper12 = styled.span`
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0;
`;

const TextWrapper13 = styled.span`
  text-decoration: underline;
`;

const Rectangle2 = styled.input`
  background-color: #ffffff;
  border: 1px solid;
  border-color: #000000;
  height: 20px;
  left: 132px;
  position: absolute;
  top: 575px;
  width: 20px;
`;

const TextWrapper14 = styled.div`
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  left: 281px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 211px;
  width: 335px;
`;

const TextWrapper15 = styled.div`
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  left: 281px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 119px;
  width: 148px;
`;

const TextWrapper16 = styled.div`
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  left: 281px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 295px;
  width: 285px;
`;

const TextWrapper17 = styled.div`
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  left: 281px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 380px;
  width: 265px;
`;

const TextWrapper18 = styled.div`
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  left: 281px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 464px;
  width: 285px;
`;

const Rectangle3 = styled.input`
  background-color: #ffffff;
  border: 1px solid;
  border-color: #000000;
  border-radius: 10px;
  height: 41px;
  left: 281px;
  position: absolute;
  top: 246px;
  width: 309px;
`;

const Rectangle4 = styled.input`
  background-color: #ffffff;
  border: 1px solid;
  border-color: #000000;
  border-radius: 10px;
  height: 40px;
  left: 281px;
  position: absolute;
  top: 153px;
  width: 309px;
`;

const Rectangle5 = styled.input`
  background-color: #ffffff;
  border: 1px solid;
  border-color: #000000;
  border-radius: 10px;
  height: 40px;
  left: 281px;
  position: absolute;
  top: 331px;
  width: 309px;
`;

const Rectangle6 = styled.input`
  background-color: #ffffff;
  border: 1px solid;
  border-color: #000000;
  border-radius: 10px;
  height: 41px;
  left: 281px;
  position: absolute;
  top: 415px;
  width: 309px;
`;

const Rectangle7 = styled.input`
  background-color: #ffffff;
  border: 1px solid;
  border-color: #000000;
  border-radius: 10px;
  height: 40px;
  left: 281px;
  position: absolute;
  top: 500px;
  width: 309px;
`;

const Overlap = styled.div`
  border-radius: 10px;
  height: 61px;
  left: 220px;
  position: absolute;
  top: 613px;
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
const StyledInput1 = styled.input`
background-color: #ffffff;
border: 1px solid;
border-color: #0000004c;
border-radius: 10px;
box-shadow: 0px 4px 4px #00000040;
height: 61px;
left: 76px;
position: absolute;
top: 212px;
width: 539px;
`;
const StyledInput2 = styled.input`
background-color: #ffffff;
border: 1px solid;
border-color: #0000004c;
border-radius: 10px;
box-shadow: 0px 4px 4px #00000040;
height: 61px;
left: 76px;
position: absolute;
top: 212px;
width: 539px;
`;
const StyledInput3 = styled.input`
background-color: #ffffff;
border: 1px solid;
border-color: #0000004c;
border-radius: 10px;
box-shadow: 0px 4px 4px #00000040;
height: 61px;
left: 76px;
position: absolute;
top: 212px;
width: 539px;
`;

function SignUpPage() {
  const navigate = useNavigate();
  const [sfsuId, setSfsuId] = useState('');
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [termsAndConditions, setTermsAndConditions] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    //validations for sign up
    if (!termsAndConditions) {
      alert("Please agree to the terms and conditions.");
      return;
    }
    if (password.length < 8) {
      alert("Password is too short");
      return;
    }
    if (!validateEmail(Email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const userData = { sfsuId, Email, password, firstName, lastName, termsAndConditions };
    console.log('Sending data to backend:', userData);

    try {
      const signUpResponse = await Auth.signUp({
        username: Email,
        password,
        attributes: {
          // Add other necessary attributes
        }
      });
      console.log('Sign up successful', signUpResponse);
      navigate("/");
    } catch (error) {
      // IF there are errors our validations missed we display them
      console.error('Error during sign up:', error);
      const errorMessage = error.toString();
      const specificErrorMessage = errorMessage.split(': ')[1] || "An error occurred";
      alert(specificErrorMessage);
    }
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  return (
    <SignUpPageContainer>
      <SignUpPageWrapper>
        <NavBar/>
        <OverlapGroup>
        <form onSubmit={handleSubmit}>
          <CreateAFree>Create a free account to access our website's features</CreateAFree>
          <AlreadyHaveAn>
            <Span>Already have an account? <a href="/login">Log in</a></Span>
          </AlreadyHaveAn>
          <IAgreeToWebsite>
            <TextWrapper12>I agree to Website Name </TextWrapper12>
            <TextWrapper13><a href="/">terms of use</a></TextWrapper13>
            <TextWrapper12> and </TextWrapper12>
            <TextWrapper13><a href="/">privacy policy</a></TextWrapper13>
            <TextWrapper12>.</TextWrapper12>
          </IAgreeToWebsite>
          
          <TextWrapper14>Email address</TextWrapper14>
          
          <TextWrapper15>SFSU ID</TextWrapper15>
          <TextWrapper16>Create password</TextWrapper16>
          <TextWrapper17>First name</TextWrapper17>
          <TextWrapper18>Last name</TextWrapper18>
          <Rectangle4  type="text"
                        value={sfsuId}
                        onChange={e => setSfsuId(e.target.value)}/>
          <Rectangle3  type="text"
                        value={Email}
                        onChange={e => setEmail(e.target.value)}/>
          <Rectangle5  type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}/>
          <Rectangle6 
           type="text"
           value={firstName}
           onChange={e => setFirstName(e.target.value)}/>
          <Rectangle7 type="text"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)} />
          <Rectangle2 
          type="checkbox" 
          value={termsAndConditions}
          onChange={e => setTermsAndConditions(e.target.checked)} />
          <Overlap>
          <SubmitButton type="submit">
            Sign Up
          </SubmitButton>
          </Overlap>
          </form>
        </OverlapGroup>
      </SignUpPageWrapper>
    </SignUpPageContainer>
  );
};
export default SignUpPage;