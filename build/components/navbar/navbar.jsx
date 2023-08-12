import React, { useState } from "react";
import "./styles.css";
import SearchBar from "./searchbar";
import DropDown from "./dropdown";

const NavBar = ({
  title,
  tasks,
  searchName,
  setSearch,
  setPriority,
  filterPriority,
  mode,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="navigation-bar">
      <div className={`my-task-text my-task-text-${mode}`}>{title}</div>
      {mode === "user" ? (
        <SearchBar searchName={searchName} setSearch={setSearch} mode={mode} />
      ) : (
        <></>
      )}
      {mode === "user" ? (
        <DropDown
          place={"nb"}
          changeClick={setPriority}
          defaultPriority={filterPriority}
          error={""}
          list={["Low", "Medium", "High"]}
          title={"Priority"}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default NavBar;
