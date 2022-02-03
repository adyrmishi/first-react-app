import React, { useState, useEffect } from 'react';
import { Albums, FeaturedAlbum, Lyrics } from '../../components'

const Music = () => {
    const [ featuredYear, setFeaturedYear ] = useState();
    const [ featuredSong, setFeaturedSong ] = useState();

    if (featuredYear) {
        window.scrollTo({
            top: 1270,
            behavior: 'smooth',
          })}

    if (!featuredYear) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })}
    
    if (featuredYear == '2019') {
        document.body.style.backgroundColor = 'lightgrey';
    } else if (featuredYear == '2021') {
        document.body.style.backgroundColor = '#f4c430';
    } else {
        document.body.style.backgroundColor = '#cfc6bf';
    }

    useEffect(() => {
        setFeaturedSong()
    }, [featuredYear])

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