import InputRange from "../InputRange";
import GlobalVolume from "../GlobalVolume";
import { TrackContainer, Logo } from "./style";

const name = [
  "rain",
  "thunder",
  "coffee-shop",
  "lofi-beats",
  "waves",
  "campfire",
  "sbowl",
  "wind",
  "river",
  "forest",
  "birds",
  "crickets",
  "frogs",
  "train-station",
  "highway",
  "office",
  "dentist",
  "playground",
  "casino",
  "carnival",
  "marching-band",
  "church-bells",
  "lawnmower",
  "couple-arguing",
  "barn-animals",
  "construction",
  "crime-scene",
  "dungeon",
  "fireworks",
  "beehive",
  "alien-ship",
  "volcano",
  "zombies",
  "medieval-battle",
  "nuclear-siren",
];

function Main() {
  return (
    <div>
      <Logo>
        <a href="https://github.com/Touzand/sonoro" target="_blank">
          <img src="../../public/favicon.svg" />
        </a>
      </Logo>
      <GlobalVolume />
      <TrackContainer>
        {name.map((item, index) => (
          <InputRange itemName={item} key={index} />
        ))}
      </TrackContainer>
    </div>
  );
}

export default Main;
