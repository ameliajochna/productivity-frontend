import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import CompanyLogin from "./CompanyLogin";
import CompanyRegister from "./CompanyRegister";
import "./styles.css";
import BigEllipse from "./images/bigellipse.png";
import SmallEllipse from "./images/smallellipse.png";
import Logo from "./images/logo.png";
import Ellipses from "./images/ellipses.png";

const MainPage = () => {
  const [register, setRegister] = useState(false);
  const [companyLogIn, setCompanyLogIn] = useState(false);
  const [companyRegister, setCompanyRegister] = useState(false);

  return (
    <div className="front-page">
      <div className="demo">
        <h2 className="motto">
          Unlock a world of productivity and organization!
        </h2>
        <img className="demo-screenshot" />
        <img src={BigEllipse} alt="" className="big-ellipse-demo" />
        <img src={SmallEllipse} alt="" className="small-ellipse-demo" />
      </div>
      <div className="front-login">
        <span>
          <img src={Logo} alt="" className="login-logo" />
          <img src={Ellipses} alt="" className="login-ellipse" />
        </span>
        {register ? (
          <Register
            setRegister={setRegister}
            setCompanyRegister={setCompanyRegister}
          />
        ) : companyLogIn ? (
          <CompanyLogin
            setCompanyLogIn={setCompanyLogIn}
            setCompanyRegister={setCompanyRegister}
          />
        ) : companyRegister ? (
          <CompanyRegister
            setCompanyRegister={setCompanyRegister}
            setRegister={setRegister}
          />
        ) : (
          <Login setRegister={setRegister} setCompanyLogIn={setCompanyLogIn} />
        )}
      </div>
    </div>
  );
};

export default MainPage;
