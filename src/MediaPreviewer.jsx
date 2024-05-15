import { useState } from 'react';
import { connect } from 'react-redux';
import { timelineAddAction } from './actions';
import ReactPlayer from 'react-player';
import { useDropzone } from 'react-dropzone';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { previewMediaAction } from './actions';



const MediaPreviewer = ({mediaType, timelineData, timelineAddAction}) => {

    const mediaUrl = useSelector(state => state.mediaPreview.mediaUrl);

    // useState
    const [durationTimelineData, setDurationTimelineData] = useState(null);


    // For handling video/audio dropbox
    const dispatch = useDispatch();

    const onDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        const url = URL.createObjectURL(file);
        dispatch(previewMediaAction(url));
    };

    const acceptType = (mediaType == 'video' ? 'video/*' : 'audio/*');
    const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: acceptType });


    // Get duration of imported video/audio
    const getDuration = (duration) => {
        const durationInSeconds = duration;
        setDurationTimelineData(durationInSeconds);
    }


    // Add video/audio data to the timelineEditor
    const handleTimelineAddData = () => {
        const id = timelineData.length.toString()

        const newTimelineData = {
            id: id,
            actions: [
                {
                    id: id,
                    start: 0,
                    end: durationTimelineData,
                    effectId: id,
                }
            ],
        };
        timelineAddAction(newTimelineData);
    };

    

    return (
        <div>
            <div {...getRootProps()} style={{ border: '1px dashed #ccc', padding: '20px', textAlign: 'center' }}>
                <input {...getInputProps()} />
                <p>Drag & drop a {mediaType == 'video' ? 'video' : 'audio'} file here, or click to select one</p>
            </div>
            {mediaUrl && (
                (mediaType == 'video' ? <ReactPlayer url={mediaUrl} controls={true} width="100%" height="auto" onDuration={getDuration}/> : <ReactPlayer url={mediaUrl} controls={true} width="100%" height="50px" onDuration={getDuration}/>)
            )}

            {durationTimelineData != null && (
            <div>
                <button onClick={handleTimelineAddData}>Add Timeline Data</button>
            </div>
            )}

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