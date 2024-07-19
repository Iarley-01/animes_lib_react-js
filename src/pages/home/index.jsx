import { useState, useEffect } from "react";

import MovieCard from "../../components/MovieCard";

const urlApi = import.meta.env.VITE_API;
const urlKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);
  
  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    
    setTopMovies(data.results);
  }
  
  useEffect(() => {
    const topRatedUrl = `${urlApi}top_rated?${urlKey}`
    getTopRatedMovies(topRatedUrl)
  }, [])
  return (
    <div className="container">
      <h2>Melhores filmes:</h2>
      <div className="movies_container">
        {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
      </div>
    </div>
  )
}

export default Home;