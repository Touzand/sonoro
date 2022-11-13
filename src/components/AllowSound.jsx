import React, {useEffect, useState} from "react"
import { Howler } from "howler"
import styled from "styled-components";
import '../index.css'

const AllowContainer = styled.div`
position:fixed;
width:100vw;
height:100vh;
top:0;
left:100%;
bottom:0;
right:0;
background-color:var(--second-color);
display:flex;
justify-content:center;
align-items:center;
color:var(--primal-color);
display:flex;
flex-direction:column;
cursor:pointer;

img{
width:100px;
}

*{
pointer-events:none;
}
`

function AllowSound(){
  const howlContext = new AudioContext;

  useEffect(()=>{
    setTimeout(()=>{
      document.querySelector('.allow').classList.add('enable')
    },1000)
  },[])

  return(
    <AllowContainer className="allow" onClick={(e)=>{
      e.target.classList.add('desable')
    setTimeout(()=>{
      document.querySelector('.allow').style.display = 'none'
    },1500)
    }}>
      <div>
        <h4>Best experienced with headphones!</h4>
      </div>
      <div>
        <img src='../../public/headphone.svg'/>
      </div>
      <div>
        <h4>Click / Tap to dismiss this message</h4>
      </div>
    </AllowContainer>
    )
}

export default AllowSound
