import axios from "axios";

export const getProfile = (userName: string) => {
  return axios.get(`https://api.github.com/users/${userName}`);
}