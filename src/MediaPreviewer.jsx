import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { timelineAddAction } from './redux/actions';
import ReactPlayer from 'react-player';
import { useDropzone } from 'react-dropzone';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { previewMediaAction } from './redux/actions';



const MediaPreviewer = ({timelineData, timelineAddAction}) => {

    const mediaUrl = useSelector(state => state.mediaPreview.mediaUrl);
    const isLoading = useSelector(state => state.mediaPreview.isLoading);

    // useState
    const [durationTimelineData, setDurationTimelineData] = useState(null);
    const [mediaSrc, setMediaSrc] = useState(null);
    const [mediaType, setMediaType] = useState(null);


    // For handling video/audio dropbox
    const dispatch = useDispatch();

    const onDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        const url = URL.createObjectURL(file);
        setMediaSrc(url);
        const fileType = file.type.startsWith('video') ? 'video' : 'audio';
        setMediaType(fileType); 
        dispatch(previewMediaAction(url));
    };

    const acceptType = 'video/*, audio/*';
    const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: acceptType });


    // Get duration of imported video/audio
    const getDuration = (duration) => {
        const durationInSeconds = duration;
        setDurationTimelineData(durationInSeconds);
    }


    // Add video/audio data to the timelineEditor (use useEffect to automatically add the data once any video/audio is added to the previewer)
    const handleTimelineAddData = (mediaSrc, mediaType) => {
        const id = timelineData.length.toString()

        const newTimelineData = {
            id: id,
            actions: [
                {
                    id: id,
                    start: 0,
                    end: durationTimelineData,
                    effectId: mediaType === 'video' ? id : 'audioEffect',
                    data: {
                        src: mediaSrc,
                        name: mediaType === 'video' ? 'Video' + id : 'backgroundAudio' + id, 
                    },
                }
            ],
        };
        timelineAddAction(newTimelineData);
    };

    useEffect(() => {
        if (durationTimelineData != null) {
            handleTimelineAddData(mediaSrc, mediaType);
        }
    }, [durationTimelineData]);

    

    return (
        <div>
            <div {...getRootProps()} style={{ border: '2px dashed #ccc', padding: '22px', textAlign: 'center' }}>
                {isLoading ? (
                    <p>loading ... </p>
                ) : (
                    <div>
                        <input {...getInputProps()} />
                        <p>Drag & drop a video or audio file here, or click to select one</p>
                    </div>
                )}
            </div>
            {mediaUrl && (
                <ReactPlayer
                    url={mediaUrl}
                    controls={true}
                    width="100%"
                    height={mediaType === 'video' ? 'auto' : '50px'}
                    onDuration={getDuration}
                />
            )}          
            {/* <div id="player-ground-1"></div> */}  {/* Temporary */}
            <div id="video-previewer-element"></div>
        </div>
    )
}



// React Redux Stuff
const mapStateToProps = (state) => ({
    timelineData: state.timeline.timelineData,
});

const mapDispatchToProps = {
    timelineAddAction,
};



export default connect(mapStateToProps, mapDispatchToProps)(MediaPreviewer);