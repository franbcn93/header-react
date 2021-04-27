import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-scroll"; // react-scroll is a library for scrolling in React
import SmallScreensNavbar from "./SmallScreensNavbar";
import { useWindowWidthAndHeight } from "./CustomHooks";

const Header = () => {
  // use our custom hook to get the the window size
  const [width, height] = useWindowWidthAndHeight();
  return (
    <header>
      <div className="header-inner">
        {/* <Link to="Home" smooth={true} className="logo nav-link">
          RH
        </Link> */}
        {/*if the width of the window is bigger than 1000px use <Navebar/>,
                   else user <SmallScreensNavbar/>*/}
        {width > 750 ? (
          <Navbar />
        ) : (
          <SmallScreensNavbar
            navClass="nav-small"
            linkClassName="nav-small-link"
          />
        )}
      </div>
    </header>
  );
};

export default Header;
