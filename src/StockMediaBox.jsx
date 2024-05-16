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

    const [visibleGrid, setVisibleGrid] = useState('none');

    const apiKey = import.meta.env.VITE_PEXELS_API_KEY;


    const handleButtonClick = () => {
        setVisibleGrid('imageGrid');  // First function call
        fetchImages(); // Second function call
    };
    const handleButtonClick2 = () => {
        setVisibleGrid('videoGrid');  // First function call
        fetchVideos(); // Second function call
    };


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
        <div>
            <div className="MediaBox">
            <input className="inputbox" type="text" value={imageQuery} onChange={(e) => setImageQuery(e.target.value)} />
            <button className="button-4 search" onClick={handleButtonClick} >Search Images</button>
            <br />
            <input className="inputbox search" type="text" value={videoQuery} onChange={(e) => setVideoQuery(e.target.value)} />
            <button className="button-4" onClick={handleButtonClick2}>Search Videos</button>
            <br />
            </div>

            <div className={visibleGrid === 'imageGrid' ? 'imageGrid' : 'hidden'}>
                {images.map((image) => (
                    <img key={image.id} src={image.src.medium} alt={image.photographer} className='stockImages' />
                ))}
            </div>
            <br />
            <div className={visibleGrid === 'videoGrid' ? 'videoGrid' : 'hidden'}>
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