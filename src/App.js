import './App.css';
import { useState, useEffect } from 'react';
import { Redirect } from "react-router-dom";
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
  // const [isredirect, setIsredirect] = useState(false);

  async function login({ username, password }) {
    const tokenData = await JoblyApi.login({ username, password });
    setToken(tokenData);
    // setIsredirect(true);
  }

  async function signup({ username, password, firstName, lastName, email }) {
    const tokenData = await JoblyApi.registerUser({
      username,
      password,
      firstName,
      lastName,
      email
    });
    setToken(tokenData);
    // setIsredirect(true);
  }

  useEffect(function fetchUserWithToken() {
    if(token === null) return;
    async function getUser() {
      const userData = await JoblyApi.getUser(token);
      setUser(userData);
    }
    getUser();
  }, [token]);


  async function editUser({ username, firstName, lastName, email }) {
    const userData = await JoblyApi.editUser(
      username,
      firstName,
      lastName,
      email
    );
    setUser(userData);
  }

  // if (isredirect) {
  // return (
  //   <div className="App">

  //     <UserContext.Provider value={user}>
  //       <Nav logout={logout} />
  //       <Routes
  //         login={login}
  //         signup={signup}
  //         editUser={editUser}
  //       />
  //     </UserContext.Provider>
  //     {/* {isredirect && <redirect push to="/" />} */}
  //   </div>
  // );
  // }

  function logout() {
    setUser(null);
    // setIsredirect(false);

  }

  return (
    <div className="App">

      <UserContext.Provider value={user}>
        <Nav logout={logout} />
        <Routes
          login={login}
          signup={signup}
          editUser={editUser}
        />
      </UserContext.Provider>
      {/* {isredirect && <Redirect push to="/" />} */}
    </div>
  );
}

export default App;
