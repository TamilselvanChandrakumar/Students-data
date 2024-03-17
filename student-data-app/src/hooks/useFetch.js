import { useEffect, useState } from "react";

export const useFetch = (url, method = "GET") => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState(null);

  const optionsData = (data) => {
    if (method === "POST") {
      setOptions({
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json;charset=UTF-8",
        },
      });
    } else if (method === "PATCH") {
      setOptions({
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json;charset=utf-8",
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
    } else if ((method === "POST" || method === "PATCH") && options) {
      fetchData(options);
    }
  }, [url, method, options]);
  return { data, error, isLoading, optionsData };
};
