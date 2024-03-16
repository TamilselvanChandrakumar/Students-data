import React, { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
const CreatePost = () => {
  const [name, setName] = useState("");
  const [dob, setdob] = useState("");
  const [classstd, setClass] = useState("");
  const [school, setSchool] = useState("");
  const [validationError, setValidationError] = useState("");
  const navigate = useNavigate();
  const { data, error, isLoading, optionsData } = useFetch(
    "http://localhost:8000/students",
    "POST"
  );
  useEffect(() => {
    if (data.length !== 0) {
      const timer = setTimeout(() => navigate("/"), 3000);
      return () => clearTimeout(timer);
    }
  }, [data, navigate]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name == "") {
      setValidationError("name should not be empty");
    } else if (dob == "") {
      setValidationError("dob should not be empty");
    } else if (classstd == "") {
      setValidationError("class should not be empty");
    } else if (school == "") {
      setValidationError("school should not be empty");
    } else {
      setValidationError("");
    }
    optionsData({ name, dob, classstd, school });
    setName("");
    setClass("");
    setdob("");
    setSchool("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="dob">dob</label>
          <input
            type="text"
            id="dob"
            value={dob}
            onChange={(e) => setdob(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="class">class</label>
          <input
            type="number"
            id="class"
            value={classstd}
            onChange={(e) => setClass(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="school">school</label>
          <input
            type="text"
            id="school"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
          ></input>
        </div>
        {validationError && <h1>{validationError}</h1>}
        {data.length !== 0 && <h1>post created successfully</h1>}
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default CreatePost;
