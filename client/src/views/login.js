import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../components/Button";
import Logo from "../images/logo.svg";

const url =
  window.location.hostname === "localhost"
    ? "http://localhost:1337/auth/login"
    : "https://badadvice.vercel.app/auth/login";

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });

  let history = useHistory();

  const validExistingUser = () => {
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(loginDetails),
    })
      .then((response) => {
        console.log("response", response);
        if (response.ok) {
          return response.json();
        }
        return response.json().then((error) => {
          throw new Error(error.message);
        });
      })
      .then((result) => {
        localStorage.setItem("token", result.token);
        history.push("/dashboard");
      })
      .catch((error) => {
        // setErrorMessage(error.message);
      });
    // setErrorMessage("");
    return true;
    // } else {
    //   setErrorMessage(result.error.message);
    //   return false;
    // }
  };

  const handleInput = (e) => {
    e.preventDefault();
    setLoginDetails({
      ...loginDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    validExistingUser();
  };

  return (
    <div className="container bg-near-grey">
      <main className="bg-near-grey">
        <div className="login-box">
          <h1 className="admin-logo t-center">
            <img src={Logo} alt="" className="logo" />
            BadAdvice<span className="admin">Admin</span>
          </h1>
          <form className="login-form w-100" onSubmit={handleLogin}>
            <label htmlFor="username" className="text-label">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="text-input w-100"
              value={loginDetails.username}
              onChange={handleInput}
            ></input>
            <label htmlFor="password" className="text-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="text-input w-100"
              value={loginDetails.password}
              onChange={handleInput}
            ></input>
            <Button label="Login" onClick={null} />
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;
