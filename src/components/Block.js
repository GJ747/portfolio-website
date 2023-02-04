import React from "react";

function Block() {
  return (
    <div className="container mt-2">
      <div className="row">
        <div
          className="col-sm"
          style={{
            height: "400px",
            backgroundColor: "#757064",
          }}
        ></div>
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
            By Education i am an Electrical Engineer By Profession i am a Web Developer
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
            I love node js Ecosystem and i have build my carrer around it 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Block;
