import { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import UserContext from "./userContext";

/** Nav for navigation between resources
 * 
 * Props: 
 *  -logout: a function passed down from App component
 * 
 * State: none
 * 
 * App -> Nav 
 */

function Nav({ logout }) {
  const user = useContext(UserContext);
  
  return (
    <div>
      {user === null ?
        <nav className="Nav">
          <div className="Nav-left">
            <NavLink exact to="/">Jobly</NavLink>
          </div>
          <div className="Nav-right">
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Signup</NavLink>
          </div>
        </nav>
        :
        <nav className="Nav">
          <div className="Nav-left">
            <NavLink exact to="/">Jobly</NavLink>
          </div>
          <div className="Nav-right">
            <NavLink to="/companies">Companies</NavLink>
            <NavLink to="/jobs">Jobs</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <button onClick={logout}>Logout {user.username}</button>
          </div>
        </nav>
      }
    </div>
  );
}

export default Nav;