import React from "react";
import { Link } from "react-scroll";

const Navbar_2 = ({ navClass, linkClassName }) => (
  <NavComponent navClass={navClass} linkClassName={linkClassName} />
);

export const NavComponent = ({ onClick, navClass, linkClassName }) => (
  <nav className={navClass}>
    {["section1", "section2", "section3", "section4", "section5"].map(
      (section) => (
        <Link
          to={section}
          smooth={true}
          className={linkClassName}
          onClick={onClick}
        >
          {section}
        </Link>
      )
    )}
  </nav>
);
export default Navbar_2;
