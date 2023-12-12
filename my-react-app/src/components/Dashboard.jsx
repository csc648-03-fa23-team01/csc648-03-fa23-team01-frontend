import React from "react";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";
import TutorCard from "./TutorCards";
import { connect } from 'react-redux';
import { getUserTutors } from "../actions/userAction";
import styled from 'styled-components';
import DashboardMenu from "./DashboardMenu";

const ContentWrapper = styled.div`
display: flex; // Enable Flexbox
width: 100%; // Full width of the container
`;


const SideBar = styled.div`  flex: 2; // Takes up 2/3 of the space


`;

const MainContent = styled.div`

`;

const Dashboard = ({ users_data, getUserTutors }) => {
  return (
    <>
      <NavBar />
      <ContentWrapper>

        <SideBar>
        <SearchBar />
          <DashboardMenu />
        </SideBar>
        <MainContent>
        </MainContent>
      </ContentWrapper>
    </>
  );
};

const mapStateToProps = state => ({
  users_data: state.users.userData,
});

const mapDispatchToProps = {
  getUserTutors
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
