import { useState } from "react";

function SignupForm({ signup }) {
  const [formData, setFormData] = useState(
    {
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      email: "",
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
    signup(formData);
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

export default SignupForm;