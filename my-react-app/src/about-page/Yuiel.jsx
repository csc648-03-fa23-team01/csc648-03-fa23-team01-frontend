import React from 'react';

import {
  styled
} from '@mui/material/styles';

const Yuiel1 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: `1440px`,
  height: `1024px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
});

const HelloIAmYuielAGebred = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `800`,
  fontSize: `40px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `580px`,
  top: `280px`,
});

const AboutMeText = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `800`,
  fontSize: `32px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `841px`,
  height: `275px`,
  position: `absolute`,
  left: `580px`,
  top: `351px`,
});

const ContactMeYgebrednglS = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `800`,
  fontSize: `32px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `616px`,
  position: `absolute`,
  left: `580px`,
  top: `926px`,
});

const MyRole = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `800`,
  fontSize: `32px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `580px`,
  top: `649px`,
});

const Rectangle7 = styled("div")({
  backgroundColor: `rgba(217, 217, 217, 1)`,
  width: `536px`,
  height: `679px`,
  position: `absolute`,
  left: `20px`,
  top: `161px`,
});


function Yuiel() {
  return (
    <Yuiel1>
      <HelloIAmYuielAGebred>
        {`Hello, I am Yuiel A Gebredngl`}
      </HelloIAmYuielAGebred>
      <AboutMeText>
        {`About me text
`}
      </AboutMeText>
      <ContactMeYgebrednglS>
        {`Contact me:  ygebredngl@sfsu.edu`}
      </ContactMeYgebrednglS>
      <MyRole>
        {`My role: `}
      </MyRole>
      <Rectangle7>
      </Rectangle7>
    </Yuiel1>);

  }

export default Yuiel;

  