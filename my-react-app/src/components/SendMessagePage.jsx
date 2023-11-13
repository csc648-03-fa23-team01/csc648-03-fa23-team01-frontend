import React, { useState } from 'react';
import Navbar from "./NavBar.jsx";
import styled from "styled-components";
import Messenger from "./Messenger.jsx"
import { connect } from 'react-redux';
import { searchAsync } from '../actions/tutorAction';


const StyledResultPage = styled.div`
`;

const recipient = {
    name: "John Doe",
    photo: "https://via.placeholder.com/150" // Replace with actual image source
};

export const SendMessagePage = ({ tutors_data, tutors_loading, tutors_error }) => {
  const [query, setQuery] = useState('');
  return (
    console.log("tutors_data: ", tutors_data),
      <StyledResultPage>
        <div>
        <Navbar />
        </div>
        <div >
        <Messenger recipient={recipient} />

        </div>

      </StyledResultPage>
  );
}

const mapStateToProps = (state) => ({
  tutors_data: state.tutors.data,
  tutors_loading: state.tutors.loading,
  tutors_error: state.tutors.error,
});

const mapDispatchToProps = {
  searchAsync
};

export default connect(mapStateToProps, mapDispatchToProps)(SendMessagePage);
