import "./Homepage.css";
import "./JoblyApp.css"

/** Presentational of showing home page
 * 
 * props: none
 * state: none
 * 
 * Routes -> HomePage
 */

function HomePage() {
  return (
    <div className="JoblyApp">
      <div className="Homepage ">
        <h1 className="display-1 fw-bold">Jobly</h1>
        <p className="h3">All the jobs in one, convenient place.</p>
      </div>
    </div>
  );
}

export default HomePage;