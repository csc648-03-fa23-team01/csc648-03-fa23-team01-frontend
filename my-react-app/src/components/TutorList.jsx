import React, { useState, useEffect } from 'react'; // Ensure useState is imported
import TutorCards_BecomeTutor from './TutorCards_BecomeTutor';


  const TutorList = ({ tutors_data, tutors_loading, tutors_error }) => {
    const [sortKey, setSortKey] = useState('bestMatch'); // Default sort key
    const [sortedArray, setsortedArray] = useState([]); // Default sort key
    useEffect(() => {
      console.log(tutors_data)
      if (tutors_data) {
        const sorted = [...tutors_data].sort((a, b) => {
          if (sortKey === 'bestMatch') {
            return b.average_ratings - a.average_ratings;
          } else if (sortKey === 'lowestPrice') {
            return a.price - b.price;
          }
          return 0;
        });
            setsortedArray(sorted);
      }
    }, [tutors_data, sortKey]);
    
    const handleSortChange = (event) => {
      setSortKey(event.target.value);
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
    return <p>Loading...</p>;
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
      {(!tutors_data || tutors_data.length === 0) && <p style={{ marginTop: '1rem' }}>No tutors available.</p>}
  
      {/* Check that tutors_data is loaded and has data */}
      {tutors_data && tutors_data.length > 0 && (
        <>
        {/* Header container */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '1rem 0' }}>
          {/* Message with adjusted style and partially bold text */}
          <h4 style={{ flexGrow: 1, textAlign: 'left', fontSize: '1.5rem', marginLeft: '1rem' }}>
            <strong>{tutors_data.length} tutors</strong> fit your choices
          </h4>
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
          {sortedArray.map((tutorData) => {
            console.log(tutorData)
            return (
              <TutorCards_BecomeTutor
            id={tutorData.id}
            name={tutorData.firstName +" " + tutorData.lastName}
            profilePictureLink={tutorData.profilePictureLink}
            ratings={tutorData.averageRatings}
            classes={tutorData.classes}
            description={tutorData.description}
            price={tutorData.price}
            availability={tutorData.timesAvailable}
            primaryLanguages={tutorData.mainLanguages}
            cv={tutorData.cvLink}
            secondaryLanguages={tutorData.otherLanguages}
            subjects={tutorData.subjects}  
            rate={tutorData.price}

            />
          );
        })}
      </>
    )}
  </div>
);
}

export default TutorList;