import React, { useEffect, useRef, useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { DefaultApi } from "../api/api";
import { Configuration } from "../api/configuration";
import "rc-tooltip/assets/bootstrap.css";
import Tooltip from "rc-tooltip";
import "./styles.css";
import Sidebar from "../sidebar/sidebar";
import Popup from "./popup";
import MyProfile from "./myprofile";
import NavBar from "../navbar/navbar";
import Filters from "./filters";
import LoadingPage from "./loading";
import ChatGPT from "./chatgpt";

export function calculatePercent(toDo, inProgress, done) {
  let tasksCnt = toDo.length + inProgress.length + done.length;
  if (tasksCnt === 0) return 0;
  else return Math.round((done.length / tasksCnt) * 100);
}

export function dataToList(todo, inprogress, done) {
  let newList = [
    { title: "To do", items: todo },
    { title: "In progress", items: inprogress },
    { title: "Done", items: done },
  ];
  return newList;
}

export const Center = () => {
  const [token] = useContext(UserContext);
  const [loaded, setLoaded] = useState(false);
  const [percent, setPercent] = useState(0);
  const [, setErrorMessage] = useState("");
  const [datavar, setDataVar] = useState([]);

  const [filterName, setFilterName] = useState("");
  const [filterPriority, setFilterPriority] = useState("");

  useEffect(() => {
    getTasks();
  }, []);

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

  const handleDelete = async (id) => {
    openapi
      .deleteTaskApiTasksTaskIdDelete(id)
      .then(() => {
        getTasks();
      })
      .catch(() => {
        setErrorMessage("Failed to delete");
      });
  };

  const getTasks = async () => {
    openapi
      .getTasksApiTasksGet()
      .then((response) => {
        setDataVar(response.data);
        getList(response.data);
        setLoaded(true);
      })
      .catch(() => {
        setErrorMessage("Something went wrong. Couldn't load the tasks");
      });
  };

  useEffect(() => {
    getTasks();
  }, []);

  const [list, setList] = useState([]);

  const getList = (data) => {
    console.log(data);
    setDataVar(data);
    const tasksCopy = [...data];
    const todo = tasksCopy.filter((v) => v.state === "To do");
    const inprogress = tasksCopy.filter((v) => v.state === "In progress");
    const done = tasksCopy.filter((v) => v.state === "Done");

    setList(dataToList(todo, inprogress, done));
    console.log(todo, inprogress, done);
    setPercent(calculatePercent(todo, inprogress, done));
  };

  const [dragging, setDragging] = useState(false);

  const dragItem = useRef();
  const dragNode = useRef();

  const [popWindow, setPop] = useState(false);
  const popGroup = useRef();

  let dragImg;

  useEffect(() => {
    dragImg = new Image(0, 0);
    dragImg.src =
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
  });

  const handleDragStart = (e, p) => {
    e.dataTransfer.setDragImage(dragImg, 0, 0);
    dragNode.current = e.target;
    dragNode.current.addEventListener("dragend", handleDragEnd);
    dragItem.current = p;

    setTimeout(() => {
      setDragging(true);
    }, 0);
  };

  const onUpdate = (task) => {
    datavar.map((v) => {
      if (v.id === task.id) return task;
    });
    getList(datavar);
    handleUpdate(task);
  };

  const handleUpdate = async (task) => {
    const state = task.state;
    const title = task.title;
    const description = task.description;
    const priority = task.priority;
    openapi
      .updateTaskApiTasksTaskIdPut(task.id, {
        state,
        title,
        description,
        priority,
      })
      .then((response) => {
        // console.log(response);
      })
      .catch(() => {
        setErrorMessage("Couldn't update");
      });
  };

  const handleDragEnter = (e, p) => {
    if (
      dragging &&
      dragNode.current &&
      dragItem.current &&
      p.grpI !== dragItem.current.grpI
    ) {
      const copyList = [...list];
      let heldItem =
        copyList[dragItem.current.grpI].items[dragItem.current.itemI];
      if (p.grpI === 0) heldItem.state = "To do";
      else if (p.grpI === 1) heldItem.state = "In progress";
      else heldItem.state = "Done";

      datavar.map((e) => {
        if (e.id === heldItem.id) return heldItem;
        else return e;
      });
      getList(datavar);
      onUpdate(heldItem);
      dragItem.current = p;
    }
  };

  const handleDragEnd = () => {
    setDragging(false);
    dragItem.current = null;
    dragNode.current.removeEventListener("dragend", handleDragEnd);
    dragNode.current = null;
  };

  const defineColor = (s) => {
    if (s === "Low") return "#6D7C1D";
    else if (s === "Medium") return "#C25600";
    else return "#AF3218";
  };

  const [editItem, setEditItem] = useState(null);
  const [edit, setEdit] = useState(false);

  const openPopUp = (p) => {
    setPop(true);
    popGroup.current = p;
  };

  const closePopUp = () => {
    setPop(false);
    setEdit(false);
    setEditItem(null);
    getTasks();
  };

  const handleEdit = (item) => {
    setEdit(true);
    setEditItem(item);
    setPop(true);
  };

  const moveToNext = (grpI, itemI) => {
    let itemCopy = list[grpI].items[itemI];
    if (itemCopy.state === "To do") itemCopy.state = "In progress";
    else if (itemCopy.state === "In progress") itemCopy.state = "Done";
    else return;
    datavar.map((e) => {
      if (e.id === itemCopy.id) return itemCopy;
      else return e;
    });
    getList(datavar);
    onUpdate(itemCopy);
  };

  const moveAllNext = (grpI) => {
    let length = list[grpI].items.length;
    for (let i = length - 1; i >= 0; i--) moveToNext(grpI, i);
  };

  const deleteAll = async (grpI) => {
    let lenght = list[grpI].items.length;
    for (let i = lenght - 1; i >= 0; i--) {
      let id = list[grpI].items[i].id;
      await handleDelete(id);
    }
  };

  const [myprofile, setMyProfile] = useState(false);

  return (
    <>
      {loaded && list ? (
        <>
          <div className="table-backgroud">
            <Filters
              filterName={filterName}
              filterPriority={filterPriority}
              setFilterName={setFilterName}
              setFilterPriority={setFilterPriority}
              data={datavar}
              setList={setList}
            />
            <div className="table-group">
              {list.map((grp, grpI) => {
                return (
                  <div
                    key={grpI}
                    onDragOver={
                      dragging && !grp.items.length
                        ? (e) => handleDragEnter(e, { grpI, itemI: 0 })
                        : null
                    }
                    onDrop={
                      dragging && !grp.items.length
                        ? (e) => handleDragEnter(e, { grpI, itemI: 0 })
                        : null
                    }
                    id={grpI}
                    className="table"
                    style={{
                      height: filterName || filterPriority ? "95%" : "100%",
                      marginTop: filterName || filterPriority ? "35px" : "0px",
                    }}
                  >
                    <div className="menu">
                      <div className="menu-text">
                        <header className="title">{grp.title}</header>
                        <p className="description">
                          {grp.items.length}{" "}
                          {grp.items.length === 1 ? "task" : "tasks"}
                        </p>
                      </div>
                      <Tooltip
                        placement="top"
                        overlay={<span>Add a task</span>}
                        overlayClassName="custom-tooltip"
                      >
                        <button
                          className="plus-button"
                          onClick={() => openPopUp(grpI)}
                          id={grpI}
                        />
                      </Tooltip>

                      <Tooltip
                        placement="top"
                        overlay={<span>More options</span>}
                        overlayClassName="custom-tooltip"
                      >
                        <button
                          className="item-button-block"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          style={{ marginTop: "40px" }}
                          id={grpI}
                        />
                      </Tooltip>
                      <div
                        className="dropdown-menu"
                        id="mainoptions"
                        aria-labelledby="dropdownMenuButton"
                      >
                        {grpI !== 2 ? (
                          <button
                            className="item-options"
                            id="first"
                            onClick={() => moveAllNext(grpI)}
                          >
                            Move all to {grpI === 0 ? "In progress" : "Done"}
                            <div className="dropdown-icon" id="changemenu" />
                          </button>
                        ) : (
                          <></>
                        )}
                        <button
                          className="item-options item-options-delete"
                          id={grpI}
                          onClick={() => deleteAll(grpI)}
                        >
                          Delete all
                          <div className="dropdown-icon" id="deletemenu" />
                        </button>
                      </div>
                    </div>
                    {grp.items.length === 0 ? (
                      <EmptyDescription grpI={grpI} openPopUp={openPopUp} />
                    ) : (
                      <></>
                    )}
                    {grp.items.map((item, itemI) => {
                      return (
                        <TaskItem
                          key={itemI}
                          item={item}
                          itemI={itemI}
                          grpI={grpI}
                          handleDragStart={handleDragStart}
                          dragging={dragging}
                          handleDragEnter={handleDragEnter}
                          defineColor={defineColor}
                          moveToNext={moveToNext}
                          handleEdit={handleEdit}
                          handleDelete={handleDelete}
                          handleDragEnd={handleDragEnd}
                        />
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
          <ChatGPT />
          <NavBar
            title={"My tasks"}
            tasks={datavar}
            searchName={filterName}
            setSearch={setFilterName}
            setPriority={setFilterPriority}
            filterPriority={filterPriority}
            mode={"user"}
          />
          <Sidebar percent={percent} setMyProfile={setMyProfile} />
          {popWindow ? (
            <>
              <div className="page-blur">
                <Popup
                  token={token}
                  closePopUp={closePopUp}
                  grpI={popGroup.current}
                  edit={edit}
                  item={editItem}
                  handleUpdate={onUpdate}
                  setSearchName={setFilterName}
                  setFilterPriority={setFilterPriority}
                />
              </div>
            </>
          ) : myprofile ? (
            <MyProfile token={token} setMyProfile={setMyProfile} />
          ) : (
            <></>
          )}
        </>
      ) : (
        <LoadingPage />
      )}
    </>
  );
};

const TaskItem = ({
  item,
  itemI,
  grpI,
  handleDragStart,
  dragging,
  handleDragEnter,
  defineColor,
  moveToNext,
  handleEdit,
  handleDelete,
  handleDragEnd,
}) => {
  return (
    <div
      draggable
      key={item.id}
      onDragStart={(e) => handleDragStart(e, { grpI, itemI })}
      onDragOver={
        dragging
          ? (e) => {
              handleDragEnter(e, { grpI, itemI });
            }
          : null
      }
      onDrop={() => handleDragEnd()}
      className={`table-item table-item-${grpI}`}
      data-cy="draggable"
    >
      <div className="priority-block">
        <div
          className="item-priority"
          style={{
            border: "1px solid " + defineColor(item.priority),
          }}
        >
          <p
            className="priority-text"
            style={{
              color: defineColor(item.priority),
            }}
          >
            {item.priority}
          </p>
        </div>

        <Tooltip
          placement="top"
          overlay={<span>More options</span>}
          overlayClassName="custom-tooltip"
        >
          <button
            className="item-button-block item-button-block-task"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          />
        </Tooltip>
        <div
          className="dropdown-menu"
          id="delate"
          aria-labelledby="dropdownMenuButton"
        >
          {grpI === 2 ? (
            <></>
          ) : (
            <button
              className="item-options"
              id="first"
              onClick={() => moveToNext(grpI, itemI)}
            >
              {grpI === 0 ? "Move to In Progress" : "Move to Done"}
              <div
                className="dropdown-icon"
                id="dragging"
                style={{
                  position: "absolute",
                  marginTop: "2px",
                  right: "17px",
                }}
              />
            </button>
          )}

          <div className="divider" style={{ borderColor: "#C8D7F5" }} />
          <button className="item-options" onClick={() => handleEdit(item)}>
            Change this task
            <div className="dropdown-icon" id="change" />
          </button>

          <div className="divider" style={{ borderColor: "#C8D7F5" }} />
          <button
            className="item-options"
            id={grpI === 2 ? "first" : "second"}
            onClick={() => handleDelete(item.id)}
          >
            Delete this task
            <div className="dropdown-icon" id="delete" />
          </button>
        </div>
      </div>
      <div className="item-text">
        {item.title ? <div className="item-title">{item.title}</div> : <></>}
        {item.description ? (
          <div className="item-description">{item.description}</div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

const EmptyDescription = ({ grpI, openPopUp }) => {
  return (
    <div
      className="empty-description"
      style={{ flexDirection: grpI === 0 ? "column" : "row" }}
    >
      {grpI === 0 ? (
        <>
          <h4
            className="inprogress-empty"
            style={{ margin: "auto", display: "" }}
          >
            You don't have any tasks here
          </h4>
          <button className="btn-add-to-do" onClick={() => openPopUp(grpI)}>
            <h4 className="add-to-do-desc">Add new To Do task</h4>
            <div className="add-to-do-icon" />
          </button>
        </>
      ) : (
        <>
          <div className="dragging-icon" />
          <h4 className="inprogress-empty">
            {grpI === 1
              ? "If you are working on a task, drag and drop it here"
              : "If you have finished the task, drag and drop it here"}
          </h4>
        </>
      )}
    </div>
  );
};
