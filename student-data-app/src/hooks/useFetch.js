import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useFetch = (url, method = "GET") => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState(null);
  const navigate = useNavigate();
  const optionsData = (data) => {
    if (method === "POST") {
      setOptions({
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json;charset=UTF-8",
        },
      });
    }
  };

  useEffect(() => {
    const fetchData = async (options) => {
      setIsLoading(true);
      const response = await fetch(url, { ...options });
      const jsonresponse = await response.json();
      if (response.ok) {
        setData(jsonresponse);
        setError("");
        setIsLoading(false);
      } else {
        setError("couldn't fetch data");
        setData([]);
        setIsLoading(false);
      }
    };
    if (method === "GET") {
      fetchData();
    } else if (method === "POST" && options) {
      fetchData(options);
    }
  }, [url, method, options]);
  return { data, error, isLoading, optionsData };
};
