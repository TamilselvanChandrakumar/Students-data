import React from "react";
import "./StudentCard.css";
import { useNavigate } from "react-router-dom";
const StudentCard = ({ studentData }) => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/post/${studentData.id}`, { state: studentData });
  };
  return (
    <>
      <div className="card" onClick={handleCardClick}>
        <h1>{studentData.name}</h1>
        <p>{studentData.dob}</p>
        <p>{studentData.class}</p>
        <p>{studentData.school}</p>
      </div>
    </>
  );
};

export default StudentCard;
