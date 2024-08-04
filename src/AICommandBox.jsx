import { useState } from'react';
import axios from 'axios';
import './css/AICommandBox.css';

const AICommandBox = () => {
    
    const [messages, setMessages] = useState([]);
    const [prompt, setPrompt] = useState('');

    const handleInputChange = (e) => {
        setPrompt(e.target.value);
    };

    const getResponse = async (e) => {
        e.preventDefault();
        if (prompt.trim() === '') {
            return;
        }
        setMessages((prevMessages) => [...prevMessages, { text: prompt, sender: 'user' }]);
        setPrompt('');

        try{
            const response = await axios.post('http://localhost:5001/AI_Command_Box', {prompt});
            setMessages((prevMessages) => [...prevMessages, { text: response.data, sender: 'other' }]);
        } catch (error) {
            console.error('error in getting AI response')
        }
    };

    return (
        <div className='commandBoxContainer'>
            <div className="messageBox">
                {messages.map((message, index) => (
                <div key={index} className={message.sender === 'user' ? 'user-message' : 'other-message'}>
                    {message.text}
                </div>
                ))}
            </div>
            <form className='promptForm' onSubmit={getResponse}>
                <input id='prompt' className='promptInput' type="text" value={prompt} onChange={handleInputChange} placeholder='Enter your AI command ... ✨'/>
                <button className='sendPromptButton' type="submit">Send</button>
            </form>
        </div>
    );
};

export default AICommandBox;