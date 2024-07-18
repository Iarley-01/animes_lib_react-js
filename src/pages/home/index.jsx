import { useState, useEffect } from "react";

const urlApi = import.meta.env.VITE_API;
const urlKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);
  
  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    
    console.log(data);
  }
  
  useEffect(() => {
    const topRatedUrl = `${urlApi}top_rated?${urlKey}`
    getTopRatedMovies(topRatedUrl)
  }, [])
  return (
    <h2>HomePage</h2>
  )
}

export default Home;