import { useState } from "react";
import { Redirect } from "react-router-dom";
/** Show the login form and update the user state 
 * 
 * props:
 *  - login: a function passed down from App component
 * 
 * state:
 *  - formData: {username, password}
 * 
 * Routes -> LoginForm
 */
const DEFAULT_FORM_DATA = { username: "", password: "" };

function LoginForm({ login }) {
  const [formData, setFormData] = useState(DEFAULT_FORM_DATA);

  function handleChange(evt) {
    const { name, value } = evt.target;

    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    login(formData);
    setFormData(DEFAULT_FORM_DATA);
  }


  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">
        Username
      </label>
      <input
        id="username"
        name="username"
        value={formData.username}
        required
        onChange={handleChange}
      />

      <label htmlFor="password">
        Password
      </label>
      <input
        id="password"
        name="password"
        value={formData.password}
        required
        onChange={handleChange}
        type="password"
      />
      <button>Submit</button>
    </form>
  );
}

export default LoginForm;