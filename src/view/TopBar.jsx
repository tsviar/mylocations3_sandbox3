import React from "react";

import styled, { keyframes } from "styled-components/macro";


// import { makeStyles, styled , keyframes} from '@material-ui/core/styles';
import { palette, spacing } from '@material-ui/system';
import NoSsr from '@material-ui/core/NoSsr';
import marker from '@ajar/marker'; 


// the children is the <Menu /> in App.js inside the  <TopBar> </TopBar>
const TopBar = ({ children }) => (
  <Box>
    <Text>{children}</Text>
    <Logo src="/icons/logo.svg" alt="logo" />
  </Box>
);

export default TopBar;

//================================================
//  Styling
//================================================

const values = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const Logo = styled.img`
  ${palette}
  ${spacing}
  height: 5rem;
  animation: ${spin} 2s linear infinite;
`;

const Box = styled.div`
  ${palette}
  ${spacing}
  background: slategray;
  width: 100%;
  height: 70px;
  padding: 20px;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Text = styled.h1`
  ${palette}
  ${spacing}
  // font-size: 3rem; 
  font-size: 1px;
  font-weight: normal;
  font-family: "Griffy", cursive;
  color: papayawhip;
  cursor: pointer;
  user-select: none;
  position: relative;
`;

//https://material-ui.com/system/basics/

// Mesting Selectors https://material-ui.com/styles/basics/
// const useStyles = makeStyles({
//   root: {
//     padding: 16,
//     color: 'red',
//     '& p': {
//       color: 'green',
//       '& span': {
//         color: 'blue'
//       }
//     }
//   },
// });

/*
import React from "react";
import styled, { keyframes } from "styled-components/macro";

// the children is the <Menu /> in App.js inside the  <TopBar> </TopBar>
const TopBar = ({ children }) => (
  <Box>
    <Text>{children}</Text>
    <Logo src="/icons/logo.svg" alt="logo" />
  </Box>
);

export default TopBar;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const Logo = styled.img`
  height: 5rem;
  animation: ${spin} 2s linear infinite;
`;

const Box = styled.div`
  background: slategray;
  width: 100%;
  height: 70px;
  padding: 20px;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Text = styled.h1`
  // font-size: 3rem; 
  font-size: 1px;
  font-weight: normal;
  font-family: "Griffy", cursive;
  color: papayawhip;
  cursor: pointer;
  user-select: none;
  position: relative;
`;
*/