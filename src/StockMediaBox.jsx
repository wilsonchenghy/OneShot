import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';
import './StockMediaBox.css';
import { useDispatch } from 'react-redux';
import { previewMediaAction } from './actions';

const StockMediaBox = () => {
    
    
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


    // Feature of double clicking on a video to add it to the previewer
    const dispatch = useDispatch();

    const addVideoToPreviewer = (e, mediaUrl) => {
        e.preventDefault();  // !!!!!!!!!!!!!! seems to not be working, CANNOT disable double clicking make videos full screen behaviour
        dispatch(previewMediaAction(mediaUrl));
    }


    return (
        <div className="MediaBox">
            <input className="inputbox" type="text" value={imageQuery} onChange={(e) => setImageQuery(e.target.value)} />
            <button className="button-4 search" onClick={fetchImages}>Search Images</button>
            <br />
            <br />
            <input className="inputbox search" type="text" value={videoQuery} onChange={(e) => setVideoQuery(e.target.value)} />
            <button className="button-4" onClick={fetchVideos}>Search Videos</button>
            <div className='imageGrid'>
                {images.map((image) => (
                    <img key={image.id} src={image.src.medium} alt={image.photographer} className='stockImages' />
                ))}
            </div>

            <div className='videoGrid'>
                {videos.map((video) => (
                    <ReactPlayer
                        key={video.id}
                        url={video.video_files[0].link}
                        controls={true}
                        className='stockVideos'
                        onDoubleClick={(e) => addVideoToPreviewer(e, video.video_files[0].link)}
                    />
                ))}
            </div>
        </div>
    );
};

export default StockMediaBox;