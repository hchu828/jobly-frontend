import { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import UserContext from "./userContext";

/** Nav for navigation between resources
 * 
 * Props: 
 *  -logout: a function passed down from App component
 * 
 * Context: 
 * - user: {}
 * 
 * State: none
 * 
 * App -> Nav 
 */
//TODO: docstring for whenever you're using useContext
function Nav({ logout }) {
  const user = useContext(UserContext);

  return (
    <>
      {user === null
        ?
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
            <button className="btn btn-primary" onClick={logout}>Logout {user.username}</button>
          </div>
        </nav>
      }
    </>
  );
}

export default Nav;