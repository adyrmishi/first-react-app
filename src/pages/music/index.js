import React, { useState } from 'react';
import { Albums, FeaturedAlbum, Lyrics } from '../../components'

const Music = () => {
    const [ featuredYear, setFeaturedYear ] = useState();
    const [ featuredSong, setFeaturedSong ] = useState();

    return (
        <div className='music-page'>
            <h1>Little Simz</h1>

            <section className='albums'>
                <Albums handleSelect={setFeaturedYear}/>
            </section>
            <section id='further-info'>
                <div className='songlist'>
                    { featuredYear && <FeaturedAlbum handleLyrics={setFeaturedSong} albumYear={featuredYear} /> }
                </div>
                <div className='lyrics'>
                    { featuredSong && <Lyrics songTitle={featuredSong} />}
                </div>
            </section>
        </div>
    )
}

export default Music;