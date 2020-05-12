import React, { useState, useEffect } from "react";
import "./App.css";
import Get from "./components/Get";
import Response from "./components/Response";
import Logo from "./images/logo.svg";

const url = "http://localhost:1337/api/";

const App = () => {
  const [singleResult, setSingleResult] = useState();
  const [multipleResult, setMultipleResult] = useState();

  const getSingleAdvice = async () => {
    return await fetch(url).then((response) =>
      response.json().then((data) => setSingleResult(data))
    );
  };
  const getMultipleAdvice = async () => {
    return await fetch(url + 5).then((response) =>
      response.json().then((data) => setMultipleResult(data))
    );
  };

  useEffect(() => {
    getSingleAdvice();
  }, []);

  useEffect(() => {
    getMultipleAdvice();
  }, []);
  return (
    <main>
      <h1>
        <img src={Logo} alt="" className="logo" />
        BadAdvice
      </h1>
      <p className="hero-text">
        A free REST API for bad advice (bad advice as a service). Feel free to
        use it in any project where good advice isn’t a requirement.
      </p>

      <h2>Usage</h2>
      <h3>Retrieve random advice</h3>
      <Get url="https//badavice.rest/api/" />
      <Response result={singleResult} refresh={getSingleAdvice} />
      <h3>Retrieve multiple random advice</h3>
      <Get url="https//badavice.rest/api/5" />
      <Response result={multipleResult} refresh={getMultipleAdvice} />
      <footer><span className="peace-emoji" role="img" aria-label="hidden">✌️</span>Made by <a href="https://www.adamparsons.me" className="link">Adam Parsons</a> </footer>
    </main>
  );
};

export default App;
