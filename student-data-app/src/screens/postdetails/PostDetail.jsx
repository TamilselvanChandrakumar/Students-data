import React from "react";
import "./PostDetails.css";
import { useLocation, useNavigate } from "react-router-dom";
const PostDetail = () => {
  const location = useLocation();
  const { state: data } = location;
  const navigate = useNavigate();
  const handleEditClick = () => {
    navigate(`/edit/${data.id}`, { state: data });
  };
  return (
    <>
      <h1>{data.name}</h1>
      <p>{data.dob}</p>
      <p>{data.class}</p>
      <p>{data.school}</p>
      <button onClick={handleEditClick}>edit</button>
      <button>delete</button>
    </>
  );
};

export default PostDetail;
