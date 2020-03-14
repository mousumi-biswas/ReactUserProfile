import React, { useState } from "react";
import "./Users.css";
import Profile from "../Profile/Profile";
import fakeData from "../../fakeData";
import Counter from "../Counter/Counter";

const Users = props => {
  const first15 = fakeData;
  const [profile, setProfile] = useState(first15);

  const [counter, setCounter] = useState([]);

  const handleAddProfile = profile => {
    const newCounter = [...counter, profile];
    setCounter(newCounter);
  };

  return (
    <div className="head">
      <div className="left-bar">
        {profile.map(profile => (
          <Profile
            profile={profile}
            handleAddProfile={handleAddProfile}
          ></Profile>
        ))}
      </div>
      <div className="right-bar">
        <Counter counter={counter}></Counter>
      </div>
    </div>
  );
};

export default Users;
