import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import image1 from '../assets/images/Logo_Image.png';

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

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <StyledNavBar>
        <div className="navbar">
          <button onClick={() => navigate("/")}  className="logo">Logo</button>
          <button onClick={() => navigate("/teampage")}  className="logo" >About </button>
          <button onClick={() => navigate("/BecomeTutor")}  className="logo" >Become a Tutor</button>
          <button onClick={() => navigate("/login")}  className="logo" >Login</button>
          <button onClick={() => navigate("/signup")}  className="logo">Sign up</button>
        </div>
    </StyledNavBar>
  );
};

export default NavBar;
