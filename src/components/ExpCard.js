import React from "react";
import styled from "styled-components";

function ExpCard(props) {
  const Div = styled.div`
    background-color: white;
    border-radius: 10px;
    width: 100%;
    padding: 30px;
  `;

  const P = styled.p`
    color: #9c833e;
    font-family: "Oswald", sans-serif;
    font-size: 17px;
  `;

  return <Div>
    <P>Job Title :- {props.title}</P>
    <P>Company :- {props.company}</P>
    <P>Duration :- {props.duration}</P>
    <P>{props.discription}</P>
  </Div>;
}

export default ExpCard;
