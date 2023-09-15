import React from 'react';
import Rectangle7Image from './David.png';

import {
  styled
} from '@mui/material/styles';

const David1 = styled("div")({
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

const HelloIAmDavidChen = styled("div")({
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
  left: `658px`,
  top: `280px`,
});

const IMAGraduateStudentIn = styled("div")({
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
  height: `435px`,
  position: `absolute`,
  left: `580px`,
  top: `351px`,
});

const ContactMeCchen45Sfsu = styled("div")({
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
  width: `560px`,
  position: `absolute`,
  left: `580px`,
  top: `934px`,
});

const MyRoleBackEnd = styled("div")({
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
  width: `360px`,
  position: `absolute`,
  left: `580px`,
  top: `786px`,
});

const Rectangle7 = styled("img")({
  height: `679px`,
  width: `536px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `10px`,
  top: `150px`,
});


function David() {
  return (

    <David1>
      <HelloIAmDavidChen>
        {`Hello, I am David Chen`}
      </HelloIAmDavidChen>
      <IMAGraduateStudentIn>
        {`I'm a graduate student in computer science at San Francisco State University. My passion lies in harnessing the power of computers to tackle complex problems and create innovative solutions.  Combining my analytical skills from finance and my computational expertise from computer science, I aspire to make meaningful contributions to both domains. I'm excited to explore the intersection of technology, data analysis, and finance, where I can leverage my diverse skill set to address real-world challenges.


`}
      </IMAGraduateStudentIn>
      <ContactMeCchen45Sfsu>
        {`Contact me: cchen45@sfsu.edu`}
      </ContactMeCchen45Sfsu>
      <MyRoleBackEnd>
        {`My role: Back-end `}
      </MyRoleBackEnd>
      <Rectangle7 src={Rectangle7Image} loading='lazy' alt={"Rectangle 7"}/>
    </David1>);
    
  }

export default David;