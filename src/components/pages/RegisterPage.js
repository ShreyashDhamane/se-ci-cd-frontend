import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../../App.css";
import validateEmail from "./validator/validateEmail";
import validatePassword from "./validator/validatePassword";
import axios from "axios";
export default function SignUpPage() {
  const [userData, setUserData] = useState({
    firstname: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const validate = (event) => {
    event.preventDefault();
    const email = userData.email;
    const password = userData.password;
    if (
      validateEmail(email) &&
      validatePassword(password) &&
      userData.firstname !== ""
    ) {
      axios
        .post(`${process.env.REACT_APP_server_url}/register`, userData)
        .then((res) => {
          console.log("res.data");
          if (res.data.result === 1) {
            alert("user already exist");
          } else {
            navigate("/home");
          }
        })
        .catch((err) => {
          alert("user already exists");
        });
    } else {
      alert("Invalid email or password");
    }
  };
  return (
    <div className="text-center m-5-auto">
      <h2>Join us</h2>
      <h5>delete your account</h5>
      <form>
        <p>
          <label>Username</label>
          <br />
          <input
            type="text"
            name="firstname"
            value={userData.firstname}
            onChange={(value) => {
              setUserData({ ...userData, firstname: value.target.value });
            }}
            required
          />
        </p>
        <p>
          <label>Email address</label>
          <br />
          <input
            type="email"
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
          <input type="checkbox" name="checkbox" id="checkbox" required />{" "}
          <span>
            I agree all statements in{" "}
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              terms of service
            </a>
          </span>
          .
        </p>
        <p>
          <button id="sub_btn" type="submit" onClick={validate}>
            Register
          </button>
        </p>
      </form>
      <footer>
        <p>
          <Link to="/">Back to Homepage</Link>.
        </p>
      </footer>
    </div>
  );
}
