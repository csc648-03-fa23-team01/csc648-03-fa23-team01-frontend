import React from 'react';

import Rectangle7Image from './Leo.png';

import {
  styled
} from '@mui/material/styles';

const Leo1 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: `1440px`,
  height: `1337px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
});

const HelloIAmLeoPowers = styled("div")({
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
  left: `657px`,
  top: `280px`,
});

const IMASeniorAtSanFranci = styled("div")({
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
  height: `706px`,
  position: `absolute`,
  left: `580px`,
  top: `351px`,
});

const ContactMeLpowers2Sfs = styled("div")({
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
  width: `574px`,
  position: `absolute`,
  left: `574px`,
  top: `1240px`,
});

const MyRoleBackEndLead = styled("div")({
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
  width: `390px`,
  position: `absolute`,
  left: `574px`,
  top: `1037px`,
});

const Rectangle7 = styled("img")({
  height: `679px`,
  width: `536px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `20px`,
  top: `161px`,
});


function Leo() {
  return (
    <Leo1>
      <HelloIAmLeoPowers>
        {`Hello, I am Leo Powers`}
      </HelloIAmLeoPowers>
      <IMASeniorAtSanFranci>
        {`I'm a senior at San Francisco State University, where I've immersed myself in an eclectic blend of disciplines that mirror my diverse interests. When I'm not engrossed in academic research or spirited classroom debates, you'll probably find me hitting the gym to keep both my body and mind in peak condition. Music is my go-to source for inspiration and relaxation, and I'm an avid gamer who enjoys diving into virtual worlds as much as analyzing the real one. But don't let the laid-back hobbies fool you—I'm deeply passionate about matters like politics and artificial intelligence. I firmly believe that technology and informed civic engagement have the power to make the world a better place, and I'm committed to contributing to this positive change. So let's connect, collaborate, and create something amazing together!
`}
      </IMASeniorAtSanFranci>
      <ContactMeLpowers2Sfs>
        {`Contact me: lpowers2@sfsu.edu`}
      </ContactMeLpowers2Sfs>
      <MyRoleBackEndLead>
        {`My role:  Back-end Lead`}
      </MyRoleBackEndLead>
      <Rectangle7 src={Rectangle7Image} loading='lazy' alt={"Rectangle 7"}/>
    </Leo1>);

  }

export default Leo;

  