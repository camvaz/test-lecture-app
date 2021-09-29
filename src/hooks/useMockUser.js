import axios from "axios";
import { useCallback } from "react";
import { useQuery } from "./useQuery";

export const useMockUser = () => {
  const memoizedRequest = useCallback(
    () => axios.get("https://jsonplaceholder.typicode.com/users"),
    []
  );

  return useQuery(memoizedRequest);
};
