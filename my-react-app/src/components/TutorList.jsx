import React from 'react';
import TutorCard from './TutorCards';  
import {TutorModel } from '../models/tutorModel'; 

const TutorList = ({ tutors_data, tutors_loading, tutors_error }) => {
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
      {tutors_data.map((tutorData) => {
        const tutor = TutorModel.fromJSON(tutorData);

        return (
          <TutorCard
            id={tutor.id}
            name={tutor.firstName + " "+tutor.lastName}
            profilePictureLink={tutor.profilePictureLink}
            ratings={tutor.average_ratings}
            classes={tutor.classes}
            description={tutor.description}
            price={tutor.price}
            availability={tutor.times_available}
            primaryLanguages={tutor.main_languages}
            cv={tutor.cv_link}
            secondaryLanguages={tutor.other_languages}
            subjects={tutor.subjects}  // This seems redundant, adjust as needed
          />
        );
      })}
    </div>
  );
}

export default TutorList;