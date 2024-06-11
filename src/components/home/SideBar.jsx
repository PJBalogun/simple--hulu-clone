import React from 'react';
import "./SideBar.css";
import SidebarOption from "./SideBarOption";
 import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useSpotifyStateValue } from '../../store/SpotifyStateProvider';

function SideBar() {
  const [{ playlists }, dispatch] = useSpotifyStateValue();
  return (
    <div className="sidebar">
      <div className="sidebar">
        <img
          className="sidebar__logo"
          src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
          alt=""
        />
        
        <SidebarOption title='Home' Icon={HomeIcon} key={1}/>
        <SidebarOption title='Search' Icon={SearchIcon} key={2}/>
        <SidebarOption title='Your Library' Icon={LibraryMusicIcon} key={3}/>
        <hr />
        <strong className="sidebar__title">PLAYLISTS</strong>

        {playlists?.items?.map((playlist,index) => (
          <SidebarOption title={playlist.name} key = {index}/>
        ))}
      </div>

      </div>
      )
}

export default SideBar;