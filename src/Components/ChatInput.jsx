import React from 'react';
import { useState } from 'react';

const ChatInput = () => {
    const [msg,setMsg]=useState([])
    return (
        <div className="chat-input">
            <textarea value={msg} onClick={(e)=>{setMsg(e.target.value)}}></textarea>
            <button className='secondary-button'>submit</button>
        </div>
    );
};

export default ChatInput;