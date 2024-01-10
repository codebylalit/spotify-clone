import React from 'react'
import "./sidebar.css"
import Sidebaroption from './Sidebaroption';
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SearchIcon from '@mui/icons-material/Search';
import { useDataLayerValue } from '../../DataLayer';

function Sidebar() {
    const[{playlists},dispatch]=useDataLayerValue();

  return (
    <div className='sidebar'>
        <img className='sidebar_logo'
        src='https://i.pinimg.com/originals/11/da/ef/11daefa7555a23abe899dea9bfb81ea8.jpg'
        />
        <Sidebaroption Icon={HomeIcon} title="Home" />
        <Sidebaroption Icon={SearchIcon} title="Search" />
        <Sidebaroption Icon={LibraryMusicIcon} title="Your Library" />
        <br/>
        <strong className='sidebar_title'>PLAYLISTS</strong>
        <hr/>
        {playlists?.items?.map((playlist) => (
                <Sidebaroption key={playlist.id} title={playlist.name}/>
            ))}
    </div>
  )
}

export default Sidebar