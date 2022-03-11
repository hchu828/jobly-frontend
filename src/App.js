import './App.css';
import { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import JoblyApi from "./JoblyApi";
import Nav from "./Nav";
import Routes from "./Routes";
import UserContext from "./userContext";

/** App for rendering Jobly
 * 
 * Props: none
 * 
 * State: 
 *  - user: an object, like{username, firstName, lastName, email, isAdmin}
 * 
 * App -> {Nav, Routes}
 */

function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  async function login({ username, password }) {
    const res = await JoblyApi.login({ username, password });
    setUser(res.userData);
    setToken(res.token);
  }

  async function signup({ username, password, firstName, lastName, email }) {
    const res = await JoblyApi.registerUser({
      username,
      password,
      firstName,
      lastName,
      email
    });
    setUser(res.userData);
    setToken(res.token);
  }


  async function editUser({ username, firstName, lastName, email }) {
    const userData = await JoblyApi.editUser(
      username,
      firstName,
      lastName,
      email
    );
    setUser(userData);
  }

  function logout() {
    setUser(null);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={user}>
          <Nav logout={logout} />
          <Routes
            login={login}
            signup={signup}
            editUser={editUser}
          />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
