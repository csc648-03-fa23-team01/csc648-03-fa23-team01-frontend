import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import questTheme from './QuestUiKitLightTheme';
import TeamPage from './components/TeamPage';

function App() {
  return (
    <HelmetProvider>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={questTheme}>
          <Routes>
            <Route path="/" element={<TeamPage className = " Team " />} />
            <Route path="/about-Mahdi Hassanpour" element={<TeamPage member="Mahdi Hassanpour" />} />
            <Route path="/about-David Chen" element={<TeamPage member="David Chen" />} />
            <Route path="/about-John Kongtcheu" element={<TeamPage member="John Kongtcheu" />} />
            <Route path="/about-Aria Samandi" element={<TeamPage member="Aria Samandi" />} />
            <Route path="/about-Leo Powers" element={<TeamPage member="Leo Powers" />} />
            <Route path="/about-Yuiel A Gebredngl" element={<TeamPage member="Yuiel A Gebredngl" />} />
          </Routes>
        </ThemeProvider>
      </StyledEngineProvider>
    </HelmetProvider>
  );
}

export default App;
