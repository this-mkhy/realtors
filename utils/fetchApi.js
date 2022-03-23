import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

// Fetching data from api
export const fetchApi = async (url) => {
  // get the response data of all the properties that we fetch, rental and sale
  const { data } = await axios.get((url), {
    headers: {
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
      'X-RapidAPI-Key': '1169651f57msh618d75a65128dfap1767bbjsnd606012fe114',
      //'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY ,
    }
  });
    
  return data;
}