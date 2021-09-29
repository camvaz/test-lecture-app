import axios from "axios";
import { useQuery } from "./useQuery";

export const useMockUser = () => useQuery(() => axios.get());
