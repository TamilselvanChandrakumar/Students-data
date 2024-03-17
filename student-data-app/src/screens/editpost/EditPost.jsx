import React, { useState, useEffect } from "react";
import "./EditPost.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch.js";
const EditPost = () => {
  const [name, setName] = useState("");
  const [dob, setdob] = useState("");
  const [classstd, setClass] = useState("");
  const [school, setSchool] = useState("");
  const [validationError, setValidationError] = useState("");
  const [modifiedField, setModifiedField] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const { state: targetval } = location;
  const { data, error, isLoading, optionsData } = useFetch(
    `http://localhost:8000/students/${targetval.id}`,
    "PATCH"
  );

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
    optionsData(modifiedField);
    setName("");
    setClass("");
    setSchool("");
    setdob("");
  };

  useEffect(() => {
    setName(targetval.name);
    setClass(targetval.classstd);
    setdob(targetval.dob);
    setSchool(targetval.school);
    if (data.length !== 0) {
      const timer = setTimeout(() => navigate("/"), 3000);
      return () => clearTimeout(timer);
    }
  }, [data, navigate]);

  const onNameChange = (e) => {
    setName(e.target.value);
    setModifiedField({ ...modifiedField, name: e.target.value });
  };

  const onClassChange = (e) => {
    setClass(e.target.value);
    setModifiedField({ ...modifiedField, classstd: e.target.value });
  };

  const onDobChange = (e) => {
    setdob(e.target.value);
    setModifiedField({ ...modifiedField, dob: e.target.value });
  };

  const onSchoolChange = (e) => {
    setSchool(e.target.value);
    setModifiedField({ ...modifiedField, school: e.target.value });
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
            onChange={onNameChange}
          ></input>
        </div>
        <div>
          <label htmlFor="dob">dob</label>
          <input
            type="text"
            id="dob"
            value={dob}
            onChange={onDobChange}
          ></input>
        </div>
        <div>
          <label htmlFor="class">class</label>
          <input
            type="number"
            id="class"
            value={classstd}
            onChange={onClassChange}
          ></input>
        </div>
        <div>
          <label htmlFor="school">school</label>
          <input
            type="text"
            id="school"
            value={school}
            onChange={onSchoolChange}
          ></input>
        </div>
        {validationError && <h1>{validationError}</h1>}
        {data.length !== 0 && <h1>post created successfully</h1>}
        <button type="submit">Update</button>
      </form>
    </>
  );
};

export default EditPost;
