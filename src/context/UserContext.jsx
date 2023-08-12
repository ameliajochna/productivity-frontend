import React, { createContext, useEffect, useState } from "react";
import { Configuration } from "../../src/components/api/configuration";
import { DefaultApi } from "../../src/components/api/api";
export const UserContext = createContext();

export const UserProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem("productivityToken"));

  const openapiConfig = new Configuration();
  openapiConfig.basePath = "https://productivity-pzaiolprqa-uc.a.run.app";
  openapiConfig.baseOptions = {
    headers: {
      Authorization: "Bearer " + (token === null ? token : token.access_token),
    },
  };
  const openapi = new DefaultApi(openapiConfig);

  useEffect(() => {
    const fetchUser = async () => {
      openapi
        .getUserApiUsersMeGet()
        .then(() => {})
        .catch(() => {
          setToken(null);
        });
      localStorage.setItem("productivityToken", token);
    };
    fetchUser();
  }, [token]);

  return (
    <UserContext.Provider value={[token, setToken]}>
      {props.children}
    </UserContext.Provider>
  );
};
