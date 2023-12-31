import React, { useState, useEffect }  from "react";
import styled from "styled-components";
import {NavBar} from '../components/NavBar';
import { Auth, Hub } from 'aws-amplify'
import { useNavigate } from "react-router-dom";
import {login} from '../actions/userAction'; 
import { connect } from 'react-redux';



const LoginPageWrapper = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

const DivWrapper = styled.div`
  background-color: #ffffff;
  height: 52rem;
  position: relative;
  width: 100%;
`;

const OverlapGroupWrapper = styled.div`
  height: 644px;
  left: 294px;
  position: absolute;
  top: 137px;
  width: 700px;
`;

const RectangleWrapper = styled.div`
  background: linear-gradient(180deg, rgba(248.63, 248.63, 248.63, 0) 0%, rgba(211, 210, 210, 0) 100%);
  border: 1px solid;
  border-color: #0000004c;
  border-radius: 10px;
  box-shadow: 0px 4px 4px #00000040;
  height: 643px;
  left: 0;
  position: absolute;
  top: 1px;
  width: 700px;
`;

const TextWrapper1 = styled.div`
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  left: 86px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 178px;
  width: 324px;
`;

const TextWrapper2 = styled.div`
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  left: 86px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 301px;
  width: 169px;
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
top: 340px;
width: 539px;
`;

const Rectangle3Wrapper = styled.div`
  background-color: #ffffff;
  border: 1px solid;
  border-color: #0000004c;
  border-radius: 10px;
  box-shadow: 0px 4px 4px #00000040;
  height: 61px;
  left: 76px;
  position: absolute;
  top: 340px;
  width: 539px;
`;

const TextWrapper3 = styled.div`
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 48px;
  font-weight: 400;
  left: 223px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 0;
  white-space: nowrap;
  width: 246px;
`;

const DonTHaveAnWrapper = styled.p`
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 30px;
  font-weight: 400;
  left: 84px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 91px;
  white-space: nowrap;
`;

const SpanWrapper = styled.span`
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 30px;
  font-weight: 400;
  letter-spacing: 0;
`;

const TextWrapper4 = styled.span`
  text-decoration: underline;
`;

const TextWrapper5 = styled.div`
  color: #0256f8;
  font-family: "Inter-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  left: 84px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 424px; // Adjust this value as needed
  width: 310px;
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
  left: 116px;
  top: 499px; // Adjust this value so it is below the "Forgot Password?" link

  cursor: pointer;
`;

const TextWrapper7 = styled.div`
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  left: 843px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 38px;
  white-space: nowrap;
`;

const TextWrapper8 = styled.div`
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  left: 1147px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 38px;
  white-space: nowrap;
`;

const TextWrapper9 = styled.div`
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  left: 744px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 38px;
  white-space: nowrap;
`;

const EllipseWrapper = styled.img`
  height: 74px;
  left: 25px;
  object-fit: cover;
  position: absolute;
  top: 12px;
  width: 74px;
`;

const TextWrapper10 = styled.div`
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  left: 1034px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 38px;
  white-space: nowrap;
`;
const LoginPage = ({users_data, users_loading, users_error, login}) => {
  const navigate = useNavigate();
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    console.log("Users DAta: ", users_data);
    if(users_data){
      navigate("/");
    }
    else if(users_error){
      // Handle sign-up failure locally
      console.error('Login failed:', users_error);
      alert('Login failed: ' + users_error.message);
    }
  }, [users_data, users_loading, users_error]);


  const handleSubmit = async (event) => {
    event.preventDefault();

  login(Email, password);
  };



  return (
    <LoginPageWrapper>
      
      <DivWrapper>
      <NavBar/>
        <OverlapGroupWrapper>
        <form onSubmit={handleSubmit}>
          <RectangleWrapper />
        
          <TextWrapper1>Email</TextWrapper1>
          
          <TextWrapper2>Password</TextWrapper2>
          <StyledInput1
                        type="text"
                        value={Email}
                        onChange={e => setEmail(e.target.value)}
                    />
          <StyledInput2
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
          <TextWrapper3>Log In</TextWrapper3>
          <DonTHaveAnWrapper>
            <SpanWrapper>Don’t have an account? </SpanWrapper>
            <TextWrapper4><a href="/signup">Sign up</a></TextWrapper4>
            <SpanWrapper> for free.</SpanWrapper>
          </DonTHaveAnWrapper>
          <TextWrapper5><a href="/">Forgot Password?</a></TextWrapper5>
          <SubmitButton type="submit">
            Log In
          </SubmitButton>
          </form>
        </OverlapGroupWrapper>
        
      </DivWrapper>
    </LoginPageWrapper>
  );
}
  const mapStateToProps = state => ({
    users_data: state.users.userData,
    users_loading: state.users.isLoading,
    users_error: state.users.error,
  });
  
  const mapDispatchToProps = {
    login,
    
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);