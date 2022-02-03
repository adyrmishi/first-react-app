import React, { useState, useRef, useEffect } from 'react';
import { Albums, FeaturedAlbum, Lyrics } from '../../components'

const Music = () => {
    const [ featuredYear, setFeaturedYear ] = useState();
    const [ featuredSong, setFeaturedSong ] = useState();

    if (featuredYear) {
        songlist = useRef()
    }
    if (featuredSong) {
        lyric = useRef();
    }

    // useEffect(() => {
    //     songlist.current.scrollIntoView({behaviour: 'smooth'})
    // }, [featuredYear])

    // useEffect(() => {
    //     lyric.current.scrollIntoView({behaviour: 'smooth'})
    // }, [featuredSong])

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
                <div ref={songlist} className='songlist'>
                    { featuredYear && <FeaturedAlbum handleLyrics={setFeaturedSong} albumYear={featuredYear} /> }
                </div>
                <div ref={lyric} className='lyrics'>
                    { featuredSong && <Lyrics songTitle={featuredSong} />}
                </div>
            </section>
        </div>
    )
}

export default Music;