import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
const ChatHeader = ({ userData }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const navigate = useNavigate();
  const logout = () => {
    removeCookie("email", cookies.email);
    removeCookie("userId", cookies.userId);
    removeCookie("token", cookies.token);
    location.reload();
    navigate("/");
  };
  return (
    <div className="chat-header-container">
      <div className="profile">
        <div className="profile-image">
          <img src={userData?.url} alt="profile picture" />
        </div>

        <h3>{userData?.first_name}</h3>
      </div>

      <button className="log-out-icon" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default ChatHeader;
