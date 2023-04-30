import { EventNote } from "@mui/icons-material";
import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  method: "GET",
  url: BASE_URL,
  params: {
    maxResults: 50,
  },
  headers: {
    "Access-Control-Allow-Origin": "*",
    "X-RapidAPI-Key": "e5f116ac87msh420979a59b83348p1336aajsna26d1c320704",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
