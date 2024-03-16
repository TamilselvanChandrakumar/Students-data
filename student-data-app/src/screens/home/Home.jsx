import React, { useEffect, useState } from "react";
import StudentCard from "../../components/StudentCard/StudentCard";
import "./Home.css";
import { useFetch } from "../../hooks/useFetch";
const Home = () => {
  const { data, error, isLoading } = useFetch("http://localhost:8000/students");
  return (
    <>
      <div className="card-container">
        {data
          ? data.map((data) => {
              return (
                <StudentCard key={data.id} studentData={data}></StudentCard>
              );
            })
          : null}
      </div>
      {error && <h1>{error}</h1>}
      {isLoading && <h1>Loading data...</h1>}
    </>
  );
};

export default Home;
