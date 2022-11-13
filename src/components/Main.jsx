import InputRange from "./InputRange"
import styled from 'styled-components'
import GlobalVolume from "./GlobalVolume"

  const name = [
  'rain',
  'thunder',
  'coffee-shop',
  'lofi-beats',
  'waves',
  'campfire',
  'sbowl',
  'wind',
  'river',
  'forest',
  'birds',
  'crickets',
  'frogs',
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
  max-width:700px;
  min-width:auto;
  margin:auto;
display:grid;
justify-content:center;
grid-template-columns: repeat(auto-fit,minmax(50%,1fr));

@media (max-width:620px){
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
}
  `
  const Logo = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  margin-top:3rem;

  img{
  height:100px;
  }
  `
function Main(){

  return(
    <div>
      <Logo>
        <a href='https://github.com/Touzand/sonoro' target='_blank'>
        <img src='../../public/favicon.svg'/>
        </a>
      </Logo>
      <GlobalVolume/>
      <TrackContainer>
      {
        name.map(( item,index )=><InputRange itemName={item} key={index}/>)
      }
      </TrackContainer>
    </div>
    )
}

export default Main
