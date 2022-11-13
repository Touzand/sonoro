import { Howler } from "howler";
import {useState} from "react";
import styled from "styled-components";

const GlobalVolumeContainer = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  height: 50px;
  padding: 6px 4px;
  gap: 1rem;
  margin-bottom: 2rem;
  margin:5rem;

  img {
    width: 60px;
    heihgt: auto;
  }

  .input {
    height: 40px;
    padding: 6px 4px;
    background: #fcfcfc;
    border-radius: 0.25rem;
    display: flex;
    align-items: center;
    background-color:transparent;
  }
  .input input[type="range"] {
    -webkit-appearance: none !important;
    width: 200px;
    height: 2px;
    background: linear-gradient(
      to right,
      var(--second-color) 10%,
      var(--second-color) 10% 90%,
      var(--second-color) 90% 100%
    );
    border: none;
    outline: none;
  }

  .input input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none !important;
    width: 40px;
    height: 40px;
    background: var(--second-color);
    border-radius: 0.25rem;
    cursor: pointer;
  }

  .input input[type="range"]::-webkit-slider-thumb:hover {
    background: var(--second-color);
    cursor: grab;
  }

  .input input[type="range"]::-webkit-slider-thumb:active {
    background: var(--second-color);
    cursor: grabbing;
  }

  .input-general {
    font-weight: bold;
    color: var(--second-color);
`;

const GlobalVolume = () => {
  const [volume,setVolume] = useState(1)

Howler.volume(volume)

  return (
    <GlobalVolumeContainer>
        <div className="input">
          <input
            type="range"
            step="0.01"
            min="0"
            max="1"
          defaultValue="1"
          onChange={(e)=>{
            setVolume(e.target.value)
          }}
          />
        </div>
    </GlobalVolumeContainer>
  );
};

export default GlobalVolume;
