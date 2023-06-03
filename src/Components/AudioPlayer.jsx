import React, { useState } from 'react';

const AudioPlayer = ({ mediaUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <div className="audio-player">
      <audio controls autoPlay={isPlaying}>
        <source src={mediaUrl} type="audio/mpeg" />
      </audio>
      <div className="custom-controls">
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
      </div>
    </div>
  );
};

export default AudioPlayer;
