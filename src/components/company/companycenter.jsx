import React, { useContext, useState, useEffect } from "react";
import Sidebar from "../sidebar/sidebar";
import NavBar from "../navbar/navbar";
import "./styles.css";
import { Configuration } from "../api/configuration";
import { DefaultApi } from "../api/api";
import { UserContext } from "../../context/UserContext";
import "rc-tooltip/assets/bootstrap.css";
import Tooltip from "rc-tooltip";
import SingleUserView from "./singleuserview";
import Filters from "../center/filters";

const CompanyCenter = () => {
  const [tasks, setTasks] = useState([]);
  const [token] = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [loaded, setLoaded] = useState(false);

  const openapiConfig = new Configuration();
  openapiConfig.basePath = "https://productivity-pzaiolprqa-uc.a.run.app";
  openapiConfig.baseOptions = {
    headers: {
      Authorization:
        "Bearer " +
        (token !== null && token.account_type === "company"
          ? token.access_token
          : token),
    },
  };
  const openapi = new DefaultApi(openapiConfig);

  const getTasks = async () => {
    openapi
      .getEmployeesTasksApiEmployeesTasksGet()
      .then((response) => {
        setTasks(response.data);
      })
      .catch(() => {
        setErrorMessage("Something went wrong. Couldn't load the tasks");
      });
  };

  useEffect(() => {
    getTasks();
  }, []);

  const [stats, setStats] = useState(null);
  const [percent, setPercent] = useState(0);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    let allToDo = 0,
      allInProgress = 0,
      allDone = 0;
    const newArray = tasks.map((val) => {
      let toDo = 0;
      let inProgress = 0;
      let done = 0;
      val.tasks.forEach((tval) => {
        if (tval.state === "To do") toDo++;
        if (tval.state === "In progress") inProgress++;
        if (tval.state === "Done") done++;
      });
      allToDo += toDo;
      allInProgress += inProgress;
      allDone += done;
      return [toDo, inProgress, done];
    });

    setStats(newArray);
    setLoaded(true);
    if (allToDo + allInProgress + allDone !== 0) {
      const tmpPercent = Math.round(
        100 * (allDone / (allToDo + allInProgress + allDone)),
      );
      setPercent(tmpPercent);
    }
  }, [tasks]);

  const [singleUser, setSingleUser] = useState(null);

  const handleOpenTasks = (ind) => {
    setSingleUser(ind);
  };

  return (
    <>
      {loaded ? (
        <>
          <div className="table-background">
            <div className="page-middle">
              {singleUser !== null ? (
                <SingleUserView
                  tasks={tasks}
                  ind={singleUser}
                  setSingleUser={setSingleUser}
                  name={tasks[singleUser].name}
                />
              ) : (
                tasks.map((val, ind) => (
                  <Tooltip
                    placement="top"
                    overlay={<span>Click to see more details</span>}
                    overlayClassName="custom-tooltip"
                    key={ind}
                  >
                    <div
                      className="employee-grid-element"
                      key={ind}
                      onClick={() => handleOpenTasks(ind)}
                    >
                      <div className="name-block">
                        {val.name === "" ? "Your employee" : val.name}
                      </div>

                      <div className="tasks-block">
                        <TableElement
                          name="To do"
                          id="todo"
                          stats={stats[ind][0]}
                        />
                        <TableElement
                          name="In progress"
                          id="inprogress"
                          stats={stats[ind][1]}
                        />
                        <TableElement
                          name="Done"
                          id="done"
                          stats={stats[ind][2]}
                        />
                      </div>
                    </div>
                  </Tooltip>
                ))
              )}
            </div>
          </div>
          <NavBar
            title={"My employees"}
            mode={"company"}
            searchName={searchName}
            setSearch={setSearchName}
          />
          <Sidebar percent={percent} setMyProfile={() => {}} />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

const TableElement = ({ name, id, stats }) => {
  return (
    <div className="tasks-column" id={id}>
      <div className="name-in-column">{name}</div>
      <div className="number-tasks">{stats}</div>
    </div>
  );
};

export default CompanyCenter;
