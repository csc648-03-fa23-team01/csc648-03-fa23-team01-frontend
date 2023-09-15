import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import questTheme from 'src/QuestUiKitLightTheme';
import TeamPage from 'src/components/TeamPage/TeamPage';

function App() {
  return (
    <HelmetProvider>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={questTheme}>
          <Routes>
            <Route path="/" element={<TeamPage />} />
          </Routes>
        </ThemeProvider>
      </StyledEngineProvider>
    </HelmetProvider>
  );
}

export default App;
