import React, { useState } from 'react';
import { FaveButton, Albums, FeaturedAlbum, Lyrics } from '../../components'

const Music = () => {
    const [ featuredYear, setFeaturedYear ] = useState();

    return (
        <div className='music-page'>
            <h1>Little Simz</h1>

            <section className='albums'>
                <Albums handleSelect={setFeaturedYear}/>
            </section>
            <section id='further-info'>
                <div className='songlist'>
                    { featuredYear && <FeaturedAlbum albumYear={featuredYear} /> }
                </div>
                {/* <div className='lyrics'>

                </div> */}
            </section>
        </div>
    )
}

export default Music;