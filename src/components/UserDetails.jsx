import React from "react";
import { useSelector } from "react-redux";
import "./UserDetails.css";

const UserDetails = () => {
  const user = useSelector((state) => state.user);

  if (!user) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="user-details">
      <h2 className="name">{`${user.name.title} ${user.name.first} ${user.name.last}`}</h2>
      <img className="profile-img" src={user.picture.large} alt="Profile" />
      <p className="city">City: {user.location.city}</p>
      <p className="dob">
        Date of Birth: {new Date(user.dob.date).toLocaleDateString()}
      </p>
      <p className="nationality">Nationality: {user.nat}</p>
    </div>
  );
};

export default UserDetails;