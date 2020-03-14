import React from "react";
import "./Profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserSecret,
  faDollarSign,
  faPlusCircle,
  faPhone,
  faPaperPlane,
  faMapMarkedAlt
} from "@fortawesome/free-solid-svg-icons";

const Profile = props => {
  const { name, img, username, Salary, phone, email } = props.profile;

  return (
    <div className="main-container">
      <div className="image-container">
        <img src={img} alt={name} />
      </div>
      <div className="margin">
        <h2>{name}</h2>
        <h4>
          <FontAwesomeIcon icon={faUserSecret} /> {username}
        </h4>
        <h4>
          <FontAwesomeIcon icon={faDollarSign} /> {Salary}
        </h4>

        <p>
          <small>
            <FontAwesomeIcon icon={faPhone} /> {phone}
          </small>
        </p>
        <p>
          <small>
            <FontAwesomeIcon icon={faPaperPlane} /> {email}
          </small>
        </p>
        <button
          className="button-style"
          onClick={() => props.handleAddProfile(props.profile)}
        >
          <FontAwesomeIcon icon={faPlusCircle} /> <b>Follow</b>{" "}
        </button>
      </div>
    </div>
  );
};

export default Profile;
