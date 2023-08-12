import React, { useContext } from "react";
import MainPage from "./components/register/MainPage";
import { Center } from "./components/center/center";
import CompanyCenter from "./components/company/companycenter";
import { UserContext } from "./context/UserContext";
import "./App.css";

const App = () => {
  const [token] = useContext(UserContext);

  return (
    <React.Fragment>
      {token ? (
        token.account_type === "user" ? (
          <Center />
        ) : (
          <CompanyCenter />
        )
      ) : (
        <MainPage />
      )}
    </React.Fragment>
  );
};

export default App;
