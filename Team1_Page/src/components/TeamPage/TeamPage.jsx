import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const TeamPage1 = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
  height: 'auto',
  width: '100%',
});

const Section = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `63px 187px 0px 187px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const Software = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: theme.typography['Typography']['Subtitle 1'].fontStyle,
  fontFamily: theme.typography['Typography']['Subtitle 1'].fontFamily,
  fontWeight: theme.typography['Typography']['Subtitle 1'].fontWeight,
  fontSize: theme.typography['Typography']['Subtitle 1'].fontSize,
  letterSpacing: theme.typography['Typography']['Subtitle 1'].letterSpacing,
  lineHeight: theme.typography['Typography']['Subtitle 1'].lineHeight,
  textDecoration: theme.typography['Typography']['Subtitle 1'].textDecoration,
  textTransform: theme.typography['Typography']['Subtitle 1'].textTransform,
  alignSelf: `center`,
  margin: `0px`,
}));

const Q2023Fal = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: theme.typography['Typography']['Subtitle 1'].fontStyle,
  fontFamily: theme.typography['Typography']['Subtitle 1'].fontFamily,
  fontWeight: theme.typography['Typography']['Subtitle 1'].fontWeight,
  fontSize: theme.typography['Typography']['Subtitle 1'].fontSize,
  letterSpacing: theme.typography['Typography']['Subtitle 1'].letterSpacing,
  lineHeight: theme.typography['Typography']['Subtitle 1'].lineHeight,
  textDecoration: theme.typography['Typography']['Subtitle 1'].textDecoration,
  textTransform: theme.typography['Typography']['Subtitle 1'].textTransform,
  alignSelf: `center`,
  margin: `9px 0px 0px 0px`,
}));

const Team1 = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: theme.typography['Typography']['Subtitle 1'].fontStyle,
  fontFamily: theme.typography['Typography']['Subtitle 1'].fontFamily,
  fontWeight: theme.typography['Typography']['Subtitle 1'].fontWeight,
  fontSize: theme.typography['Typography']['Subtitle 1'].fontSize,
  letterSpacing: theme.typography['Typography']['Subtitle 1'].letterSpacing,
  lineHeight: theme.typography['Typography']['Subtitle 1'].lineHeight,
  textDecoration: theme.typography['Typography']['Subtitle 1'].textDecoration,
  textTransform: theme.typography['Typography']['Subtitle 1'].textTransform,
  alignSelf: `center`,
  margin: `9px 0px 0px 0px`,
}));

const Section1 = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px 187px 0px 15px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `39px 0px 0px 0px`,
});

const ButtonContained1 = styled(Button)(({ theme }) => ({
  alignSelf: `stretch`,
  margin: `6px 0px 0px 0px`,
  color: theme.palette.primary.contrastText,
  fontStyle: `normal`,
  fontFamily: `Heebo`,
  fontWeight: `700`,
  fontSize: `15px`,
  letterSpacing: `0.46px`,
  textDecoration: `none`,
  lineHeight: `26px`,
  textTransform: `none`,
}));

const ButtonContained2 = styled(Button)(({ theme }) => ({
  alignSelf: `stretch`,
  margin: `6px 0px 0px 0px`,
  color: theme.palette.primary.contrastText,
  fontStyle: `normal`,
  fontFamily: `Heebo`,
  fontWeight: `700`,
  fontSize: `15px`,
  letterSpacing: `0.46px`,
  textDecoration: `none`,
  lineHeight: `26px`,
  textTransform: `none`,
}));

const ButtonContained3 = styled(Button)(({ theme }) => ({
  alignSelf: `stretch`,
  margin: `6px 0px 0px 0px`,
  color: theme.palette.primary.contrastText,
  fontStyle: `normal`,
  fontFamily: `Heebo`,
  fontWeight: `700`,
  fontSize: `15px`,
  letterSpacing: `0.46px`,
  textDecoration: `none`,
  lineHeight: `26px`,
  textTransform: `none`,
}));

const ButtonContained4 = styled(Button)(({ theme }) => ({
  alignSelf: `stretch`,
  margin: `6px 0px 0px 0px`,
  color: theme.palette.primary.contrastText,
  fontStyle: `normal`,
  fontFamily: `Heebo`,
  fontWeight: `700`,
  fontSize: `15px`,
  letterSpacing: `0.46px`,
  textDecoration: `none`,
  lineHeight: `26px`,
  textTransform: `none`,
}));

const ButtonContained5 = styled(Button)(({ theme }) => ({
  alignSelf: `stretch`,
  margin: `6px 0px 0px 0px`,
  color: theme.palette.primary.contrastText,
  fontStyle: `normal`,
  fontFamily: `Heebo`,
  fontWeight: `700`,
  fontSize: `15px`,
  letterSpacing: `0.46px`,
  textDecoration: `none`,
  lineHeight: `26px`,
  textTransform: `none`,
}));

const ButtonContained6 = styled(Button)(({ theme }) => ({
  alignSelf: `stretch`,
  margin: `6px 0px 0px 0px`,
  color: theme.palette.primary.contrastText,
  fontStyle: `normal`,
  fontFamily: `Heebo`,
  fontWeight: `700`,
  fontSize: `15px`,
  letterSpacing: `0.46px`,
  textDecoration: `none`,
  lineHeight: `26px`,
  textTransform: `none`,
}));

function TeamPage(props) {
  return (
    <TeamPage1 className={props.className}>
      <Section>
        <Software>{`Software Engineering Class SFSU`}</Software>
        <Q2023Fal>{`2023 Fall Section 3`}</Q2023Fal>
        <Team1>{`Team 1`}</Team1>
      </Section>
      <Section1>
        <ButtonContained1
          variant="contained"
          disabled={false}
          size={'large'}
          color={'primary'}
        >
          {'Mahdi Hassanpour'}
        </ButtonContained1>
        <ButtonContained2
          variant="contained"
          disabled={false}
          size={'large'}
          color={'primary'}
        >
          {'David chen'}
        </ButtonContained2>
        <ButtonContained3
          variant="contained"
          disabled={false}
          size={'large'}
          color={'primary'}
        >
          {'John Kongtcheu'}
        </ButtonContained3>
        <ButtonContained4
          variant="contained"
          disabled={false}
          size={'large'}
          color={'primary'}
        >
          {'Aria Samandi'}
        </ButtonContained4>
        <ButtonContained5
          variant="contained"
          disabled={false}
          size={'large'}
          color={'primary'}
        >
          {'Leo Powers'}
        </ButtonContained5>
        <ButtonContained6
          variant="contained"
          disabled={false}
          size={'large'}
          color={'primary'}
        >
          {'Yuiel A Gebredngl'}
        </ButtonContained6>
      </Section1>
    </TeamPage1>
  );
}

export default TeamPage;
