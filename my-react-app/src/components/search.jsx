// src/components/search.jsx
import {useDispatch } from 'react-redux';
import { fetchTutor } from '../actions/tutorActions';
import React from "react";
import { connect } from 'react-redux'; // Import connect


const SearchComponent = ({ tutor_data, fetchTutor, searchResults }) => {
  const dispatch = useDispatch();
  const handleSearch = async (query) => {
    // ask chat gpt to get the props and populate it below
    console.log("tutor_data: ", tutor_data);
    fetchTutor();
  };


  return (
    <div>
      <button onClick={() => handleSearch('your-query')}>Search</button>
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
};
const mapStateToProps = (state) => {
    return {
      tutor_data: state.tutors.tutor,
      tutor_loading: state.tutors.loading,
      tutor_error: state.tutors.error,
    };
  }
  
  
  const mapDispatchToProps = {
    fetchTutor
    
  };

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);