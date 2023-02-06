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
    @media (max-width: 768px) {
      margin-left: 20px;
    }
  `;

  const Div = styled.div`
    @media (max-width: 768px) {
      display: none;
    }
  `;

  const DivM = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

  return (
    <div>
      <Div>
        <div className=" d-flex">
          <Logo>Gaurav Joshi</Logo>
          <div style={{ marginLeft: "100px" }}></div>
          <Lik>Home</Lik>
          <Lik>Experience</Lik>
          <Lik>Projects</Lik>
          <Lik>Resume</Lik>
          <Lik>About Me</Lik>
        </div>
      </Div>
      <DivM>
      <div className=" d-flex justify-content-between">
      <Logo>Gaurav Joshi</Logo>
      <i class="bi bi-filter" style={{fontSize:"40px",color:"white",marginRight:"20px"}}></i>
      </div>
      </DivM>
    </div>
  );
}

export default Navbar;
