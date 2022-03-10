import { NavLink } from "react-router-dom";
import "./Nav.css";

/** Nav for navigation between resources
 * 
 * Props: none
 * 
 * State: none
 * 
 * App -> Nav 
 */

function Nav({ logout }) {

  return (
    <nav className="Nav">
      <div className="Nav-left">
        <NavLink exact to="/">Jobly</NavLink>
      </div>
      <div className="Nav-right">
        <NavLink to="/companies">Companies</NavLink>
        <NavLink to="/jobs">Jobs</NavLink>
      </div>
    </nav>
  );
}

export default Nav;