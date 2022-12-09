import { Howler } from "howler";
import { useState } from "react";
  import { GlobalVolumeContainer } from "./style";

const GlobalVolume = () => {
  const [volume, setVolume] = useState(1);

  Howler.volume(volume);

  return (
    <GlobalVolumeContainer>
      <div className="input">
        <input
          type="range"
          step="0.01"
          min="0"
          max="1"
          defaultValue="1"
          onChange={(e) => {
            setVolume(e.target.value);
          }}
        />
      </div>
    </GlobalVolumeContainer>
  );
};

export default GlobalVolume;
