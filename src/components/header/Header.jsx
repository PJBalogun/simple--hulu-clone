import React from 'react'
import "./Header.css";
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import { useSpotifyStateValue } from './../../store/SpotifyStateProvider';

function Header({ spotify }) {
    const [{ user }, dispatch] = useSpotifyStateValue();
    return (
        <div className="header">
         <div className="header__left">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />
      </div>
      <div className="header__right">
      <Avatar alt={user?.display_name} src={user?.images[0].url} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
            
    )
}

export default Header
