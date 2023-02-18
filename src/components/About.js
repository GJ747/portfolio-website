import React from "react";
import "../App.css";
import Navbar from "./Navbar";
import styled from "styled-components";
import imgAbout from "../images/gjAbout.jpg";

function About() {
  const Container = styled.div`
    background-color: white;
    width: 600px;
    margin: auto;
    margintop: 20px;
    padding-top: 80px;
    border-radius: 30px;
    padding-bottom: 50px;
    @media (max-width: 600px) {
      width: 340px;
    }
  `;

  const InnerContainer = styled.div`
    background-color: #b8ad8d;
    width: 95%;
    margin: auto;
    border-top-right-radius: 280px;
    border-top-left-radius: 280px;
    border-bottom-right-radius: 80px;
    border-bottom-left-radius: 80px;
  `;

  const Img = styled.img`
    position: relative;
    top: -60px;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: solid 5px #b8ad8d;
  `;
  return (
    <div>
      <Navbar />
      <Container>
        <InnerContainer>
          <Img src={imgAbout} />
          <h3
            style={{ textAlign: "center", color: "white",marginTop: "-30px" }}
          >
            Hello
          </h3>
          <p
            style={{ textAlign: "center", color: "white", marginBottom: "0px" }}
          >
            My Name is Gaurav Joshi, i am living in Bhilwara, Rajasthan
          </p>
          <p
            className="mx-3"
            style={{ textAlign: "center", color: "white", marginBottom: "0px" }}
          >
            i have done my schooling in 2012 and Electrical engineering in 2016
            from ITM Bhilwara. after the engineering i began my career in
            textile industry as trainee engineer then i moved in power
            tranmision indusrty as project engineer, i have worked 3 years in
            this field
          </p>
          <h4
            style={{ textAlign: "center", color: "white", marginTop: "20px" }}
          >
            {" "}
            Change in Career
          </h4>
          <p
            style={{
              textAlign: "center",
              color: "white",
              paddingBottom: "80px",
            }}
          >
            In march 2020 we have faced Corona pendemic and we have to stay
            inside our home for more than 3 months, in this period of time i
            dont have to do anything so i have start learning coding and buy
            some courses on udemy. when i found my self love in programming i
            decided to choose web developer as career, now its been about one
            and half year i am working as professional web developer
          </p>
        </InnerContainer>
      </Container>
    </div>
  );
}

export default About;
