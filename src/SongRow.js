import React from 'react'
import './SongRow.css'

const SongRow = ({track,playSong}) => {
    return (
        <div className='songrow' onClick={()=>playSong(track.id)}>
            <img src={track.album.images[0].url} className='songrow_album' alt=''/>
            <div className='songrow_info'>
                <h1>{track.name}</h1>
                <p>
                    {track.artists.map((artist)=>artist.name).join(',')}
                    {track.album.name}
                </p>
            </div>
        </div>
    )
}

export default SongRow
