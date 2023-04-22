import { Link } from "react-router-dom";
import { GrMenu } from "react-icons/gr";
import { IconContext } from "react-icons";

export const NavBar = () => {
  const showMenu = () => {
    const menu = document.querySelector(".menu-nav-bar");
    menu.classList.toggle("show-hide-menu");
  };

  return (
    <div className="menu-btn-and-nav">
      <IconContext.Provider
        value={{ color: "blue", className: "hidden mobile-menu-icon" }}
      >
        <GrMenu onClick={showMenu} />
      </IconContext.Provider>

      <div className="menu-nav-bar show-hide-menu">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/HowItWorks" className="nav-link">
          How it works
        </Link>
        <Link to="/TodoList" className="nav-link">
          Get started
        </Link>
      </div>
    </div>
  );
};
