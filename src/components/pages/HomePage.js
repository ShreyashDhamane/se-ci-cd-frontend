import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
export default function HomePage() {
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    // console.log("document.cookie");
    // console.log(document.cookie);
    if (
      localStorage.getItem("token") === "" ||
      localStorage.getItem("token") === null
    ) {
      navigate("/login");
    } else {
      setAuth(true);
    }
  }, []);

  const counter = async (event) => {
    event.preventDefault();
    axios
      .post(`${process.env.REACT_APP_server_url}/counter`, {
        token: localStorage.getItem("token"),
      })
      .then((res) => {
        console.log(res);
        if (res.data.message === "success") {
          alert("valid JWT");
        } else {
          alert("invalid JWT");
        }
      });
  };

  if (auth) {
    return (
      <div className="text-center">
        <h1 className="main-title home-page-title">welcome to our app</h1>
        <Link to="/">
          <button
            className="primary-button"
            onClick={() => {
              console.log("logout");
              localStorage.setItem("token", "");
              //   document.cookie = "";
              setAuth(false);
              navigate("/");
            }}
          >
            Log out
          </button>
          <button className="primary-button" onClick={counter}>
            validate jwt
          </button>
        </Link>
      </div>
    );
  } else {
    return <div>Not Authorised</div>;
  }
}
