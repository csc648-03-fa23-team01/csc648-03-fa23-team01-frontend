import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import  Navbar  from "./NavBar.jsx";
import styled from "styled-components";
import image1 from '../assets/images/Polygon1.svg';
import image2 from '../assets/images/Rectangle46.svg';
import { connect } from 'react-redux';
import { searchAsync } from '../actions/tutorAction';

const StyledresultBar = styled.div`
.result-page {
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

.result-page .div {
  background-color: #ffffff;
  height: 832px;
  overflow: hidden;
  position: relative;
  width: 1280px;
}

.result-page .navbar {
  background-color: #ffffff;
  border: 1px solid;
  border-color: #000000;
  height: 99px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1280px;
}

.result-page .text-wrapper {
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

.result-page .text-wrapper-2 {
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

.result-page .text-wrapper-3 {
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

.result-page .text-wrapper-4 {
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 50px;
  font-weight: 400;
  left: 115px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 19px;
}

.result-page .text-wrapper-5 {
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

.result-page .overlap {
  height: 109px;
  left: 1508px;
  position: absolute;
  top: 176px;
  width: 179px;
}

.result-page .rectangle {
  background-color: #ffffff;
  border: 1px solid;
  border-color: #000000;
  border-radius: 10px;
  height: 82px;
  left: 0;
  position: absolute;
  top: 0;
  width: 147px;
}

.result-page .text-wrapper-6 {
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 25px;
  font-weight: 400;
  left: 32px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 26px;
  white-space: nowrap;
}

.result-page .rectangle-2 {
  background-color: #ffffff;
  border: 1px solid;
  border-color: #000000;
  border-radius: 10px;
  height: 82px;
  left: 32px;
  position: absolute;
  top: 27px;
  width: 147px;
}

.result-page .text-wrapper-7 {
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 25px;
  font-weight: 400;
  left: 64px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 53px;
  white-space: nowrap;
}

.result-page .rectangle-3 {
  background-color: #d9d9d9;
  height: 119px;
  left: 309px;
  position: absolute;
  top: 416px;
  width: 171px;
}

.result-page .rectangle-4 {
  background-color: #d9d9d9;
  height: 21px;
  left: 309px;
  position: absolute;
  top: 581px;
  width: 166px;
}

.result-page .rectangle-5 {
  background-color: #d9d9d9;
  height: 18px;
  left: 309px;
  position: absolute;
  top: 625px;
  width: 166px;
}

.result-page .rectangle-6 {
  background-color: #d9d9d9;
  height: 18px;
  left: 309px;
  position: absolute;
  top: 666px;
  width: 166px;
}

.result-page .rectangle-7 {
  background-color: #d9d9d9;
  height: 119px;
  left: 63px;
  position: absolute;
  top: 416px;
  width: 171px;
}

.result-page .overlap-group {
  background-color: #ffffff;
  border: 1px solid;
  border-color: #000000;
  border-radius: 10px;
  height: 36px;
  left: 63px;
  position: absolute;
  top: 566px;
  width: 166px;
}

.result-page .text-wrapper-8 {
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  left: 11px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 5px;
  white-space: nowrap;
}

.result-page .div-wrapper {
  background-color: #ffffff;
  border: 1px solid;
  border-color: #000000;
  border-radius: 10px;
  height: 36px;
  left: 65px;
  position: absolute;
  top: 616px;
  width: 166px;
}

.result-page .rectangle-8 {
  background-color: #d9d9d9;
  height: 119px;
  left: 560px;
  position: absolute;
  top: 416px;
  width: 171px;
}

.result-page .rectangle-9 {
  background-color: #d9d9d9;
  height: 21px;
  left: 560px;
  position: absolute;
  top: 581px;
  width: 166px;
}

.result-page .rectangle-10 {
  background-color: #d9d9d9;
  height: 18px;
  left: 560px;
  position: absolute;
  top: 625px;
  width: 166px;
}

.result-page .rectangle-11 {
  background-color: #d9d9d9;
  height: 18px;
  left: 560px;
  position: absolute;
  top: 666px;
  width: 166px;
}

.result-page .rectangle-12 {
  background-color: #d9d9d9;
  height: 119px;
  left: 801px;
  position: absolute;
  top: 416px;
  width: 171px;
}

.result-page .rectangle-13 {
  background-color: #d9d9d9;
  height: 21px;
  left: 801px;
  position: absolute;
  top: 581px;
  width: 166px;
}

.result-page .rectangle-14 {
  background-color: #d9d9d9;
  height: 18px;
  left: 801px;
  position: absolute;
  top: 625px;
  width: 166px;
}

.result-page .rectangle-15 {
  background-color: #d9d9d9;
  height: 18px;
  left: 801px;
  position: absolute;
  top: 666px;
  width: 166px;
}

.result-page .rectangle-16 {
  background-color: #d9d9d9;
  height: 119px;
  left: 1048px;
  position: absolute;
  top: 416px;
  width: 171px;
}

.result-page .rectangle-17 {
  background-color: #d9d9d9;
  height: 21px;
  left: 1048px;
  position: absolute;
  top: 581px;
  width: 166px;
}

.result-page .rectangle-18 {
  background-color: #d9d9d9;
  height: 18px;
  left: 1048px;
  position: absolute;
  top: 625px;
  width: 166px;
}

.result-page .rectangle-19 {
  background-color: #d9d9d9;
  height: 18px;
  left: 1048px;
  position: absolute;
  top: 666px;
  width: 166px;
}

.result-page .overlap-2 {
  height: 105px;
  left: 210px;
  position: absolute;
  top: 155px;
  width: 851px;
}

.result-page .rectangle-20 {
  background-color: #ffffff;
  border: 1px solid;
  border-color: #000000;
  border-radius: 10px;
  height: 81px;
  left: 0;
  position: absolute;
  top: 0;
  width: 777px;
}


.result-page .search-by-class-e-g {
  color: #000000b8;
  font-family: "Inter-Regular", Helvetica;
  font-size: 25px;
  font-weight: 400;
  left: 91px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 6px;
  width: 634px;
}

.result-page .rectangle-21 {
  background-color: #ffffff;
  border: 1px solid;
  border-color: #000000;
  border-radius: 10px;
  height: 84px;
  left: 704px;
  position: absolute;
  top: 0;
  width: 147px;
}

.result-page .text-wrapper-9 {
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 25px;
  font-weight: 400;
  left: 736px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 33px;
  width: 83px;
}

.result-page .img {
  height: 84px;
  left: 0;
  position: absolute;
  top: 0;
  width: 76px;
}

.result-page .text-wrapper-10 {
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 25px;
  font-weight: 400;
  left: 9px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 32px;
  width: 29px;
}

.result-page .polygon {
  height: 26px;
  left: 47px;
  position: absolute;
  top: 34px;
  width: 23px;
}

.result-page .p {
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 25px;
  font-weight: 400;
  left: 448px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 95px;
  width: 371px;
}

.result-page .overlap-3 {
  background-color: #ffffff;
  border: 1px solid;
  border-color: #000000;
  border-radius: 10px;
  height: 74px;
  left: 379px;
  position: absolute;
  top: 290px;
  width: 522px;
}

.result-page .text-wrapper-11 {
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  left: 180px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 23px;
  white-space: nowrap;
}

`;


