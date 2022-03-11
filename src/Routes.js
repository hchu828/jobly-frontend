import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "./Homepage";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import JobList from "./JobList";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import ProfileForm from "./ProfileForm";
import UserContext from "./userContext";
import { useContext } from "react";

/** Routes for rendering components
 * //TODO: useContext
 * Props: 
 * -login: function called from App parent
 * - signup: function called from App parent
 * - editUser: function called from App parent
 * 
 * State: none
 * 
 * App -> Routes
 */

function Routes({ login, signup, editUser }) {
  const user = useContext(UserContext);

  return (
    <>
      {!user
        ?
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/login">
            <LoginForm login={login} />
          </Route>
          <Route exact path="/signup">
            <SignupForm signup={signup} />
          </Route>
          <Redirect to="/" />
        </Switch>
        :
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/profile">
            <ProfileForm editUser={editUser} />
          </Route>
          <Route exact path="/companies">
            <CompanyList />
          </Route>
          <Route exact path="/companies/:handle">
            <CompanyDetail />
          </Route>
          <Route exact path="/jobs">
            <JobList />
          </Route>
          <Redirect to="/" />
        </Switch>
      }
    </>
  );
}

export default Routes;