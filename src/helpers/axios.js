import axios from "axios";
import { api } from "../urlConfig";

const axiosIntace = axios.create({
  baseURL: api,
});

export default axiosIntace;
