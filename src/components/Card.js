import React from 'react'
import styled from 'styled-components'

function Card(props) {
    const Div = styled.div`
        border: solid #825507 2px;
        border-radius: 10px;
        height: 160px;
        width: 250px;
    `

    const Img = styled.img`
      width: 240px;
      height: 140px;
      padding: 15px;
    `
  return (
    <Div>
        <Img src={props.img}  />
    </Div>
  )
}

export default Card