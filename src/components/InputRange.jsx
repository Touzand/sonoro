import { Howl } from "howler";
import { useState, useEffect } from "react";
import "../index.css";
import styled from "styled-components";

const InputRangeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  padding: 6px 4px;
  gap: 1rem;
  margin-bottom: 2rem;

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
    background-color: var(--second-color);
  }
  .input input[type="range"] {
    -webkit-appearance: none !important;
    width: 200px;
    height: 2px;
    background: linear-gradient(
      to right,
      var(--second-color) 10%,
      var(--primal-color) 10% 90%,
      var(--second-color) 90% 100%
    );
    border: none;
    outline: none;
  }

  .input input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none !important;
    width: 40px;
    height: 40px;
    background: var(--primal-color);
    border-radius: 0.25rem;
    cursor: pointer;
  }

  .input input[type="range"]::-webkit-slider-thumb:hover {
    background: var(--primal-color);
    cursor: grab;
  }

  .input input[type="range"]::-webkit-slider-thumb:active {
    background: var(--primal-color);
    cursor: grabbing;
  }

  .input-general {
    font-weight: bold;
    color: var(--second-color);

    span {
      margin: 0;
    }
  }

  .info-content {
    height: 1.5rem;
    display: flex;
    justify-content: left;
    gap: 0.5rem;
  }

  .on-sound {
    width: 19px;
  }
`;

function InputRange({ itemName }) {
  const [volume, setVolume] = useState(false);
  const [vol, setVol] = useState(false);
  const baseUrl = `http://localhost:3000/sonoro/`;

  let song;

  useEffect(() => {
    if (volume) {
      song = new Howl({
        src: `${baseUrl}tracks/${itemName}.mp3`,
        loop: true,
        volume: 0,
        onvolume: () => {
          console.log(song.volume());
          if (song.volume() > 0) {
            setVolume(true);
          } else {
            setVolume(false);
          }
        },
        autoplay: true,
      });
    }
  }, [volume]);

  const handdleVolumen = (e) => {
    setVolume(true);
    if (song) {
      song.volume(e.target.value);
    }
  };

  return (
    <InputRangeContainer>
      <img src={`${baseUrl}icons/${itemName}.svg`}></img>
      <div className="input-general">
        <div className="info-content">
          <span>{itemName} </span>
          <span>
            {!volume ? (
              ``
            ) : (
              <img src={`${baseUrl}on-sound`} className="on-sound" />
            )}
          </span>
        </div>
        <div className="input">
          <input
            id={`id-${itemName}`}
            type="range"
            step="0.01"
            min="0"
            max="1"
            defaultValue="0"
            onChange={handdleVolumen}
          />
        </div>
      </div>
    </InputRangeContainer>
  );
}

export default InputRange;
