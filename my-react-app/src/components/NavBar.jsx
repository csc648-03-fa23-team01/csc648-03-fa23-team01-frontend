import React from "react";
import styled from "styled-components";
const StyledNavBar = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;

  & .div {
    background-color: #ffffff;
    height: 832px;
    position: relative;
    width: 1280px;
  }

  & .navbar {
    background-color: #ffffff;
    border: 1px solid;
    border-color: #000000;
    height: 99px;
    left: 0;
    position: absolute;
    top: 0;
    width: 1280px;
  }
  & .text-wrapper {
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
  }

  & .text-wrapper-2 {
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
  }

  & .text-wrapper-3 {
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
  }

  & .text-wrapper-4 {
    color: #000000;
    font-family: "Inter-Regular", Helvetica;
    font-size: 50px;
    font-weight: 400;
    left: 30px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 17px;
  }

  & .text-wrapper-5 {
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
  }
`;
export const NavBar = () => {
    return (
      <StyledNavBar>
        <div className="div">
          <div className="navbar">
            <div className="text-wrapper">Become a Tutor</div>
            <div className="text-wrapper-2">Sign up</div>
            <div className="text-wrapper-3">About</div>
            <div className="text-wrapper-4">Logo</div>
            <div className="text-wrapper-5">Login</div>
          </div>
        </div>
      </StyledNavBar>
    );
  };
  export default NavBar;