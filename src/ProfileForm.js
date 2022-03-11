import { useState, useContext } from "react";
import UserContext from "./userContext";

function ProfileForm({ editUser }) {
  const user = useContext(UserContext);

  const [formData, setFormData] = useState(
    {
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    }
  );

  function handleChange(evt) {
    const { name, value } = evt.target;

    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    editUser(formData);
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
        disabled
        onChange={handleChange}
      />

      <label htmlFor="firstName">
        First name
      </label>
      <input
        id="firstName"
        name="firstName"
        value={formData.firstName}
        required
        onChange={handleChange}
      />

      <label htmlFor="lastName">
        Last name
      </label>
      <input
        id="lastName"
        name="lastName"
        value={formData.lastName}
        required
        onChange={handleChange}
      />

      <label htmlFor="email">
        Email
      </label>
      <input
        id="email"
        name="email"
        value={formData.email}
        required
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );

}


export default ProfileForm;


