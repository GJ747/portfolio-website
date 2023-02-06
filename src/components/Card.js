import React from 'react'
import styled from 'styled-components'

function Card(props) {
    const Div = styled.div`
        border: solid #825507 2px;
        border-radius: 10px;
        height: 100px;
        width: 150px;
    `

    const Img = styled.img`
      width: 150px;
      height: 100px;
      padding: 10px;
    `
  return (
    <Div>
        <Img src={props.img}  />
    </Div>
  )
}

export default Card