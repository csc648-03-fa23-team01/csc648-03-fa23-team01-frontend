import React, { useState } from 'react'; // Ensure useState is imported
import TutorCards_BecomeTutor from './TutorCards_BecomeTutor';
import { TutorProfile } from '../models/tutorModel';

  const TutorList = ({ tutors_data, tutors_loading, tutors_error }) => {
    const [sortKey, setSortKey] = useState('bestMatch'); // Default sort key
    const handleSortChange = (event) => {
      setSortKey(event.target.value);
      // Implement sorting logic or update the state that triggers a re-render with the sorted data
    };
    // Style for the sort dropdown
    const dropdownStyle = {
      border: 'none',
      borderRadius: '5vw',
      backgroundColor: '#FFFFFF',
      color: 'black',
      boxShadow: '0 0.4vw 0.8vw rgba(0, 0, 0, 0.1)',
      border: '0.1vw solid #000',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    };
    
  if (tutors_loading) {
    return <p>Loading...</p>; // Or any other loading indicator you might want to use
  }

  if (tutors_error) {
    return <p>Error: {tutors_error}</p>;
  }

  if (!tutors_data || tutors_data.length === 0) {
    return <p>No tutors available.</p>;
  }

  return (
    <div>
      {/* Conditional rendering for loading or error messages */}
      {tutors_loading && <p>Loading...</p>}
      {tutors_error && <p>Error: {tutors_error}</p>}
      {(!tutors_data || tutors_data.length === 0) && <p>No tutors available.</p>}
  
      {/* Check that tutors_data is loaded and has data */}
      {tutors_data && tutors_data.length > 0 && (
        <>
        {/* Header container */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '1rem 0' }}>
              {/* Centered message */}
              <h4 style={{ flexGrow: 1, textAlign: 'center' }}>{tutors_data.length} tutors fit your choices</h4>
              {/* Sort dropdown aligned to the right */}
              <div>
                <label htmlFor="sort-select">Sort:</label>
                <select id="sort-select" value={sortKey} onChange={handleSortChange} style={dropdownStyle}>
                  <option value="bestMatch">Best Match</option>
                  <option value="lowestPrice">Lowest Price</option>
                </select>
              </div>
            </div>
  
          {/* Render the list of TutorCards */}
          {tutors_data.map((tutorData) => {
            const tutor = TutorProfile.fromJSON(tutorData);
            return (
              <TutorCards_BecomeTutor
                key={tutor.user_id}
            name={tutor.name}
            profilePicture={tutor.profilePicture}
            ratings={tutor.average_ratings}
            classes={tutor.classes}
            description={tutor.description}
            price={tutor.price}
            availability={tutor.times_available}
            primaryLanguages={tutor.main_languages}
            cv={tutor.cv_link}
            secondaryLanguages={tutor.other_languages}
            subjects={tutor.subjects}  // This seems redundant, adjust as needed
            rate={tutor.rate}

            />
          );
        })}
      </>
    )}
  </div>
);
}

export default TutorList;