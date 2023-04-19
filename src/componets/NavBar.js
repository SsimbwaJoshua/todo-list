import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
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
  );
};
