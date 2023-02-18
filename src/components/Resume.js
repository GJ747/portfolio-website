import React from 'react'
import Navbar from './Navbar'
import imgRemuse from "../images/resume1.jpg"
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Resume() {
    const Img = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    @media (max-width: 600px){
        width: 350px;
    }
    `
  return (
    <div>
        <Navbar/>
        <div style={{width: "100%",textAlign:"center"}}>
        <Link className='btn btn-secondary' to="/resume1.pdf" target="_blank" download>Download Resume</Link>
        </div>
        <Img src={imgRemuse} />
    </div>
  )
}

export default Resume