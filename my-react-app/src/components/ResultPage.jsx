import React from "react";
import Navbar from "./NavBar.jsx";
import SearchBar from "./SearchBar.jsx";
import TutorCard from "./TutorCards.jsx";
import styled from "styled-components";

const StyledResultPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ResultPage = () => {
  return (
      <StyledResultPage>
        <div>
        <Navbar />
          <SearchBar />
        </div>
        <TutorCard
                registeredUserId="12345"
                ratings="4.5"
                classes="Mathematics, Physics"
                description="Experienced tutor with 5+ years."
                price="50"
                availability="Mon-Fri, 9am-5pm"
                primaryLanguages="English, French"
                cv="path_to_cv.pdf"
                secondaryLanguages="Spanish"
                expertiseInSubject="Math, Physics, Chemistry"
            />

          {/* ...rest of your components and elements... */}
      </StyledResultPage>
  );
}

export default ResultPage;
