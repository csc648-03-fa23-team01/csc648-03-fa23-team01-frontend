import React from 'react';



import {
  styled
} from '@mui/material/styles';

const Template1 = styled("div")({
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

const Hellotemplate = styled("div")({
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

const Aboutme = styled("div")({
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

const ContactMe = styled("div")({
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
  left: `587px`,
  top: `860px`,
});

const Image1 = styled("img")({
  height: `692px`,
  width: `541px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `20px`,
  top: `148px`,
});


function Template(props) {
  return (
    <Template1>
      <Hellotemplate>
        {'Hello, I am ' + props.names }
      </Hellotemplate>
      <Aboutme>
        {props.summary}
      </Aboutme>
      <ContactMe>
        {'Contact me:'+ props.email}
      </ContactMe>
      <MyRole>
        {'My role:'+ props.role}
      </MyRole>
      <Image1 src={props.image} loading='lazy' alt={"Image1"}/>
    </Template1>);
  }

export default Template;

  