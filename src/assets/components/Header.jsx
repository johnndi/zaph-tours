import { Link } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <section>
      <div className="Header">
        <h1 className="headertitle">zaph tours</h1>
        <nav className="HeaderNavList">
          <ul className="NavList-items">
            <li className="navItem">
              <a href="/">home</a>
            </li>
            <li className="navItem">
              <Link to="/Destination">destinations</Link>
            </li>
            <li className="navItem">
              <Link to="/Triptype">trips type</Link>
            </li>
            <li className="navItem">
              <Link to="/Contact">contact us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};
export default Header;
