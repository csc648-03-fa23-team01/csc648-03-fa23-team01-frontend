import React from "react";
import "./dashboardStyle.css";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";
import TutorCard from "./TutorCards";

export const Dashboard = () => {
  return (
    <div className="index">
      <div className="div">
        <NavBar />
        <div className="overlap">
          <div className="rectangle-3" />
          <div className="text-wrapper-12">Dashboard</div>
        </div>
        <div className="overlap-group">
          <div className="welcome-jossief">Welcome&nbsp;&nbsp;Jossief</div>
          <div className="welcome-jossief">Welcome&nbsp;&nbsp;Jossief</div>
        </div>
        <div className="overlap-2">
          <div className="rectangle-4" />
          <div className="rectangle-5" />
          <div className="text-wrapper-13">Messages</div>
          <div className="rectangle-6" />
          <div className="text-wrapper-14">Resourses</div>
          <div className="rectangle-7" />
          <div className="rectangle-8" />
          <div className="text-wrapper-15">To do</div>
          <div className="rectangle-9" />
          <div className="text-wrapper-13">Messages</div>
          <div className="text-wrapper-14">Resourses</div>
          <div className="text-wrapper-16">Lessons</div>
        </div>
        <SearchBar isHomePage={false} />
        <p className="p">What would like to tutor?</p>
        <div className="text-wrapper-18">Calculus Tutor</div>
        <div className="text-wrapper-19">Physics Tutor</div>
        <div className="text-wrapper-20">Physics Tutor</div>
        <TutorCard />
        </div>
      </div>
  );
};
