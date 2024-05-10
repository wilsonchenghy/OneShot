import { useState } from 'react';
import UserTab from './UserTab';
import MediaPlayer from './MediaPlayer';
import TimelineEditor from './TimelineEditor';
import './MainPage.css'



function MainPage() {

  const [selectedOption, setSelectedOption] = useState('video');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  

  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px'}}>
      <p>OneShot 🚀💫</p>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: '20px', width: '90%'}}>
        <div style={{ flex: '1' }}>
          <select value={selectedOption} onChange={handleSelectChange}>
            <option value="video">Video</option>
            <option value="audio">Audio</option>
          </select>
          <UserTab />
        </div>
        <div style={{ flex: '2', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <MediaPlayer mediaType={selectedOption} />
          <TimelineEditor />
        </div>
      </div>
    </div>
  );
}



export default MainPage