export const ResultPage = ({ tutors_data, tutors_loading, tutors_error }) => {
  const [query, setQuery] = useState('');
  const results = useSelector(state => state.results);
  const dispatch = useDispatch();
  const handleSearch = () => {
    dispatch(searchAsync(query));
  };
  handleSearch();
  return (
    <StyledresultBar>
    <div className="result-page">
      <div className="div">
        <Navbar />
        <div className="overlap">
          <div className="rectangle" />
          <div className="text-wrapper-6">Search</div>
          <div className="rectangle-2" />
          <div className="text-wrapper-7">Search</div>
        </div>
        <div className="rectangle-3" />
        <div className="rectangle-4" />
        <div className="rectangle-5" />
        <div className="rectangle-6" />
        <div className="rectangle-7" />
        <div className="overlap-group">
          <div className="text-wrapper-8">Topic</div>
        </div>
        <div className="div-wrapper">
          <div className="text-wrapper-8">Name</div>
        </div>
        <div className="rectangle-8" />
        <div className="rectangle-9" />
        <div className="rectangle-10" />
        <div className="rectangle-11" />
        <div className="rectangle-12" />
        <div className="rectangle-13" />
        <div className="rectangle-14" />
        <div className="rectangle-15" />
        <div className="rectangle-16" />
        <div className="rectangle-17" />
        <div className="rectangle-18" />
        <div className="rectangle-19" />
        <div className="overlap-2">
        <div className="rectangle-20" />
          <p className="search-by-class-e-g">Search&nbsp;&nbsp;by class (e.g. Math 400), Topic, tutor name</p>
          <div className="rectangle-21" />
          <div className="text-wrapper-9">Search</div>
          <img className="img" alt="Rectangle" src={image2} />
          <div className="text-wrapper-10">All</div>
          <img className="polygon" alt="Polygon" src={image1} />
        </div>
        <p className="p">What Would You Like To Learn?</p>
        <div className="overlap-3">
          <div className="text-wrapper-11">Search Result</div>
        </div>
      </div>
    </div>
    </StyledresultBar>
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
export default connect(mapStateToProps, mapDispatchToProps)(ResultPage);