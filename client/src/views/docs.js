import React, { useState, useEffect } from "react";
import Get from "../components/Get";
import Response from "../components/Response";
import Logo from "../images/logo.svg";

const url =
  window.location.hostname === "localhost"
    ? "http://localhost:1337/api/"
    : "https://badadvice.rest/api/";

const Docs = () => {
  const [singleResult, setSingleResult] = useState();
  const [multipleResult, setMultipleResult] = useState();

  const getSingleAdvice = async () => {
    return await fetch(url + "/random").then((response) =>
      response.json().then((data) => setSingleResult(data))
    );
  };
  const getMultipleAdvice = async () => {
    return await fetch(url + "count=5").then((response) =>
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
    <div className="container">
      <main>
        <h1>
          <img src={Logo} alt="" className="logo" />
          BadAdvice
        </h1>
        <p className="hero-text">
          A free REST API for bad advice (bad advice as a service). Use it in
          any project where good advice isn’t a requirement.
        </p>

        <h2>Usage</h2>
        <h3>Retrieve random advice</h3>
        <Get url="https://badadvice.rest/api/random" />
        <Response result={singleResult} refresh={getSingleAdvice} />
        <h3>Retrieve multiple random advice</h3>
        <Get url="https://badadvice.rest/api/count=5" />
        <Response result={multipleResult} refresh={getMultipleAdvice} />
        <footer>
          <div>
            <span className="peace-emoji" role="img" aria-label="hidden">
              ✌️
            </span>
            Made by{" "}
            <a href="https://www.adamparsons.me" className="link">
              Adam Parsons
            </a>
          </div>
          <div className="github">
            <a
              href="https://github.com/adamgparsons/badadvice"
              className="link"
            >
              GitHub
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Docs;
