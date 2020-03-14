import React from "react";
import "./Counter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserShield } from "@fortawesome/free-solid-svg-icons";
import User from "../User/User";

const Counter = props => {
  const counter = props.counter;

  console.log(counter);
  let totalSalary = 0;

  for (let i = 0; i < counter.length; i++) {
    const profile = counter[i];
    totalSalary = totalSalary + Number(profile.Salary);
  }

  return (
    <div>
      <div className="container">
        <h1>
          <FontAwesomeIcon icon={faUserShield} /> Users
        </h1>
        <p>Total Request : {counter.length}</p>
        <p>Total Salary : {totalSalary}</p>

        {counter.map(profile => (
          <User profile={profile}></User>
        ))}
      </div>
    </div>
  );
};

export default Counter;
