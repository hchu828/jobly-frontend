import "./Homepage.css";
import "./JoblyApp.css"
import UserContext from "./userContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

/** Presentational of showing home page
 * 
 * props: none
 * state: none
 * 
 * Routes -> HomePage
 */

function HomePage() {
  const user = useContext(UserContext);
  return (
    <main>
      {
        user
          ?
          <div className="JoblyApp">
            < div className="Homepage " >
              <h1 className="display-1 fw-bold">Jobly</h1>
              <p className="h3">All the jobs in one, convenient place.</p>
              <h2> Welcome back, {user.firstName}</h2>
            </div >
          </div >
          :
          < div className="JoblyApp" >
            <div className="Homepage ">
              <h1 className="display-1 fw-bold">Jobly</h1>
              <p className="h3">All the jobs in one, convenient place.</p>
              <Link to="/login">Log in</Link>
              <Link to="/signup">Sign up</Link>
            </div>
          </div >
      }
    </main>
  );
}

export default HomePage;