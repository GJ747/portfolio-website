import React from 'react'
import styled from 'styled-components'
import img from '../images/Node.js_logo.svg'


function Card(props) {
    const Div = styled.div`
        border: solid #825507 2px;
        border-radius: 10px;
        height: 170px;
        width: 170px;
    `

    const Img = styled.img`
      width: 170px;
      height: 170px;
      padding: 10px;
    `
  return (
    <Div>
        <Img src={img}  />
    </Div>
  )
}

export default Card