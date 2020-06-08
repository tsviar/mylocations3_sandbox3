import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MainMenu = () => (
  <Nav>
    <li>
      <StyledLink to="/">Home</StyledLink>
    </li>
    <li>
      <StyledLink to="/about">Profiles</StyledLink>
    </li>
    <li>
      <StyledLink to="/contact">Create</StyledLink>
    </li>
  </Nav>
);

export default MainMenu;

//Extending React Link
const StyledLink = styled(Link)`
  color: mintcream;
`;

const Nav = styled.ul`
  display: flex;
  list-style-type: none;
  font-family: "Yanone Kaffeesatz";
  font-weight: 400;
  /* font-size: 2.8rem; */
  font-size: 1.2rem; 
  width: 10rem;
  justify-content: space-between;
`;
