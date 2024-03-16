import React, { useEffect, useState } from "react";
import StudentCard from "../../components/StudentCard/StudentCard";
import "./Home.css";
const Home = () => {
  const [data, setData] = useState([]);
  const [err, setErr] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8000/students");
      const jsonresponse = await response.json();

      if (response.ok) {
        console.log(jsonresponse);
        setData(jsonresponse);
      } else {
        setErr(jsonresponse.error);
      }
    };
    fetchData();
  }, []);
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
    </>
  );
};

export default Home;
