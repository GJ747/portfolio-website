import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Navbar() {
  const [hide, setHide] = useState(false);
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

  const hideHandler =()=>{
    setHide(!hide)
  }

  return (
    <div>
      <Div>
        <div className=" d-flex">
          <Logo to="/">Gaurav Joshi</Logo>
          <div style={{ marginLeft: "180px" }}></div>
          <Lik to="/">Home</Lik>
          <Lik to="/experience">Experience</Lik>
          <Lik to="/project">Projects</Lik>
          <Lik to="/resume">Resume</Lik>
          <Lik to="/about" >About Me</Lik>
        </div>
      </Div>
      <DivM>
        <div className=" d-flex justify-content-between">
          <Logo to="/">Gaurav Joshi</Logo>
          <i
            onClick={hideHandler}
            class="bi bi-filter"
            style={{ fontSize: "40px", color: "white", marginRight: "20px" }}
          ></i>
        </div>
       { hide && <div>
        <p style={{ textAlign: "center" }}>
          <Lik to="/experience">Experience</Lik>
        </p>
        <p style={{ textAlign: "center" }}>
          <Lik to="/project">Projects</Lik>
        </p>
        <p style={{ textAlign: "center" }}>
          <Lik to="/resume">Resume</Lik>
        </p>
        <p style={{ textAlign: "center" }}>
          <Lik to="/about">About Me</Lik>
        </p>
        </div>
}
      </DivM>
    </div>
  );
}

export default Navbar;
