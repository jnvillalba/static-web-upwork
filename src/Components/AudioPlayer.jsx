import React, { useState, useRef } from 'react';

const AudioPlayer = ({ url }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleAudio = () => {
    const audioElement = audioRef.current;
    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      style={{
        marginTop: '40px',
        width: '100%',
        height: '50px',
        backgroundColor: '#52307c',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',

      }}
      onClick={toggleAudio}
    >
      {isPlaying ? (
        <div
          style={{
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            border: '2px solid #ffffff',
            opacity: 0.5,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            style={{ width: '70%', height: '70%', fill: '#fff' }}
          >
            <path d="M14 19h4V5h-4v14zM6 5v14h4V5H6z" />
          </svg>
        </div>
      ) : (
        <div
          style={{
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            border: '2px solid #ffffff',
            opacity: 0.5,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            style={{ width: '70%', height: '70%', fill: '#fff' }}
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      )}

      <audio ref={audioRef} src={url} />
    </div>
  );
};

export default AudioPlayer;
