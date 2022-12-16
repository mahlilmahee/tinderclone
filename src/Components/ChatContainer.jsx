import React, { useState } from "react";
import ChatHeader from "./ChatHeader";
import MatchesDisplay from "./MatchesDisplay";
import ChatDisplay from "./ChatDisplay";
const ChatContainer = ({ userData }) => {
  const [clickedUser, setClickUser] = useState(null);
  return (
    <div className="chat-container">
      <ChatHeader userData={userData}></ChatHeader>
      <div>
        <button
          className="option"
          onClick={() => {
            setClickUser(null);
          }}
        >
          Matches
        </button>
        <button className="option" disabled={!clickedUser}>
          Chat
        </button>
      </div>
      {!clickedUser && (
        <MatchesDisplay
          matches={userData?.matches}
          setClickUser={setClickUser}
        ></MatchesDisplay>
      )}
      {clickedUser && (
        <ChatDisplay
          clickedUser={clickedUser}
          userData={userData}
        ></ChatDisplay>
      )}
    </div>
  );
};

export default ChatContainer;
