import React, { useState, useEffect } from "react";

const SingleUserView = ({ tasks, ind, setSingleUser, name }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (tasks !== null && ind !== null) {
      setData(tasks[ind].tasks);
    }
  }, [tasks]);

  const [list, setList] = useState(null);

  useEffect(() => {
    if (data !== null) {
      const tasksCopy = [...data];
      const todo = tasksCopy.filter((v) => v.state === "To do");
      const inprogress = tasksCopy.filter((v) => v.state === "In progress");
      const done = tasksCopy.filter((v) => v.state === "Done");
      let newList = [
        { title: "To do", items: todo },
        { title: "In progress", items: inprogress },
        { title: "Done", items: done },
      ];
      setList(newList);
    }
  }, [data]);

  return (
    <>
      {list !== null ? (
        <>
          <div className="table-group">
            {list.map((grp, grpI) => {
              return (
                <div key={grpI} id={grpI} className="table">
                  <div className="menu">
                    <div className="menu-text">
                      <header className="title">{grp.title}</header>
                      <p className="description">
                        {grp.items.length}{" "}
                        {grp.items.length === 1 ? "task" : "tasks"}
                      </p>
                    </div>
                    <button className="plus-button" id={grpI} />
                    <button
                      className="item-button-block"
                      style={{ marginTop: "40px" }}
                      id={grpI}
                    />
                  </div>
                  {grp.items.length === 0 ? (
                    <EmptyDescription grpI={grpI} />
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
                      />
                    );
                  })}
                </div>
              );
            })}
          </div>
          <div className="page-blur" id="company" />
          <div className="name-label">
            {name === "" ? "Your employee" : name}
            <br />
            <p className="view-mode-info">View mode</p>
            <button
              className="btn-close-document"
              id="company"
              onClick={() => setSingleUser(null)}
            />
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

const TaskItem = ({ item, grpI }) => {
  const defineColor = (s) => {
    if (s === "Low") return "#6D7C1D";
    else if (s === "Medium") return "#C25600";
    else return "#AF3218";
  };

  return (
    <div
      key={item.id}
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
        <button
          className="item-button-block item-button-block-task"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        />
        <div
          className="dropdown-menu"
          id="delate"
          aria-labelledby="dropdownMenuButton"
        >
          {grpI === 2 ? (
            <></>
          ) : (
            <button className="item-options" id="first">
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
          <button className="item-options">
            Change this task
            <div className="dropdown-icon" id="change" />
          </button>

          <div className="divider" style={{ borderColor: "#C8D7F5" }} />
          <button className="item-options" id={grpI === 2 ? "first" : "second"}>
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

const EmptyDescription = ({ grpI }) => {
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
          <button className="btn-add-to-do">
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

export default SingleUserView;
