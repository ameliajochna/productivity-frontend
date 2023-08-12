import React, { useState, useEffect } from "react";
import DropDownAtom from "./images/dropdown.png";
import DropUpAtom from "./images/dropup.png";

const DropDown = ({
  place,
  changeClick,
  defaultPriority,
  error,
  list,
  title,
  isOpen,
  setIsOpen,
  companyName,
  setCompanyName,
}) => {
  const [clicked, setClicked] = useState("");

  useEffect(() => {
    setClicked(defaultPriority);
  }, [defaultPriority]);

  const handleClick = (name) => {
    setClicked(name);
    changeClick(name);
    setIsOpen(false);
    if (place === "reg") setCompanyName(name);
  };

  const handleChangeCompanyName = (e) => {
    setCompanyName(e.target.value);
    setIsOpen(true);
  };

  return (
    <>
      {clicked && place !== "reg" ? (
        <p className="drop-down-description" id={place}>
          {title}
        </p>
      ) : (
        <></>
      )}
      <div className="dropdown-bar" id={place}>
        <button
          className={`dropdown-btn ${clicked ? "dropdown-clicked" : ""} ${
            isOpen ? "dropdown-open" : ""
          } ${error ? "dropdown-error" : ""} `}
          id={place}
          onClick={() => setIsOpen(!isOpen)}
        >
          {place === "reg" ? (
            <input
              name="companyName"
              type="name"
              value={companyName}
              onChange={(e) => handleChangeCompanyName(e)}
              placeholder="E.g Productivity Ltd"
              className="login-input"
              id="company"
            />
          ) : (
            <p
              className={`dropdown-bar-text  ${
                clicked ? "dropdown-bar-text-clicked" : ""
              }`}
            >
              {clicked ? clicked : title}
            </p>
          )}
          <img
            className="dropdown-atom"
            src={isOpen ? DropUpAtom : DropDownAtom}
            alt=""
          />
        </button>
        {isOpen ? (
          <div className="dropdown-list" id={place}>
            {list.map((name, nameI) => {
              return (
                <DropdownElement
                  key={nameI}
                  name={name}
                  handleClick={handleClick}
                  clicked={clicked}
                  place={"reg"}
                />
              );
            })}
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

const DropdownElement = ({ name, handleClick, clicked, place }) => {
  return (
    <ul
      id={name}
      className="dropdown-element"
      onClick={() =>
        handleClick(place === "reg" ? name : name === clicked ? "" : name)
      }
    >
      <p className="dropdown-text">
        {place === "reg" ? name : clicked === name ? "None" : name}
      </p>
    </ul>
  );
};

export default DropDown;
