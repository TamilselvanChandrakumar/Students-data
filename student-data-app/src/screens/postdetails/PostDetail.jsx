import React, { useEffect } from "react";
import "./PostDetails.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
const PostDetail = () => {
  const location = useLocation();
  const { state: dataval } = location;
  const navigate = useNavigate();
  const { data, error, optionsData } = useFetch(
    `http://localhost:8000/students/${dataval.id}`,
    "DELETE"
  );
  const handleEditClick = () => {
    navigate(`/edit/${dataval.id}`, { state: dataval });
  };
  const handleDelete = () => {
    optionsData();
  };
  useEffect(() => {
    if (data.length !== 0) {
      const timer = setTimeout(() => navigate("/"), 3000);
      return () => clearTimeout(timer);
    }
  }, [data, navigate]);

  return (
    <>
      <div className="postdetail-container">
        <div className="postdeatil-card">
          <h1>{dataval.name}</h1>
          <p>{dataval.dob}</p>
          <p>{dataval.classstd}</p>
          <p>{dataval.school}</p>
          <button onClick={handleEditClick}>edit</button>
          <button onClick={handleDelete}>delete</button>
        </div>
      </div>
      <div className="postdetail-error">
        {data.length !== 0 && <h1>Post Deleted Successfully</h1>}
      </div>
    </>
  );
};

export default PostDetail;
