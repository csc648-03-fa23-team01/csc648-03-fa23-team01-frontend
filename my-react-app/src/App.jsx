import React, {useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import questTheme from './QuestUiKitLightTheme';
import TeamPage from './components/TeamPage';
import Template from './components/template';
import LoginPage from './components/Login';
import HomePage from './components/HomePage';
import {names, email,summary, image, role} from './constants/about_page_constants';
import ResultPage from './components/ResultPage';
import {Provider} from "react-redux";
import store from "./store/store.js";
import { Helmet } from 'react-helmet';
import TrashUI from './components/TrashUI';
import { Amplify, Storage, Auth } from 'aws-amplify'; // Import Amplify and Storage
import awsmobile from './amplify-src/aws-exports';
import TutorPage from './components/TutorPage';
import SendMessagePage from './components/SendMessagePage';
import SignUpPage from './components/SignUpPage';
import TutorApply from './components/TutorApply.jsx';
// import { withAuthenticator } from '@aws-amplify/ui-react';
// import '@aws-amplify/ui-react/styles.css';
import WebFont from 'webfontloader';
import BecomeTutor from './components/BecomeTutor';

Amplify.configure(awsmobile);



function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Inter']
      }
    });
   }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>CSC 648 Fall 2023 Team 01</title>
      </Helmet>
      <StyledEngineProvider injectFirst>
        <Provider store={store}>
          <ThemeProvider theme={questTheme}>
            <Routes>
              <Route path="/trash" element={<TrashUI className = " Trash " />} />
              <Route path="/" element={<HomePage className = " Home " />} />
              <Route path="/tutor/:user_id" element={<TutorPage />} />
              <Route path="/teamPage" element={<TeamPage className = " Team " />} />
              <Route path="/login" element={<LoginPage classname = "Login"/>}/>
              <Route path="/signup" element={<SignUpPage className = " signup " />} />
              <Route path="/message/:user_id" element={<SendMessagePage className = " Messenger " />} />
              <Route path="/resultPage" element={<ResultPage className = "result"/>} />
              <Route path="/tutorapply" element={<TutorApply className = "tutorapply"/>} />

              <Route path="/BecomeTutor" element={<BecomeTutor className="become-tutor" />} />

              <Route path="/about-Mahdi Hassanpour" element={<Template names = {names[4]} summary = {summary[4]} email = {email[4]} role = {role[4]} image={image[4]} />} />
              <Route path="/about-David Chen" element={<Template names = {names[1]} summary = {summary[1]} email = {email[1]} role = {role[1]} image={image[1]} />} />
              <Route path="/about-John Kongtcheu" element={<Template names = {names[2]} summary = {summary[2]} email = {email[2]} role = {role[2]} image={image[2]} />} />
              <Route path="/about-Aria Samandi" element={<Template names = {names[0]} summary = {summary[0]} email = {email[0]} role = {role[0]} image={image[0]} />} />
              <Route path="/about-Leo Powers" element={<Template names = {names[3]} summary = {summary[3]} email = {email[3]} role = {role[3]} image={image[3]} />} />
              <Route path="/about-Yuiel A Gebredngl" element={<Template names = {names[5]} summary = {summary[5]} email = {email[5]} role = {role[5]} image={image[5]} />} />
            </Routes>
          </ThemeProvider>
        </Provider>
      </StyledEngineProvider>
    </HelmetProvider>
  );
}

export default App;
