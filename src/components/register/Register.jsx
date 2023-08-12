import React, { useContext, useEffect, useState } from "react";
import { Configuration } from "../api/configuration";
import { DefaultApi } from "../api/api";
import { UserContext } from "../../context/UserContext";
import ErrorMessage from "./ErrorMessage";
import Rules from "./Rules";
import DropDown from "../navbar/dropdown";
import Tooltip from "rc-tooltip";

const Register = ({ setRegister, setCompanyRegister }) => {
  const openapiConfig = new Configuration();
  openapiConfig.basePath = "https://productivity-pzaiolprqa-uc.a.run.app";
  const openapi = new DefaultApi(openapiConfig);

  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const [errorMessage, setErrorMessage] = useState(["", "", "", "", ""]);
  const [token, setToken] = useContext(UserContext);
  const [passwordType, setPasswordType] = useState("password");
  const [privacy, setPrivacy] = useState(false);
  const [termsOfService, setTermsOfService] = useState(false);

  const submitRegistration = async () => {
    const hashed_password = password;
    openapi
      .createUserApiUsersPost({ email, hashed_password, name })
      .then((response) => {
        setToken(response.data);
        if (companyName !== "") {
          const ind = allCompanies.filter((v) => v.name === companyName);
          if (ind.length > 0) {
            const company_id = ind[0].id;
            const user_email = email;
            openapi
              .createEmployeeApiEmployeesPost({ company_id, user_email })
              .then((response) => {})
              .catch((error) => {});
          }
        }
      })
      .catch((error) => {
        setErrorMessage(error.response.data.detail);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let ErrorCopy = ["", "", "", "", ""];
    let error = false;
    if (!checkbox) {
      error = true;
      ErrorCopy[3] =
        "You must agree to our terms and conditions to create an account. Please check this box.";
    }
    if (password.length < 8) {
      error = true;
      ErrorCopy[2] = "Please enter at least 8 characters.";
    }

    if (!email.includes("@")) {
      error = true;
      ErrorCopy[1] =
        "The email is missing an @. Please complete the email with the missing character.";
    }
    if (email.length === 0) {
      error = true;
      ErrorCopy[1] = "Please enter your email.";
    }

    if (name.length === 0) {
      error = true;
      ErrorCopy[0] = "Please enter your name.";
    }

    if (companyName !== "") {
      const ind = allCompanies.filter((v) => v.name === companyName);
      if (ind.length === 0) {
        ErrorCopy[4] = "There is no such company registered.";
      }
    }
    setErrorMessage(ErrorCopy);
    if (!error) submitRegistration();
  };

  const changePasswordType = () => {
    if (passwordType === "password") setPasswordType("text");
    else setPasswordType("password");
  };

  const handleCompanyRegister = () => {
    setRegister(false);
    setCompanyRegister(true);
  };

  const [allCompanies, setAllCompanies] = useState([]);
  const [companies, setCompanies] = useState([]);

  const getCompanies = async () => {
    openapi
      .getAllCompaniesApiCompaniesNamesGet()
      .then((response) => {
        setCompanies(response.data);
        setAllCompanies(response.data);
      })
      .catch((error) => {
        // console.log(error.response.data.detail);
      });
  };

  useEffect(() => {
    getCompanies();
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [companyName, setCompanyName] = useState("");

  const [companyNames, setCompanyNames] = useState([]);

  useEffect(() => {
    let newArray;
    if (companies.length > 3) {
      newArray = companies.slice(0, 3);
    } else {
      newArray = companies;
    }

    const namesOnly = newArray.map((v) => {
      return v.name;
    });
    setCompanyNames(namesOnly);
  }, [companies]);

  useEffect(() => {
    let data = allCompanies;
    if (companyName !== "")
      data = allCompanies.filter((v) => v.name.startsWith(companyName));

    setCompanies(data);
  }, [companyName]);

  const [error, setError] = useState(false);
  useEffect(() => {
    if (errorMessage[4] !== "") setError(true);
    else setError(false);
  }, [errorMessage]);
  return (
    <>
      <div className="register-form">
        <h3 className="title-login" style={{ marginTop: "-2%" }}>
          Complete the form below to get started
        </h3>
        <div className="field" style={{ marginTop: "-2%" }}>
          <label className="login-label">Company's name (optional)</label>
          <Tooltip
            placement="right"
            overlay={
              <span>
                Your employer will be able to see all your tasks
                <br />
                and your progress.
              </span>
            }
            overlayClassName="custom-tooltip"
          >
            <div className="login-field" id="company">
              <DropDown
                place="reg"
                changeClick={setCompany}
                defaultPriority=""
                error={error}
                list={companyNames}
                title={"E.g. Productivity"}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                companyName={companyName}
                setCompanyName={setCompanyName}
              />
            </div>
          </Tooltip>
          {errorMessage[4] !== "" ? (
            <ErrorMessage message={errorMessage[4]} />
          ) : (
            <></>
          )}

          <div className="field">
            <label className="login-label">Name *</label>
            <div
              className="login-field"
              style={{
                border:
                  errorMessage[0] === ""
                    ? "1px solid #1B3D84"
                    : "1px solid #AF3218",
              }}
            >
              <input
                name="name"
                type="name"
                placeholder="E.g. Emilie"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="login-input"
              />
            </div>
            {errorMessage[0] !== "" ? (
              <ErrorMessage message={errorMessage[0]} />
            ) : (
              <></>
            )}
          </div>
          <label className="login-label">Email address *</label>
          <div
            className="login-field"
            style={{
              border:
                errorMessage[1] === ""
                  ? "1px solid #1B3D84"
                  : "1px solid #AF3218",
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
          {errorMessage[1] !== "" ? (
            <ErrorMessage message={errorMessage[1]} />
          ) : (
            <></>
          )}
        </div>

        <div className="field">
          <label className="login-label">Password *</label>
          <div
            className="login-field"
            style={{
              border:
                errorMessage[2] === ""
                  ? "1px solid #1B3D84"
                  : "1px solid #AF3218",
            }}
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
          {errorMessage[2] !== "" ? (
            <ErrorMessage message={errorMessage[2]} />
          ) : (
            <></>
          )}
        </div>
        <div>
          <label
            className="terms"
            style={{
              border: errorMessage[3] === "" ? "none" : "1px solid #AF3218",
            }}
          >
            <input
              name="rules"
              type="checkbox"
              className="terms-checkbox"
              onClick={() => setCheckbox(!checkbox)}
            />
            <span className="checkmark" />
            <p className="agreement">
              I agree to{" "}
              <button
                className="no-account-register"
                onClick={() => setTermsOfService(true)}
              >
                Terms of Service
              </button>{" "}
              and{" "}
              <button
                className="no-account-register"
                onClick={() => setPrivacy(true)}
              >
                Privacy Policy.
              </button>
            </p>
          </label>
        </div>
        {errorMessage[3] !== "" ? (
          <ErrorMessage message={errorMessage[3]} />
        ) : (
          <></>
        )}
        <br />
        <button className="submit-login" onClick={(e) => handleSubmit(e)}>
          Sign in
          <span className="login-icon"></span>
        </button>
        <p className="account-info">
          Do you already have an account?
          <button
            className="no-account-register"
            onClick={() => setRegister(false)}
          >
            Log in
          </button>
        </p>
        <p className="account-info" style={{ marginTop: "-10px" }}>
          Do you want to register as a company?
          <button
            className="no-account-register"
            onClick={() => handleCompanyRegister()}
          >
            Register
          </button>
        </p>
      </div>
      {termsOfService ? (
        <Rules type={0} setWindow={setTermsOfService} />
      ) : (
        <></>
      )}
      {privacy ? <Rules type={1} setWindow={setPrivacy} /> : <></>}
    </>
  );
};

export default Register;
