import React from "react";
import styled from 'styled-components';
import image1 from '../assets/images/Polygon1.svg';
import image2 from '../assets/images/Rectangle46.svg';

const StyledHomePage = styled.div`
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

  & .overlap-group {
    height: 82px;
    left: 247px;
    position: absolute;
    top: 176px;
    width: 704px;
  }

  & .rectangle {
    background-color: #ffffff;
    border: 1px solid;
    border-color: #000000;
    border-radius: 10px;
    height: 81px;
    left: 0;
    position: absolute;
    top: 1px;
    width: 704px;
  }

  & .p {
    color: #000000b8;
    font-family: "Inter-Regular", Helvetica;
    font-size: 25px;
    font-weight: 400;
    left: 91px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 5px;
    white-space: nowrap;
  }

  & .rectangle-2 {
    background-color: #ffffff;
    border: 1px solid;
    border-color: #000000;
    border-radius: 10px;
    height: 82px;
    left: 557px;
    position: absolute;
    top: 0;
    width: 147px;
  }

  & .text-wrapper-6 {
    color: #000000;
    font-family: "Inter-Regular", Helvetica;
    font-size: 25px;
    font-weight: 400;
    left: 589px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 26px;
    white-space: nowrap;
  }

  & .img {
    height: 23px;
    left: 41px;
    position: absolute;
    top: 30px;
    width: 33px;
  }

  & .text-wrapper-7 {
    color: #000000;
    font-family: "Inter-Regular", Helvetica;
    font-size: 25px;
    font-weight: 400;
    left: 9px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 26px;
    white-space: nowrap;
  }

  & .polygon {
    height: 83px;
    left: -71px;
    position: absolute;
    top: 1px;
    width: 221px;
  }

  & .text-wrapper-8 {
    color: #000000;
    font-family: "Inter-Regular", Helvetica;
    font-size: 25px;
    font-weight: 400;
    left: 338px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 123px;
    white-space: nowrap;
  }

  & .overlap {
    height: 168px;
    left: 56px;
    position: absolute;
    top: 622px;
    width: 353px;
  }

  & .rectangle-3 {
    background-color: #ffffff;
    border: 1px solid;
    border-color: #000000;
    border-radius: 10px;
    box-shadow: 0px 4px 4px #00000040;
    height: 167px;
    left: 0;
    position: absolute;
    top: 0;
    width: 353px;
  }

  & .line {
    height: 165px;
    left: 5px;
    object-fit: cover;
    position: absolute;
    top: 3px;
    width: 344px;
  }

  & .line-2 {
    height: 159px;
    left: 3px;
    object-fit: cover;
    position: absolute;
    top: 2px;
    width: 346px;
  }

  & .text-wrapper-9 {
    color: #000000;
    font-family: "Inter-Regular", Helvetica;
    font-size: 15px;
    font-weight: 400;
    left: 142px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 128px;
    white-space: nowrap;
  }

  & .overlap-2 {
    height: 169px;
    left: 476px;
    position: absolute;
    top: 620px;
    width: 353px;
  }

  & .rectangle-4 {
    background-color: #ffffff;
    border: 1px solid;
    border-color: #000000;
    border-radius: 10px;
    box-shadow: 0px 4px 4px #00000040;
    height: 167px;
    left: 0;
    position: absolute;
    top: 2px;
    width: 353px;
  }

  & .line-3 {
    height: 164px;
    left: 0;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 352px;
  }

  & .line-4 {
    height: 156px;
    left: 5px;
    object-fit: cover;
    position: absolute;
    top: 7px;
    width: 347px;
  }

  & .text-wrapper-10 {
    color: #000000;
    font-family: "Inter-Regular", Helvetica;
    font-size: 15px;
    font-weight: 400;
    left: 140px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 138px;
    white-space: nowrap;
  }

  & .overlap-3 {
    background-color: #ffffff;
    border: 1px solid;
    border-color: #000000;
    border-radius: 10px;
    box-shadow: 0px 4px 4px #00000040;
    height: 167px;
    left: 896px;
    position: absolute;
    top: 622px;
    width: 353px;
  }

  & .line-5 {
    height: 160px;
    left: -1px;
    object-fit: cover;
    position: absolute;
    top: 1px;
    width: 348px;
  }

  & .line-6 {
    height: 162px;
    left: 0;
    object-fit: cover;
    position: absolute;
    top: 4px;
    width: 347px;
  }

  & .text-wrapper-11 {
    color: #000000;
    font-family: "Inter-Regular", Helvetica;
    font-size: 15px;
    font-weight: 400;
    left: 162px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 131px;
    white-space: nowrap;
  }
  .rectangle-5 {
    background-color: #ffffff;
    border: 1px solid;
    border-color: #000000;
    border-radius: 10px;
    height: 209px;
    left: 200px;
    position: absolute;
    top: 300px;
    width: 845px;
    }
    .home-page .text-wrapper-12 {
      color: #000000;
      font-family: "Inter-Regular", Helvetica;
      font-size: 32px;
      font-weight: 400;
      left: 21px;
      letter-spacing: 0;
      line-height: normal;
      position: absolute;
      top: 0;
      width: 850px;
      }
`;

export const HomePage = () => {
  return (
    <StyledHomePage>
      <div className="div">
        <div className="navbar">
          <div className="text-wrapper">Become a Tutor</div>
          <div className="text-wrapper-2">Sign up</div>
          <div className="text-wrapper-3">About</div>
          <div className="text-wrapper-4">Logo</div>
          <div className="text-wrapper-5">Login</div>
        </div>
        <div className="overlap-group">
          <div className="rectangle" />
          <p className="p">Search The Subject You Like</p>
          <div className="rectangle-2" />
          <div className="text-wrapper-6">Search</div>
          <img className="polygon" alt="Polygon" src={image2} />
          <div className="text-wrapper-7">All</div>
          <img className="img" alt="Rectangle" src={image1} />
        </div>
        <p className="text-wrapper-8">What Would You Like To Learn?</p>
        <div className="overlap">
          <div className="rectangle-3" />
          {/* <img className="line" alt="Line" src="line-1.svg" /> */}
          {/* <img className="line-2" alt="Line" src="line-2.svg" /> */}
          <div className="text-wrapper-9">recently applied</div>
        </div>
        <div className="overlap-2">
          <div className="rectangle-4" />
          {/* <img className="line-3" alt="Line" src="line-3.svg" /> */}
          {/* <img className="line-4" alt="Line" src="line-4.svg" /> */}
          <div className="text-wrapper-10">recently applied</div>
        </div>
        <div className="overlap-3">
          {/* <img className="line-5" alt="Line" src="line-5.svg" /> */}
          {/* <img className="line-6" alt="Line" src="line-6.svg" /> */}
          <div className="text-wrapper-11">recently applied</div>
        </div>
        <div className="overlap-4">
        <div className="rectangle-5" />
          <p className="text-wrapper-12">
          Welcome to our platform, where knowledge and opportunity converge. Explore a world of learning, connect with
          top tutors, discover engaging courses, and search any department or subject effortlessly to unlock your full
          potential.
          </p>
        </div>
      </div>
    </StyledHomePage>
  );
};
export default HomePage;
