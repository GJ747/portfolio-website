import React from "react";
import Card from "./Card";
import NodeJs from "../images/Node.js_logo.svg";
import Express from "../images/express.png";
import Bootstrap from "../images/bootstrap_plain_wordmark_logo_icon_146620.png";
import Figma from "../images/figma.webp";
import MongoDb from "../images/MongoDB_Logo.svg.png";
import Mysql from "../images/MySQL-Logo.png";
import Postman from "../images/postman.png";
import Python from "../images/python.webp";
import ReactLogo from "../images/React-Logo-1-300x289.png";
import ReactNative from "../images/reactNative.png";
import Ubuntu from "../images/Ubuntu-Emblem.png";
import Jquery from "../images/jquery-ar21.png"
import Ec2 from "../images/ec2.png"

function Block2() {
  const iKnow = [
    NodeJs,
    Express,
    ReactLogo,
    MongoDb,
    Postman,
    Bootstrap,
    Ubuntu,
    Jquery,
  ];

  const learning = [
    Python,Mysql,Figma,ReactNative,Ec2
  ]
  return (
    <div className="container mt-3 px-0 pb-4">
      <p style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}>
        Technologies with hands of Experience
      </p>
      <div
        style={{
          width: "100%",
          backgroundColor: "white",
          padding: "20px",
        }}
      >
        <div className="row">
          {iKnow.map((x) => (
            <div className="col-sm-3 d-flex justify-content-center" style={{marginBottom : "20px"}}>
              <Card img={x} />
            </div>
          ))}
        </div>
      </div>
      <p style={{ color: "white", fontSize: "20px", fontWeight: "bold",marginTop:"10px" }}>
        Technologies i am learning
      </p>
      <div
        style={{
          width: "100%",
          backgroundColor: "white",
          padding: "20px",
        }}
      >
        <div className="row">
          {learning.map((x) => (
            <div className="col-sm-3 d-flex justify-content-center" style={{marginBottom : "20px"}}>
              <Card img={x} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Block2;
