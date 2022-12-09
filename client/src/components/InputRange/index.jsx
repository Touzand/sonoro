import { Howl } from "howler";
import { useState, useEffect } from "react";
import { InputRangeContainer } from "./style";

function InputRange({ itemName }) {
  const [volume, setVolume] = useState(false);
  const baseUrl = `http://localhost:3000/sonoro/`;

  let song;

  useEffect(() => {
    if (volume) {
      song = new Howl({
        src: `${baseUrl}tracks/${itemName}.mp3`,
        loop: true,
        volume: 0,
        onvolume: () => {
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
              <img src={`${baseUrl}on-sound.svg`} className="on-sound" />
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
