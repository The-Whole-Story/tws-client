import axios from "axios";

export const fetchTopic = async query => {
  const url = `http://localhost:9000/entities/${query}/21`;
  return await axios.get(url);
};
export const fetch = async query => {
  const url = `http://localhost:9000/entities/${query}/21`;
  return await axios.get(url);
};
