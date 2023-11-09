import React from 'react';
import TutorCards_BecomeTutor from './TutorCards_BecomeTutor';  // Assuming TutorCard and the parent component are in the same directory
import { TutorProfile } from '../models/tutorModel';  // Adjust the path as needed

const TutorList = ({ tutors_data, tutors_loading, tutors_error }) => {
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
      <h4>{tutors_data.length} tutors fit your choices</h4>
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
    </div>
  );
}

export default TutorList;