import React from 'react';

import Image2Image from './Mahdi.png';

import {
  styled
} from '@mui/material/styles';

const Mahdi1 = styled("div")({
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

const Image2 = styled("img")({
  height: `690px`,
  width: `546px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `10px`,
  top: `150px`,
});

const HelloIAmMahdiHassanp = styled("div")({
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

const IMInMyLastSemesterAs = styled("div")({
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

const ContactMeMhassanpour = styled("div")({
  textAlign: `center`,
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
  left: `424px`,
  top: `930px`,
});

const MyRoleGitHubMaster = styled("div")({
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

const Frame1 = styled("img")({
    height: `679px`,
    width: `536px`,
    objectFit: `cover`,
    position: `absolute`,
    left: `10px`,
    top: `150px`,
});


function Mahdi() {
  return (
    <Mahdi1>
      <Image2 src={Image2Image} loading='lazy' alt={"image 2"}/>
      <HelloIAmMahdiHassanp>
        {`Hello, i am Mahdi Hassanpour.`}
      </HelloIAmMahdiHassanp>
      <IMInMyLastSemesterAs>
        {`I'm in my last semester as a computer science student, and I've got a real passion for UX design. with coding expertise and a strong problem-solving. I love using my creative side to make user-friendly digital experiences that blend both form and function, all while keeping things practical.
        `}
       </IMInMyLastSemesterAs>
      <ContactMeCchen45Sfsu>
        {`Contact me: mhassanpour@sfsu.edu`}
      </ContactMeCchen45Sfsu>
      <MyRoleGitHubMaster>
        {`My role: GitHub Master `}
      </MyRoleGitHubMaster>
      <Rectangle7 src={Image2Image} loading='lazy' alt={"Frame1"}/>
    </Mahdi1>);

  }

export default Mahdi; 