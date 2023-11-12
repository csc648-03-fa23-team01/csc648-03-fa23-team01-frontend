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
    flex-basis: 250px;
    padding: 20px;
    border-right: 1px solid #ccc;
    margin-top: 7rem; /* Adjust this value to move the filter section down */
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
  const [FilterTutorData, setFilterTutorData] = useState(tutors_data);
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
    // Check if tutors_data is null or empty
    if (!tutors_data || tutors_data.length === 0) {
      return [];
    }
  
    let filteredTutors = tutors_data;
  
    // Filter by hourly rate
    if (hourlyRate) {
      filteredTutors = filteredTutors.filter(tutor => tutor.price >= hourlyRate);
    }
  
    // Filter by selected topic
    if (selectedTopic) {
      filteredTutors = filteredTutors.filter(tutor => 
        tutor.topics && tutor.topics.includes(selectedTopic)
      );
    }
  
    // Filter by availability
    const selectedDays = Object.entries(availability).filter(([day, isSelected]) => isSelected).map(([day]) => day);
    if (selectedDays.length > 0) {
      filteredTutors = filteredTutors.filter(tutor =>
        tutor.times && tutor.times.some(time => 
          selectedDays.map(day => day.toLowerCase()).includes(time.day.toLowerCase())
        )
      );
    }
  
    // Map the filtered data to TutorModel instances
    return filteredTutors.map(json => TutorModel.fromJSON(json));
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
