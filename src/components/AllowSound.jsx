import React, {useState} from "react"
import { Howler } from "howler"
import styled from "styled-components";

const AllowContainer = styled.div`
position:fixed;
top:0;
left:0;
bottom:0;
right:0;
background-color:#0005;
display:flex;
justify-content:center;
align-items:center;

`

function AllowSound(){
  const howlContext = new AudioContext;

  return(
    <AllowContainer className="allow">
      <div>
        <button onClick={()=>{
          howlContext.resume() 
          document.querySelector('.allow').style.display = 'none'
        }}>allow</button>
      </div>
    </AllowContainer>
    )
}

export default AllowSound
