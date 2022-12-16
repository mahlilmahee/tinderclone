import axios from "axios";
import React from "react";
import { useState } from "react";

const ChatInput = ({
  userData,
  clickedUser,
  getUserMessages,
  getClickedUsersMessages,
}) => {
  const userId = userData?.user_id;
  const clickedUserId = clickedUser?.user_id;
  const [msg, setMsg] = useState([]);

  const sendMessage = async () => {
    const messages = {
      timestamp: new Date().toISOString(),
      from_userid: userId,
      to_userid: clickedUserId,
      messages: msg,
    };

    try {
      await axios.post("http://localhost:8000/message", { messages });
      getUserMessages();
      getClickedUsersMessages(), setMsg("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="chat-input">
      <textarea
        value={msg}
        onChange={(e) => {
          setMsg(e.target.value);
        }}
        placeholder="type the messages you want to share"
      ></textarea>
      <button className="secondary-button" onClick={sendMessage}>
        submit
      </button>
    </div>
  );
};

export default ChatInput;
