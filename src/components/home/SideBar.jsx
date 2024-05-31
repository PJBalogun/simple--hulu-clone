import React from 'react';
import "./Sidebar.css";
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
        
        <SidebarOption title='Home' Icon={HomeIcon}/>
        <SidebarOption title='Search' Icon={SearchIcon}/>
        <SidebarOption title='Your Library' Icon={LibraryMusicIcon}/>
        <hr />
        <strong className="sidebar__title">PLAYLISTS</strong>

        {playlists?.items?.map((playlist) => (
          <SidebarOption title={playlist.name} />
        ))}
      </div>

      </div>
      )
}

export default SideBar;