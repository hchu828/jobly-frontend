import './App.css';
import { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import JoblyApi from "./JoblyApi";
import Nav from "./Nav"
import Routes from "./Routes"

/** App for rendering Jobly
 * 
 * Props: none
 * 
 * State: none
 * 
 * App -> {Nav, Routes}
 */

function App() {
  const [user, setUser] = useState(null);

  async function login(username, password) {
    const userData = await JoblyApi.getUser(username, password);
    setUser(userData);
  }

  async function signup(username, password, firstName, lastName, email) {
    const userData = await JoblyApi.registerUser(
      username,
      password,
      firstName,
      lastName,
      email
    );
    setUser(userData);
  }

  async function editUser(username, firstName, lastName, email) {
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
        <Nav logout={logout} />
        <Routes
          login={login}
          signup={signup}
          edit={editUser}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
