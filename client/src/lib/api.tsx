export const initialUrl = "https://bucket-assignment-vercel.vercel.app/api";

export const fetchUrl = async (url: string) => {
  const response = await fetch(url);
  console.log(response.json);
  return response.json();
};

// import axios from "axios";

// export const fetchUrl = async (url: string) => {
//   return await axios.get(url).then((res) => res.data);
// };
