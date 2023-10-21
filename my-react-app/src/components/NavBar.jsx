import React from "react";
import styled from "styled-components";

const StyledNavBar = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;

  .div {
    background-color: #ffffff;
    height: 832px;
    position: relative;
    width: 1280px;
  }

  .navbar {
    background-color: #ffffff;
    border: 1px solid #000000;
    height: 99px;
    left: 0;
    position: relative;
    top: 0;
    width: 1280px;
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
    font-size: 20px;
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
    font-size: 50px;
  }
`;

export const NavBar = () => {
  return (
    <StyledNavBar>
        <div className="navbar">
          <button className="logo">Logo</button>
          <button>About</button>
          <button>Become a Tutor</button>
          <button>Login</button>
          <button>Sign up</button>
        </div>
    </StyledNavBar>
  );
};

export default NavBar;
