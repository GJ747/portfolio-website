import React from 'react'
import styled from 'styled-components'
import img from '../images/Node.js_logo.svg'


function Card() {
    const Div = styled.div`
        border: solid #825507 2px;
        border-radius: 10px;
        height: 170px;
        width: 170px;
    `
  return (
    <Div>
        <img src={img} width="130" style={{padding:"50px"}}/>
    </Div>
  )
}

export default Card