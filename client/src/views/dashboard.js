import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from "../components/Button";
import Logo from "../images/logo.svg";

const adviceAdminUrl =
  window.location.hostname === "localhost"
    ? "http://localhost:1337/api/admin"
    : "https://badadvice.vercel.app/api/admin";

const Dashboard = () => {
  const [existingAdvice, setExistingAdvice] = useState();
  const [newAdvice, setNewAdvice] = useState("");

  let history = useHistory();

  const handleInput = (e) => {
    e.preventDefault();
    setNewAdvice(e.target.value);
  };

  function sortAdvice(advice) {
    return advice.sort((a, b) => b.date_created.localeCompare(a.date_created));
  }

  const getExistingAdvice = async () => {
    return await fetch(adviceAdminUrl, {
      headers: {
        authorization: "bearer " + localStorage.token,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setExistingAdvice(sortAdvice(data)));
  };

  const addAdvice = async () => {
    return await fetch(adviceAdminUrl, {
      method: "POST",
      headers: {
        authorization: "bearer " + localStorage.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ bad_advice: newAdvice }),
    })
      .then((response) => response.json())
      .then((addedAdvice) =>
        setExistingAdvice([addedAdvice, ...existingAdvice])
      )
      .then(setNewAdvice(""));
  };

  const handleAddAdvice = (e) => {
    e.preventDefault();
    addAdvice();
  };

  async function deleteAdvice(idToDelete) {
    return await fetch(adviceAdminUrl, {
      method: "DELETE",
      headers: {
        authorization: "bearer " + localStorage.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: idToDelete }),
    }).then((response) => {
      if (response.ok) {
        setExistingAdvice(
          existingAdvice.filter((advice) => advice._id !== idToDelete)
        );
      }
    });
  }

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    history.push("/admin");
  };

  useEffect(() => {
    getExistingAdvice();
  }, []);

  return (
    <div className="container top bg-near-grey">
      <main>
        <div className="logout-holder">
          <a className="link logout" onClick={handleLogout}>
            Log out
          </a>
        </div>

        <h1 className="admin-logo">
          <img src={Logo} alt="" className="logo" />
          BadAdvice<span className="admin">Admin</span>
        </h1>
        <div className="add-advice">
          <form className="login-form w-100" onSubmit={handleAddAdvice}>
            <label htmlFor="new-advice" className="text-label label-large">
              Add some advice
            </label>
            <textarea
              type="text"
              id="new-advice"
              name="new-advice"
              className="text-input w-100"
              value={newAdvice}
              onChange={handleInput}
            ></textarea>
            <Button label="Add advice" onClick={null} />
          </form>
        </div>
        <h2>Existing Advice</h2>
        {}
        {existingAdvice
          ? existingAdvice.map((advice) => {
              return (
                <div className="existing-advice" key={advice._id}>
                  <p className="advice-paragraph">{advice.bad_advice}</p>
                  <div className="delete-holder">
                    <a
                      className="delete"
                      onClick={() => deleteAdvice(String(advice._id))}
                    >
                      Delete
                    </a>
                  </div>
                </div>
              );
            })
          : null}
      </main>
    </div>
  );
};

export default Dashboard;
