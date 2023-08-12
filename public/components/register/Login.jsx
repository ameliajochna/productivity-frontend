import React, { useState, useContext } from "react";
import ErrorMessage from "./ErrorMessage";
import { UserContext } from "../../context/UserContext";
import { DefaultApi } from "../api/api";
import { Configuration } from "../api/configuration";

const Login = ({ setRegister, setCompanyLogIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [, setUserToken] = useContext(UserContext);
  const [passwordType, setPasswordType] = useState("password");

  const openapiConfig = new Configuration();
  openapiConfig.basePath = "https://productivity-pzaiolprqa-uc.a.run.app";

  const openapi = new DefaultApi(openapiConfig);

  const submitLogin = async () => {
    openapi
      .generateTokenApiTokenPost("user", email, password)
      .then((response) => {
        setUserToken(response.data);
      })
      .catch((error) => {
        setErrorMessage(error.response.data.detail);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
    if (password === "" || email === "")
      setErrorMessage("You need to fill both email and password");
    else submitLogin();
  };

  const changePasswordType = () => {
    if (passwordType === "password") setPasswordType("text");
    else setPasswordType("password");
  };

  const handleKey = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <div className="login-form">
      <label className="title-login">Welcome back and be productive!</label>
      <div className="field">
        <label className="login-label">Email address *</label>
        <div
          className="login-field"
          style={{
            border:
              errorMessage === "" ? "1px solid #1B3D84" : "1px solid #AF3218",
          }}
        >
          <input
            name="email"
            type="email"
            placeholder="E.g. productivity@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
          />
        </div>
      </div>

      <div className="field">
        <label className="login-label">Password *</label>
        <div
          className="login-field"
          style={{
            border:
              errorMessage === "" ? "1px solid #1B3D84" : "1px solid #AF3218",
          }}
          onKeyUp={(e) => handleKey(e)}
        >
          <input
            name="password"
            type={passwordType}
            placeholder="Enter at least 8 digits"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
          <button
            className={`show-password ${
              passwordType === "text" ? "show-closed" : ""
            }`}
            onClick={() => changePasswordType()}
          />
        </div>
      </div>

      <ErrorMessage message={errorMessage} />
      <br />
      <button className="submit-login" onClick={(e) => handleSubmit(e)}>
        Log in
        <span className="login-icon"></span>
      </button>
      <div className="no-account-info">
        Don't have an account?
        <button
          className="no-account-register"
          onClick={() => setRegister(true)}
        >
          Register
        </button>
      </div>
      <div className="no-account-info" style={{ marginTop: "2%" }}>
        Are you a company?
        <button
          className="no-account-register"
          onClick={() => setCompanyLogIn(true)}
        >
          Log in as a company
        </button>
      </div>
    </div>
  );
};

export default Login;
