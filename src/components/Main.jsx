import React, {useState} from "react"
import InputRange from "./InputRange"
import styled from 'styled-components'

function Main(){
  const name = [
  'rain',
  'coffee-shop',
  'lofi-beats',
  'waves',
  'campfire',
  'wind',
  'forest',
  'train-station',
  'highway',
  'office',
  'dentist',
  'playground',
  'casino',
  'carnival',
  'marching-band',
  'church-bells',
  'lawnmower',
  'couple-arguing',
  'barn-animals',
  'construction',
  'crime-scene',
  'dungeon',
  'fireworks',
  'beehive',
  'alien-ship',
  'volcano',
  'zombies',
  'medieval-battle',
  'nuclear-siren',
  ] 

  const TrackContainer = styled.div`
  width:50%;
  margin:auto;
display:grid;
justify-content:center;
grid-template-columns: repeat(2,1fr);

>div:nth-child(2n){
margin-left:3rem;

  `
  const Logo = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height:250px;
  pointer-events:none;

  img{
  height:100px;
  }
  `

  return(
    <div>
      <Logo>
        <img src='../../public/favicon.svg'/>
      </Logo>
      <TrackContainer>
      {
        name.map(( item,index )=><InputRange itemName={item} key={index}/>)
      }
      </TrackContainer>
    </div>
    )
}

export default Main
