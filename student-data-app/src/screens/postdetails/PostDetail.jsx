import React from "react";
import "./PostDetails.css";
import { useLocation } from "react-router-dom";
const PostDetail = () => {
  const location = useLocation();
  const { state } = location;
  return (
    <>
      <h1>{state.name}</h1>
      <p>{state.dob}</p>
      <p>{state.class}</p>
      <p>{state.school}</p>
      <button>edit</button>
      <button>delete</button>
    </>
  );
};

export default PostDetail;
