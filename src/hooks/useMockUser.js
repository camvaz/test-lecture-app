import axios from "axios";
import { useEffect, useState } from "react";

export const useMockUser = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await axios(
          "https://jsonplaceholder.typicode.com/users"
        );
        setData(result.data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return { data, loading, error };
};
