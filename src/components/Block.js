import React from "react";
import MyImg from "../images/gj.jpg"
import MyImgM from '../images/gjm.png'
import styled from "styled-components";

function Block() {

  const Img = styled.img`
  width: 500px;
  margin-left: 70px;
  @media (max-width: 768px) {
   display: none;
  }
  `
  const ImgM = styled.img`
  display : none;
  @media (max-width: 768px) {
    display: block;
    width: 300px;
    padding-top: 60px;
    margin-left: 10px; 
  }
  `

  return (
    <div className="container mt-2">
      <div className="row">
        <div
          className="col-sm"
          style={{
            height: "400px",
            backgroundColor: "#757064",
            padding:"20px"
          }}
        >
          <div style={{backgroundColor:"white"}}>
          <Img src={MyImg} />
          <ImgM src={MyImgM}/>
          </div>
        </div>
        <div
          className="col-sm"
          style={{
            height: "400px",
            backgroundColor: "white",
          }}
        >
          <p
            style={{
              textAlign: "center",
              fontFamily: "Lato, sans-serif",
              color: "#9c833e",
              fontSize: "30px",
              marginTop:"80px"
            }}
          >
            My name is Gaurav Joshi
          </p>
          <p
            style={{
              textAlign: "center",
              fontFamily: "Lato, sans-serif",
              color: "#9c833e",
            }}
          >
            I am a MERN Stack Developer
          </p>
          <p
            style={{
              textAlign: "center",
              fontFamily: "Lato, sans-serif",
              color: "#9c833e",
            }}
          >
            By Education i am an Electrical Engineer By Profession i am a MERN Developer
          </p>
          <p
            style={{
              textAlign: "center",
              fontFamily: "Lato, sans-serif",
              color: "#9c833e",
            }}
          >
            I am so passionate about coding and new cutting edge technologies
          </p>
          <p
            style={{
              textAlign: "center",
              fontFamily: "Lato, sans-serif",
              color: "#9c833e",
            }}
          >
            I love Javascript Ecosystem and i have build my carrer around it 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Block;
