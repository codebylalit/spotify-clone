import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import { useDataLayerValue } from '../../DataLayer';

function Header() {
    const [{user},dispatch] = useDataLayerValue();

  return <div className='header'>
    <div className='HL'>
        <SearchIcon/>
        <input placeholder='Search for Artists, Songs,' type='text' ></input>
    </div>
    <div className='HR'>
        <Avatar src={user?.images[0]?.url} alt={user}/>
        <h4>{user?.display_name}</h4>
    </div>
    </div>
  
}

export default Header