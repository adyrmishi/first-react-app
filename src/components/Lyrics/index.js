import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Lyrics = ({ songTitle }) => {
    const [ lyrics, setLyrics ] = useState();
    const [ statusMessage, setStatusMessage ] = useState('Loading');
    useEffect(() => {
        const fetchLyrics = async() => {
            setStatusMessage('Loading')
            try {
                let { data } = await axios.get(`https://api.lyrics.ovh/v1/little%20simz/${songTitle}`);
                setLyrics(data.lyrics);
                setStatusMessage('');
                console.log(lyrics)
            } catch (err) {
                console.warn(err);
                setStatusMessage(`Oops there\'s been an issue! ${err.message}`);
            }
        }
        fetchLyrics()
    }, [songTitle])

    return (
    <>
        {
            <p>{lyrics}</p>
        }
    </>
    )
}

export default Lyrics;