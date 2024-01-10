import React from 'react'
import "./body.css";
import Header from '../header/Header';
import { useDataLayerValue } from '../../DataLayer';
import { DownloadDone, DownloadDoneOutlined, DownloadForOfflineOutlined, DownloadRounded, Favorite, FavoriteBorderOutlined, FavoriteOutlined, MoreHoriz, PlayCircleFilled } from '@mui/icons-material';
import Songrow from './Songrow';

function Body({ spotify }) {

  const [{ daily_mix }, dispatch] = useDataLayerValue()

  // Function to format milliseconds to 'mm:ss' format
  const formatDuration = (durationInMs) => {
    const minutes = Math.floor(durationInMs / 60000);
    const seconds = ((durationInMs % 60000) / 1000).toFixed(0);
    return `${minutes}:${(seconds < 10 ? '0' : '')}${seconds}`;
  };

  // Calculate total duration and total number of songs in the playlist
  const totalDuration = daily_mix?.tracks.items.reduce(
    (acc, item) => acc + item.track.duration_ms,
    0
  );
  const totalSongs = daily_mix?.tracks.items.length;

  return (
    <div className='body'>
      <Header spotify={spotify} />
      <div className='bodyinfo'>
        <img src={daily_mix?.images[0].url} alt='' />
        <div className='infotext'>
          <strong>PLAYLIST</strong>
          <h1>{daily_mix?.name}</h1>
          <p>{daily_mix?.description}</p>
          <p>Made for You • {totalSongs} songs, {formatDuration(totalDuration)}</p>
        </div>
      </div>
      <div className='body_songs'>
        <div className='bicon'>
          <PlayCircleFilled className='bshuffle' />
          <FavoriteBorderOutlined className='i' fontSize='large' />
          <DownloadDone className='i' />
          <MoreHoriz className='i' />
        </div>
        {daily_mix?.tracks.items.map((item, index) => (
          <Songrow key={item.track.id} track={item.track} order={index + 1} />
        ))}
      </div>
    </div>
  );
}

export default Body;