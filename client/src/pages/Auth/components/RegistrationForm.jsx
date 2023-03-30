import React, { useState } from "react";

export default function RegistrationForm() {
  const [form, setForm] = useState({ email: "", name: "", password: "" });

  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
  }

  return (
    <form className="form">
      <div className="input-container">
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={(e) => handleChange(e)}
        />
        <div className="input-div"></div>
        <div className="input-error"></div>
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={form.name}
          onChange={(e) => handleChange(e)}
        />
        <div className="input-div"></div>
        <div className="input-error"></div>
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Password"
          name="password"
          value={form.password}
          onChange={(e) => handleChange(e)}
        />
        <div className="input-div"></div>
        <div className="input-error"></div>
      </div>
      <button onClick={(e) => handleSubmit(e)} className="auth-button">
        Зареєструватися
      </button>
    </form>
  );
}
