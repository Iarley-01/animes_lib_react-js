import { Link } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";

const Navbar = () => {
  return (
     <nav id="navbar">
        <Link to="/">
          <h1>Animes Lib</h1>
        </Link>
        <form>
          <input type="text" placeholder="Busque por um anime" />
          <button type="submit">
            <BiSearchAlt2 />
          </button>
        </form>
      </nav>
  );
}

export default Navbar;