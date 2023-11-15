import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import image1 from '../assets/images/Logo_Image.png';
import { connect } from 'react-redux';
import {signOut} from '../actions/userAction';

const StyledNavBar = styled.div`
  background-color: #c4bb8b;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;

  .div {
    background-color: #C4BB8C;
    height: 99px; /* Adjust the height as needed */
    position: relative;
    width: 100%; /* Make it 100% */
  }

  .navbar {
    background-color: #C4BB8C;
    border: 1px solid #000000;
    height: 6.2rem;
    left: 0;
    position: relative;
    top: 0;
    width: 100%; /* Make it 100% to span the full screen width */
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
  }

  button {
    background-color: transparent;
    border: none;
    color: #000000;
    font-family: "Inter-Regular", Helvetica;
    font-size: .5rem;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: #555555;
    }

    &:focus {
      outline: none;
    }
  }

  .logo {
    font-size: 1.25rem;
  }
`;

export const NavBar = ({users_data, signOut}) => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    // Perform the sign-out action
    signOut();
    // Check if you're already on the home page
    if (window.location.pathname === "/") {
      // If on the home page, force a page reload
      window.location.reload();
    } else {
      // Otherwise, navigate to the home page, then force reload
      navigate("/");
      window.location.reload();
    }
  };
  console.log("Nav Bar users Data: ", users_data);
  return (
    <StyledNavBar>
        <div className="navbar">
          <button onClick={() => navigate("/")} className="logo"><img className="img" alt="Rectangle" src={image1} /></button>
          <button onClick={() => navigate("/teampage")}  className="logo" >About </button>
          {users_data && <button onClick={() => navigate("/BecomeTutor")}  className="logo" >Become a Tutor</button>}
          {!users_data && <button onClick={() => navigate("/login")}  className="logo" >Login</button>}
          {!users_data && <button onClick={() => navigate("/signup")}  className="logo">Sign up</button>}
          { users_data &&  <button onClick={()=>navigate("/dashboard")}>Your Dashboard</button> }
          {users_data && (
          <button onClick={handleSignOut} className="logo">
            Sign out
          </button>
        )}

        </div>
    </StyledNavBar>
  );
};
const mapStateToProps = state => ({
  users_data: state.users.userData,
});
const mapDispatchToProps = {
  signOut
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);