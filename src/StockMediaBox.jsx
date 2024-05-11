import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';
import './StockMediaBox.css';

const StockMediaBox = ({ onVideoDoubleClick }) => {
    
    const [imageQuery, setImageQuery] = useState('');
    const [videoQuery, setVideoQuery] = useState('');
    const [images, setImages] = useState([]);
    const [videos, setVideos] = useState([]);

    const apiKey = import.meta.env.VITE_PEXELS_API_KEY;

    const fetchImages = async () => {
        try {
            const response = await axios.get(`https://api.pexels.com/v1/search?query=${imageQuery}&per_page=10`, {
                headers: {
                    Authorization: apiKey,
                },
            });
            setImages(response.data.photos);
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    };

    const fetchVideos = async () => {
        try {
            const response = await axios.get(`https://api.pexels.com/v1/videos/search?query=${videoQuery}&per_page=10`, {
                headers: {
                    Authorization: apiKey,
                },
            });
            setVideos(response.data.videos);
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
    };

    return (
        <div class="MediaBox">
            <input type="text" value={imageQuery} onChange={(e) => setImageQuery(e.target.value)} />
            <button class="button-4" onClick={fetchImages}>Search Images</button>
            <div className='imageGrid'>
                {images.map((image) => (
                    <img key={image.id} src={image.src.medium} alt={image.photographer} className='stockImages' />
                ))}
            </div>

            <br />

            <input type="text" value={videoQuery} onChange={(e) => setVideoQuery(e.target.value)} />
            <button class="button-4" onClick={fetchVideos}>Search Videos</button>
            <div className='videoGrid'>
                {videos.map((video) => (
                    <ReactPlayer
                        key={video.id}
                        url={video.video_files[0].link}
                        controls={true}
                        className='stockVideos'
                    />
                ))}
            </div>
        </div>
    );
};

export default StockMediaBox;