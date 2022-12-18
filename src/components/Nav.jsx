import "./styles/Nav.css";
import { NavLink } from "react-router-dom";
import cassette from "../images/cassette-tape-no-title.png";

function Nav() {
  return (
    <div className="nav-bar-component">
      <div className="title-logo">
        <NavLink to="/">
          <img src={cassette} alt="cassette logo" className="cassette-logo" />
        </NavLink>
        <p className="b-side-music">B-Side Music</p>
      </div>
      <div className="nav">
        <div className="navlink" activeClassName="active">
          <NavLink to="/">Home</NavLink>
        </div>
        <div className="navlink" activeClassName="active">
          <NavLink to="/artists">Artists</NavLink>
        </div>
        <div className="navlink" activeClassName="active">
          <NavLink to="/albums">Albums</NavLink>
        </div>
        <div className="navlink" activeClassName="active">
          <NavLink to="/genres">Genres</NavLink>
        </div>
        <div className="navlink" activeClassName="active">
          <NavLink to="/about">About</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Nav;
