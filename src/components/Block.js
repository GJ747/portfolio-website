import React from "react";

function Block() {
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-sm"
          style={{
            height: "400px",
            backgroundColor: "#757064",
            borderRadius: "10px",
            boxShadow: "1px 1px 3px 3px #696356",
          }}
        ></div>
        <div
          className="col-sm"
          style={{
            height: "400px",
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "1px 1px 3px 3px #c4baa3",
          }}
        >
          <p
            style={{
              textAlign: "center",
              fontFamily: "Lato, sans-serif",
              color: "#9c833e",
              fontSize: "30px",
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
        </div>
      </div>
    </div>
  );
}

export default Block;
