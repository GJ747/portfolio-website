import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Navbar() {
  const Lik = styled(Link)`
    text-decoration: none;
    color: black;
    margin-left: 50px;
    margin-right: 50px;
    margin-top: 20px;
    font-family: "Oswald", sans-serif;
    color: white;
  `;
  const Logo = styled(Link)`
    text-decoration: none;
    color: black;
    margin-left: 50px;
    margin-right: 50px;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 25px;
    color: white;
    font-family: "Oswald", sans-serif;
  `;
  return (
    <div className=" d-flex">
      <Logo>Gaurav Joshi</Logo>
      <div style={{ marginLeft: "100px" }}></div>
      <Lik>Home</Lik>
      <Lik>Experience</Lik>
      <Lik>Projects</Lik>
      <Lik>Resume</Lik>
      <Lik>About Me</Lik>
    </div>
  );
}

export default Navbar;
