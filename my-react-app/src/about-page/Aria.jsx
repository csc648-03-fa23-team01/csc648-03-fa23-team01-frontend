import React from 'react';

import Q16637176392021Image from './Aria.png';

import {
  styled
} from '@mui/material/styles';

const Aria1 = styled("div")({
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

const HelloIAmAriaSamandi = styled("div")({
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
  left: `639px`,
  top: `212px`,
});

const IAmAComputerScienceS = styled("div")({
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
  left: `587px`,
  top: `307px`,
});

const ContactMeAsamandiSfs = styled("div")({
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
  width: `664px`,
  position: `absolute`,
  left: `580px`,
  top: `926px`,
});

const MyRoleFrontEndLead = styled("div")({
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
  left: `587px`,
  top: `840px`,
});

const Rectangle7 = styled("div")({
  backgroundColor: `rgba(217, 217, 217, 1)`,
  width: `536px`,
  height: `679px`,
  position: `absolute`,
  left: `20px`,
  top: `161px`,
});

const Q16637176392021 = styled("img")({
  height: `692px`,
  width: `541px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `20px`,
  top: `148px`,
});


function Aria() {
  return (
    <Aria1>
      <HelloIAmAriaSamandi>
        {`Hello, I am Aria Samandi`}
      </HelloIAmAriaSamandi>
      <IAmAComputerScienceS>
        {`I am a  Computer Science student in his senior year currently enrolled at San Francisco State University, with an aspiration to specialize in the realm of Front-End Development. My academic journey has been characterized by a relentless curiosity and a genuine passion for crafting seamless and visually captivating user experiences. I am excited to leverage my academic pursuits and practical skills to contribute meaningfully to the ever-evolving landscape of Front-End Development while continuously refining my expertise in this exciting field.`}
      </IAmAComputerScienceS>
      <ContactMeAsamandiSfs>
        {`Contact me: asamandi@sfsu.edu`}
      </ContactMeAsamandiSfs>
      <MyRoleFrontEndLead>
        {`My role:  Front-end Lead`}
      </MyRoleFrontEndLead>
      <Rectangle7>
      </Rectangle7>
      <Q16637176392021 src={Q16637176392021Image} loading='lazy' alt={"1663717639202 1"}/>
    </Aria1>);

  }

export default Aria;

  