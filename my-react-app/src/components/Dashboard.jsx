import React from "react";
import "./dashboardStyle.css";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";
import TutorCard from "./TutorCards";
import { connect } from 'react-redux';
import { getUserTutors } from "../actions/userAction";
import styled from 'styled-components';

const ContentWrapper = styled.div`
position: relative;
  width: 100%;
  min-height: 100vh; // Changed to ensure full vertical coverage
  overflow-x: hidden;
`;

const Dashboard = ({users_data, getUserTutors}) => {
  return (
    <div className="index">
      <div className="div">
        <ContentWrapper>
        <NavBar />
        </ContentWrapper>
      
        <div className="overlap">
          <div className="rectangle-3" />
          <div className="text-wrapper-12">Dashboard</div>
        </div>
        <div className="overlap-group">
          <div className="welcome-jossief">Welcome&nbsp;&nbsp;{ users_data ? users_data.firstName : 'John'}</div>
        </div>
        <div className="overlap-2">
          <div className="rectangle-5" />
          <div className="text-wrapper-13">Messages</div>
          <div className="rectangle-6" />
          <div className="text-wrapper-14">Resourses</div>
          <div className="rectangle-7" />
          <div className="rectangle-8" />
          <div className="text-wrapper-15">To do</div>
          <div className="rectangle-9" />
          <div className="text-wrapper-13">Messages</div>
          <div className="text-wrapper-14">Resourses</div>
          <div className="text-wrapper-16">Lessons</div>
        </div>
        <p className="p">What would like to learn?</p>
        <div className="text-wrapper-18">Calculus Tutor</div>
        <div className="text-wrapper-19">Physics Tutor</div>
        <div className="text-wrapper-20">Physics Tutor</div>

        {/* <TutorCard /> */}
        </div>
        
      </div>
  );
};

const mapStateToProps = state => ({
  users_data: state.users.userData,
});
const mapDispatchToProps = {
  getUserTutors
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
