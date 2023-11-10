import React, { useState } from 'react';
import Navbar from "./NavBar.jsx";
import SearchBar from "./SearchBar.jsx";
import styled from "styled-components";
import { connect } from 'react-redux';
import { searchAsync } from '../actions/tutorAction';
import TutorList from './TutorList.jsx';
import { TutorModel } from '../models/tutorModel.jsx';

const StyledResultPage = styled.div`
  display: flex; /* Use flexbox to layout the main content and the sidebar */
  flex-direction: column; /* Stack children vertically */

  .content-wrapper {
    display: flex; /* New flex container for the filter section and tutor cards */
  }

  .filter-section {
    flex-basis: 250px; /* Width of the sidebar */
    padding: 20px; /* Padding around the filter content */
    border-right: 1px solid #ccc; /* Line separating sidebar from content */
  }

  .tutor-cards-wrapper {
    flex-grow: 1; /* Takes up the remaining space */
    padding: 20px; /* Padding around the tutor cards */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start; /* Align items to the top */
    gap: 20px; // Keep some space between the cards
  }
  .result-wrapper{
    justify-content: start;

  }

  .availability-checkbox {
    margin-right: 8px; /* Space between checkbox and label */
  }
  
`;

export const ResultPage = ({ tutors_data, tutors_loading, tutors_error }) => {
  // State hooks for filters
  const [hourlyRate, setHourlyRate] = useState(10);
  const [availability, setAvailability] = useState({
    sunday: false,
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
  });
  const [query, setQuery] = useState('');


  const applyFilters = () => {
    let filteredTutors = tutors_data;
    console.log("filtering: ", tutors_data)
    // Filter by hourly rate
    if (hourlyRate && filteredTutors) {
      filteredTutors = filteredTutors.filter(tutor => tutor.price >= hourlyRate);
      console.log("filtered: ", filteredTutors)

    }
    // Filter by selected topic
    if (selectedTopic && filteredTutors) {
      filteredTutors = filteredTutors.filter(tutor => tutor.topics.includes(selectedTopic));
    }
    return filteredTutors;
  };


  // Handler for changing the hourly rate
  const handleHourlyRateChange = (event) => {
    setHourlyRate(event.target.value);
  };

  // Handler for changing availability
  const handleAvailabilityChange = (day) => {
    setAvailability(prev => ({ ...prev, [day]: !prev[day] }));
  };

  // Render the checkboxes for availability
  const renderAvailabilityCheckboxes = () => {
    return Object.keys(availability).map((day) => (
      <div key={day}>
        <input
          type="checkbox"
          id={day}
          className="availability-checkbox"
          checked={availability[day]}
          onChange={() => handleAvailabilityChange(day)}
        />
        <label htmlFor={day}>{day.charAt(0).toUpperCase() + day.slice(1)}</label>
      </div>
    ));
  };

  const [selectedTopic, setSelectedTopic] = useState('');
  const topics = ['Math', 'Science', 'English', 'History']; // Add  topics here

// Render the dropdown for selecting a subject
const renderSubjectDropdown = () => {
  return (
    <div style={{ padding: '0 20px' }}>
      <input 
        list="subjects"
        value={selectedTopic}
        onChange={(e) => setSelectedTopic(e.target.value)}
        style={{ display: 'block', width: '100%', padding: '8px', marginBottom: '10px' }}
      />
      <datalist id="subjects">
        {topics.map((topic, index) => (
          <option key={index} value={topic}>{topic}</option>
        ))}
      </datalist>
    </div>
  );
};

console.log(applyFilters())
return (
  <StyledResultPage>
    <Navbar />
    <div className="content-wrapper">
      <div className="filter-section">
        <h2>Filters</h2>
        <label htmlFor="hourly-rate">Hourly rate: ${hourlyRate} </label>
        <input
          type="range"
          id="hourly-rate"
          min="10"
          max="100"
          value={hourlyRate}
          onChange={handleHourlyRateChange}
        />
        <h3>Availability</h3>
        {renderAvailabilityCheckboxes()}
        {renderSubjectDropdown()} {/* Add this line to render the subject dropdown */}
      </div>
      <div className="tutor-cards-wrapper">
        <SearchBar isHomePage={false} />
        <TutorList
          tutors_data={applyFilters()} // Apply filters here
          tutors_loading={tutors_loading}
          tutors_error={tutors_error}
        />      </div>
    </div>
  </StyledResultPage>
);
}

const mapStateToProps = (state) => ({
  tutors_data: state.search.data,
  tutors_loading: state.search.loading,
  tutors_error: state.search.error,
});

const mapDispatchToProps = {
  searchAsync
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultPage);
