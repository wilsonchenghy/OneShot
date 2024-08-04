import { useState } from'react';
import axios from 'axios';

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
        <div>
        <div className="commentbox">
            {messages.map((message, index) => (
            <div key={index} style={{ padding: '5px', textAlign: message.sender === 'user' ? 'right' : 'left' }}>
                {message.text}
            </div>
            ))}
        </div>
        <form onSubmit={getResponse}>
            <input type="text" value={prompt} onChange={handleInputChange} />
            <button type="submit">Send</button>
        </form>
        </div>
    );
};

export default AICommandBox;