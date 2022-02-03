import React, { useState } from 'react';
import { FaveButton } from '..';

const FeaturedAlbum = ({ albumYear, handleLyrics }) => {
    const [ albumsData, setAlbumsData ] = useState([
        {year: 2021, songlist: ['Introvert', 'Woman (Ft. Cleo Sol)', 'Two Worlds Apart']},
        {year: 2019, songlist: ['Offence', 'Boss', 'Selfish']},
        {year: 2017, songlist: ['LMPD', 'Cheshire\'s Interlude: Welcome To Wonderland', 'Doorways + Trust Issues' ]}
    ])
        let album = albumsData.filter(albumData => albumData.year == albumYear)[0]
        let songlist = album.songlist
        
    return (
    <div id='feature'>
        <ul>
            {
                songlist.map(song => (
                    <li className='songname' key={song} onClick={() => handleLyrics(song)}><FaveButton />  {song}</li>
                ))
            }
        </ul>
    </div>
    )
}

export default FeaturedAlbum;