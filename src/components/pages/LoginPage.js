import React, { useState } from "react";
import { Link, Router, useNavigate } from "react-router-dom";
import validateEmail from "./validator/validateEmail";
import validatePassword from "./validator/validatePassword";
import axios from "axios";
import "../../App.css";

export default function SignInPage() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ email: "", password: "" });
  const validate = (event) => {
    event.preventDefault();
    const email = userData.email;
    const password = userData.password;
    if (validateEmail(email) && validatePassword(password)) {
      axios
        .post(`${process.env.REACT_APP_server_url}/login`, userData)
        .then((res) => {
          console.log("login");
          console.log(res.status);
          navigate("/home");
        })
        .catch((err) => {
          alert("invalid email or password");
        });
    } else {
      alert("Invalid email or password");
    }
  };
  return (
    <div className="text-center m-5-auto">
      <h2>Sign in to us</h2>
      <form action="/home">
        <p>
          <label>Email address</label>
          <br />
          <input
            type="text"
            name="email"
            value={userData.email}
            onChange={(value) => {
              setUserData({ ...userData, email: value.target.value });
            }}
            required
          />
        </p>
        <p>
          <label>Password</label>
          <Link to="/forget-password">
            <label className="right-label">Forget password?</label>
          </Link>
          <br />
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={(value) => {
              setUserData({ ...userData, password: value.target.value });
            }}
            required
          />
        </p>
        <p>
          <button id="sub_btn" type="submit" onClick={validate}>
            Login
          </button>
        </p>
      </form>
      <footer>
        <p>
          First time? <Link to="/register">Create an account</Link>.
        </p>
        <p>
          <Link to="/">Back to Homepage</Link>.
        </p>
      </footer>
    </div>
  );
}
