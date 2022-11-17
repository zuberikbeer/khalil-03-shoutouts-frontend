import Shoutout from "../models/Shoutout";
import axios from "axios";

const baseUrl: string = process.env.REACT_APP_API_BASE_URL || "";

export const getAllShoutouts = (): Promise<Shoutout[]> => {
  return axios.get(`${baseUrl}/shoutouts`).then((res) => res.data);
};
