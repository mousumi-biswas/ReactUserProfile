import React from "react";
import "./User.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserSecret, faDollarSign } from "@fortawesome/free-solid-svg-icons";
const User = props => {
  const { name, img, Salary, email } = props.profile;
  return (
    <div className="right-side">
      <div className="image">
        <img src={img} alt="" />
      </div>
      <div className="name">
        <h3>{name}</h3>
        <p>
          <small>
            <FontAwesomeIcon icon={faUserSecret} /> <b>Contact Me:</b> {email}
          </small>
        </p>
        <p>
          <small>
            <FontAwesomeIcon icon={faDollarSign} />
            <b>Salary:</b> {Salary}
          </small>
        </p>
      </div>
    </div>
  );
};

export default User;
