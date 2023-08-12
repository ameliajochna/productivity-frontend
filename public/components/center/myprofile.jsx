import React, { useEffect, useState } from "react";
import { Configuration } from "../api/configuration";
import { DefaultApi } from "../api/api";
import ErrorMessage from "../register/ErrorMessage";

const MyProfile = ({ token, setMyProfile }) => {
  const openapiConfig = new Configuration();
  openapiConfig.basePath = "https://productivity-pzaiolprqa-uc.a.run.app";
  openapiConfig.baseOptions = {
    headers: {
      Authorization:
        "Bearer " +
        (token !== null && token.account_type === "user"
          ? token.access_token
          : token),
    },
  };
  const openapi = new DefaultApi(openapiConfig);

  const [userId, setUserId] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState("");

  const closeProfile = () => {
    setMyProfile(false);
  };

  const getUser = async () => {
    openapi.getUserApiUsersMeGet().then((response) => {
      setEmail(response.data.email);
      setUserId(response.data.id);
    });
  };

  useEffect(() => {
    getUser();
  }, []);

  const changePassword = async () => {
    const new_password = newPassword;
    const confirm_password = confirmPassword;
    openapi
      .updatePasswordApiUsersUserIdPut(userId, {
        email,
        password,
        new_password,
        confirm_password,
      })
      .then(() => {
        setMessage("Password successfully changed.");
      })
      .catch((error) => {
        setErrorMessage(error.response.data.detail);
      });
  };

  return (
    <div className="page-blur">
      <div className="popup-window">
        <button
          className="btn-close-document"
          id="btn"
          onClick={() => setMyProfile(false)}
        />
        <br />
        <div className="popup-form">
          <div
            className="login-label"
            style={{ marginTop: "20px", marginBottom: "20px" }}
          >
            Current email: {email}
          </div>

          <div className="field">
            <label className="login-label">Password</label>
            <div className="login-field">
              <input
                type="password"
                placeholder="Enter Current Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="login-input"
              />
            </div>
          </div>

          <div className="field">
            <label className="login-label">New Password</label>
            <div className="login-field">
              <input
                type="password"
                placeholder="Enter New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="login-input"
              />
            </div>
          </div>

          <div className="field">
            <label className="login-label">Confirm New Password</label>
            <div className="login-field">
              <input
                type="password"
                placeholder="Enter New Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="login-input"
              />
            </div>
          </div>

          <button
            onClick={() => changePassword()}
            style={{ marginTop: "40px", marginBottom: "20px" }}
            className="submit-login"
          >
            Change my password
          </button>
          <ErrorMessage message={errorMessage} />
          {errorMessage === "" ? (
            <div className="login-label">{message}</div>
          ) : (
            <></>
          )}
          <br />
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
