import React, { useState } from 'react';
import { FaveButton } from '..'

const Albums = ({ handleSelect }) => {
    const [albums, setAlbums ] = useState([
        {id: 'simbi', title: 'Sometimes I Might Be Introvert', year: 2021, albumCover: 'https://media.pitchfork.com/photos/60803e1ca9839ab376dedc3e/1:1/w_600/Little-Simz.jpg'},
        {id: 'ga', title: 'GREY Area', year: 2019, albumCover: 'https://media.pitchfork.com/photos/5c6dc3a7e6b62749928fd7e3/1:1/w_600/LittleSimz_GREYArea.jpg'},
        {id: 'siw', title: 'Stillness In Wonderland', year: 2017, albumCover: 'https://f4.bcbits.com/img/a0455026278_10.jpg'}
    ])

    return (
        <div className='albums'>
            {
                albums.map(album => (
                    <div id={album.id} className='album' key={album.year} onClick={() => handleSelect(album.year)}>
                        <img className='album-pic' src={album.albumCover} alt={album.title} width="300" height="300" ></img>
                        <p>{album.title}</p>
                        <p>{album.year}</p>
                        <FaveButton />
                    </div>
                ))
            }
        </div>
    )
}

export default Albums;