import React from 'react';
import "./Footer.css";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import { Grid } from '@mui/material';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import Slider from '@mui/material/Slider';

function Footer() {
  return (
    <div className='Footer'>
      <div className='footer_L'>
        <img className='Falbumlogo' src='https://mdundo.com/media/playlist/29780_Kowzglz3_t.jpg' alt='Album Logo' />
        <div className='Fsonginfo'>
          <h4>Perfect</h4>
          <p>Ed Sheeran</p>
        </div>
      </div>

      <div className='footer_C'>
        <ShuffleIcon className='FG' />
        <SkipPreviousIcon className='FI' />
        <PlayCircleOutlineIcon fontSize='large' className='FI' />
        <SkipNextIcon className='FI' />
        <RepeatIcon className='FG' />
      </div>

      <div className='footer_R'>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
