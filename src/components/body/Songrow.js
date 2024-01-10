import React from 'react';
import './Songrow.css';

function Songrow({ track = "test", order }) {
  const formatDuration = (durationInMs) => {
    const minutes = Math.floor(durationInMs / 60000);
    const seconds = ((durationInMs % 60000) / 1000).toFixed(0);
    return `${minutes}:${(seconds < 10 ? '0' : '')}${seconds}`;
  };

  return (
    <div className='srow'>
      <p className='sorder'>{order}</p>
      <img className='salbum' src={track.album.images[0].url} alt='' />
      <div className='sinfo'>
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")}
          {track.album.name}
        </p>
      </div>
      <p className='sduration'>{formatDuration(track.duration_ms)}</p>
    </div>
  );
}

export default Songrow;
