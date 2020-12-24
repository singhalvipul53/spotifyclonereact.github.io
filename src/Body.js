import React from 'react'
import './Body.css'
import { useDataLayerValue } from './DataLayer'
import Header from './Header'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow';

const Body = ({spotify}) => {

    const [{discover_weekly},dispatch]=useDataLayerValue()

    const playPlaylist = (id) => {
        spotify
          .play({
            context_uri: `spotify:playlist:37i9dQZEVXcS0ZT39o57rr`,
          })
          .then((res) => {
            spotify.getMyCurrentPlayingTrack().then((r) => {
              dispatch({
                type: "SET_ITEM",
                item: r.item,
              });
              dispatch({
                type: "SET_PLAYING",
                playing: true,
              });
            });
         
          });
      };
    
      const playSong = (id) => {
        spotify
          .play({
            uris: [`spotify:track:${id}`],
          })
          .then((res) => {
            spotify.getMyCurrentPlayingTrack().then((r) => {
              dispatch({
                type: "SET_ITEM",
                item: r.item,
              });
              dispatch({
                type: "SET_PLAYING",
                playing: true,
              });
            });
          });
      };
    return (
        <div className='body'>
            <Header spotify={spotify}/>
            {/* <h1>I am the Body</h1> */}
            <div className='body_info'>
                <img src={discover_weekly?.images[0].url} alt=''/>
                <div className='body_infotext'>
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>
            <div className='body_songs'>
                <div className='body_icons'>
                    <PlayCircleFilledIcon 
                    onClick={playPlaylist} className='body_shuffle'/>
                    <FavoriteIcon fontSize='large'/>
                    <MoreHorizIcon/>
                </div>
                {/* List of songs */}
                {discover_weekly?.tracks.items.map(item=>(
                    <SongRow playSong={playSong} track={item.track}/>
                ))}
            </div>
        </div>
    )
}

export default Body
