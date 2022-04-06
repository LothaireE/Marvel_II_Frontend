import "../assets/CSS/Header.css";
import { Link } from "react-router-dom";
import Banner from "../assets/pictures/Banner.webp";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="header-bars">
          <div className="header-top-bar">
            {/* <div className="banner-box"> */}
            <img className="banner" src={Banner} alt="logo" />
            {/* </div> */}
          </div>
          <div className="header-bottom-bar">
            <Link className="link-1" to="/">
              Home
            </Link>
            <Link className="link-1" to="/characters">
              Characters
            </Link>
            <Link className="link-1" to="/Comics">
              Comics
            </Link>
            <div>
              <Link className="link-1" to={"/signin"}>
                log in
              </Link>
              <span> / </span>
              <Link className="link-1" to={"/signup"}>
                sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
