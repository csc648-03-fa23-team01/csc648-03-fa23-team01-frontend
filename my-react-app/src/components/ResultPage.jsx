import React from "react";
import Navbar from "./NavBar.jsx";
import SearchBar from "./SearchBar.jsx";
import TutorCard from "./TutorCards.jsx";
import styled from "styled-components";
import image1 from '../assets/images/Polygon1.svg';
import image2 from '../assets/images/Rectangle46.svg';
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


export const ResultPage = () => {
  return (
      <StyledResultPage>
        <div>
        <Navbar />
          <SearchBar />
        </div>
        <TutorCard
                registeredUserId="12345"
                ratings="4.5"
                classes="Mathematics, Physics"
                description="Experienced tutor with 5+ years."
                price="50"
                availability="Mon-Fri, 9am-5pm"
                primaryLanguages="English, French"
                cv="path_to_cv.pdf"
                secondaryLanguages="Spanish"
                expertiseInSubject="Math, Physics, Chemistry"
            />

          {/* ...rest of your components and elements... */}
      </StyledResultPage>
  );
}

export default ResultPage;
