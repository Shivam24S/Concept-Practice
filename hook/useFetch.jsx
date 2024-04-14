import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await axios.get(url);
        setData(response.data);
        setIsLoading(false);
        if (response.status !== 200) {
          throw new Error("couldn't fetch data");
        }
      } catch (error) {
        setError(error.message);
      }
    }
    fetchData();
  }, [url]);

  return { data, isLoading, error };
};
export default useFetch;
