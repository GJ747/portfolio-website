import React from "react";
import styled from "styled-components";

function ExproCard(props) {
  const Div = styled.div`
    background-color: white;
    border-radius: 10px;
    width: 100%;
    padding: 30px;
    margin-bottom: 20px;
  `;

  const P = styled.p`
    color: #9c833e;
    font-family: "Oswald", sans-serif;
    font-size: 17px;
  `;

  return <Div>
    <P>Title :- {props.title}</P>
    <P>Category :- {props.category}</P>
    <P>{props.discription}</P>
  </Div>;
}

export default ExproCard;
