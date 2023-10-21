import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import image1 from '../assets/images/Polygon1.svg';
import image2 from '../assets/images/Rectangle46.svg';
import { connect } from 'react-redux';
import { searchAsync } from '../actions/tutorAction';

const StyledHomePage = styled.div`
background-color: #ffffff;
display: flex;
justify-content: center;
align-items: center; /* Center children vertically */
height: 100vh; /* Take up the full viewport height */

& .div {
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center children horizontally */
  height: 832px;
  width: 1280px;
}

  & .navbar {
    background-color: #ffffff;
    border: 1px solid;
    border-color: #000000;
    height: 99px;
    left: 0;
    position: relative;
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
    position: relative;
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
    position: relative;
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
    position: relative;
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
    position: relative;
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
    position: relative;
    top: 38px;
    white-space: nowrap;
  }

  & .overlap-group {
    height: 82px;
    left: 247px;
    position: relative;
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
    position: relative;
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
    position: relative;
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
    position: relative;
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
    position: relative;
    top: 26px;
    white-space: nowrap;
  }

  & .img {
    height: 23px;
    left: 41px;
    position: relative;
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
    position: relative;
    top: 26px;
    white-space: nowrap;
  }

  & .polygon {
    height: 83px;
    left: -71px;
    position: relative;
    top: 1px;
    width: 221px;
  }

  & .overlap {
    height: 168px;
    left: 56px;
    position: relative;
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
    position: relative;
    top: 0;
    width: 353px;
  }

  & .line {
    height: 165px;
    left: 5px;
    object-fit: cover;
    position: relative;
    top: 3px;
    width: 344px;
  }

  & .line-2 {
    height: 159px;
    left: 3px;
    object-fit: cover;
    position: relative;
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
    top: 128px;
    white-space: nowrap;
  }

  & .overlap-2 {
    height: 169px;
    left: 476px;
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
    top: 2px;
    width: 353px;
  }

  & .line-3 {
    height: 164px;
    left: 0;
    object-fit: cover;
    top: 0;
    width: 352px;
  }

  & .line-4 {
    height: 156px;
    left: 5px;
    object-fit: cover;
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
    top: 622px;
    width: 353px;
  }

  & .line-5 {
    height: 160px;
    left: -1px;
    object-fit: cover;
    top: 1px;
    width: 348px;
  }

  & .line-6 {
    height: 162px;
    left: 0;
    object-fit: cover;
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
    top: 131px;
    white-space: nowrap;
  }
  
  & .rectangle-5 {
    background-color: #ffffff;
    border: 1px solid;
    border-color: #000000;
    border-radius: 10px;
      }

  & .text-wrapper-12 {
    color: #000000;
    font-family: "Inter-Regular", Helvetica;
    font-size: 32px;
    font-weight: 400;
    text-align: center; /* Center the text */
    width: 850px;
    margin-top: 20px; /* Add some spacing between the rectangle and the text */
  }
`;

export const HomePage = ({ tutors_data, tutors_loading, tutors_error }) => {
  const [query, setQuery] = useState('');
  const results = useSelector(state => state.results);
  const dispatch = useDispatch();
  
  const handleSearch = (query) => {
    dispatch(searchAsync(query));
  };


  
    return (
      <StyledHomePage>
        <div className="div">
          <NavBar />
          <SearchBar isHomePage={true} />
  
          <p className="text-wrapper-8">What Would You Like To Learn?</p>
            
          <div className="rectangle-5" />
          <p className="text-wrapper-12">
            Welcome to our platform, where knowledge and opportunity converge. Explore a world of learning, connect with
            top tutors, discover engaging courses, and search any department or subject effortlessly to unlock your full
            potential.
          </p>
        </div>
      </StyledHomePage>
  );
};

const mapStateToProps = (state) => ({
  tutors_data: state.tutors.data,
  tutors_loading: state.tutors.loading,
  tutors_error: state.tutors.error,
});

const mapDispatchToProps = {
  searchAsync
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
