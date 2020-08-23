import React from 'react';
import './Sidebar.css';
import SidebarOption from './sidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from './DataLayer';

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();
  return (
    <div className='sidebar'>
      <img
        src='https://www.edigitalagency.com.au/wp-content/uploads/Spotify-Logo-png-RGB-White-750x225.png'
        alt=''
        className='sidebar_logo'
      />
      <SidebarOption title='Home' Icon={HomeIcon} />
      <SidebarOption title='Search' Icon={SearchIcon} />
      <SidebarOption title='Your Library' Icon={LibraryMusicIcon} />
      <br />
      <strong className='sidebar_title'>Playlists</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))}
      {/* <SidebarOption title='Hip Hop' />
      <SidebarOption title='Rock' />
      <SidebarOption title='Jazz' /> */}
    </div>
  );
}

export default Sidebar;
