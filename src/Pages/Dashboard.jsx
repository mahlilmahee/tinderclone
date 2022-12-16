import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import ChatContainer from "../Components/ChatContainer";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Dashboard = () => {
  const [userData, setUserData] = useState("");
  const [genderedUsers, setGenderedUsers] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [lastDirection, setLastDirection] = useState();
  const userId = cookies.userId;
  
  const callData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/user", {
        params: { userId },
      });
      setUserData(response.data);

    } catch (error) {
      console.log(error, "showing error from calling the users");
    }
  };

  const getGenderedUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8000/gendered-users", {
        params: { gender: userData.gender_interest },
      });
      setGenderedUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    callData();
  }, []);

  useEffect(() => {
    if (userData) {
      getGenderedUsers();
    }
  }, [userData]);

  const updateMatches = async (matchedUserId) => {
    try {
      await axios.put("http://localhost:8000/addmatch", {
        userId,
        matchedUserId,
      });
      callData();
    } catch (err) {
      console.log(err);
    }
  };

  const swiped = (direction, swipedUserId) => {
    if (direction === "right") {
      updateMatches(swipedUserId);
    }
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  const matchedUserIds = userData?.matches
    ?.map(({ user_id }) => user_id)
    .concat(userId);

  const filteredGenderedUsers = genderedUsers?.filter(
    (genderedUser) => !matchedUserIds.includes(genderedUsers.user_id)
  );

  return (
    <>
      {userData && (
        <div className="dashboard">
          <ChatContainer userData={userData}></ChatContainer>
          <div className="cardwidth">
            <div className="swiper-container">
              <div className="cardContainer">
                {genderedUsers &&
                  genderedUsers.map((genderedUser) => (
                    <TinderCard
                      className="swipe"
                      key={genderedUser.first_name}
                      onSwipe={(dir) => swiped(dir, genderedUser.user_id)}
                      onCardLeftScreen={() =>
                        outOfFrame(genderedUser.first_name)
                      }
                      flickOnSwipe="true"
                    >
                      <div
                        style={{
                          backgroundImage: "url(" + genderedUser?.url + ")",
                        }}
                        className="card"
                      >
                        <h3>{genderedUser.first_name}</h3>
                      </div>
                    </TinderCard>
                  ))}

                <div className="swipe-info">
                  {lastDirection ? (
                    <h2 className="infoText">You swiped {lastDirection}</h2>
                  ) : (
                    <h2 className="infoText" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
