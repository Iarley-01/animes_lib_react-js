import { Link, Outlet } from 'react-router-dom';

import './App.css';

function App() {

  return (
    <div className="App">
      <nav id="navbar">
        <Link to="/">
          <h1>Animes Lib</h1>
        </Link>
        <Link to="anime/1">Anime</Link>
        <Link to="search">Search</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default App
