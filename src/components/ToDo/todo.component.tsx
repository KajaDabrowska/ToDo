import { useState } from "react";

import Input from "../ToDoInput/todo-input.component";
import ToDoList from "../ToDoList/toDoList.component";
import ToDoFilter from "../ToDoFilter/ToDoFilter.component";

import mainImg from "../../images/bg-desktop-light.jpg";
import moonIcon from "../../images/icon-moon.svg";
import sunIcon from "../../images/icon-sun.svg";

import "./todo.styles.css";

export type ToDoType = {
  text: string;
  id: string;
  completed: boolean;
};

const ToDo = () => {
  const [toDoArr, setToDoArr] = useState<ToDoType[]>([]);
  const [toDoArrDisplayed, setToDoArrDisplayed] = useState<ToDoType[]>([]);
  const [isDarkTheme, setisDarkTheme] = useState(false);
  const [currentFilter, setCurrentFilter] = useState("all");

  const completed = toDoArr.filter((item) => item.completed);
  const uncompleted = toDoArr.filter((item) => !item.completed);
  const uncompletedAmount = uncompleted.length;

  const handleClearCompleted = () => {
    setToDoArr(uncompleted);
    setToDoArrDisplayed(uncompleted);
    setCurrentFilter("all");
  };

  const handleFilter = (option: string) => {
    if (option === "all") {
      setToDoArrDisplayed(toDoArr);
      setCurrentFilter("all");
    } else if (option === "active") {
      setToDoArrDisplayed(uncompleted);
      setCurrentFilter("active");
    } else if (option === "completed") {
      setToDoArrDisplayed(completed);
      setCurrentFilter("completed");
    }
  };

  const handleThemeChange = () => {
    setisDarkTheme((prev) => !prev);
  };

  const theme = isDarkTheme ? "dark-mode" : "";

  return (
    <>
      <div className={`background ${theme}`}>
        <img alt="" className="bg-image" src={mainImg} />
        <div className="container">
          <div className={`toDoContainer`}>
            <div className="title-and-toggle flex-apart">
              <h1 className="title">TODO</h1>
              <button onClick={handleThemeChange} className="btn theme-btn">
                <img
                  src={isDarkTheme ? sunIcon : moonIcon}
                  alt="toggle theme"
                />
              </button>
            </div>

            <Input
              setToDoArr={setToDoArr}
              setToDoArrDisplayed={setToDoArrDisplayed}
            />

            <div className="list-and-bar">
              <ToDoList
                toDoArr={toDoArr}
                toDoArrDisplayed={toDoArrDisplayed}
                setToDoArr={setToDoArr}
                setToDoArrDisplayed={setToDoArrDisplayed}
              />

              <div className="left-and-clear flex-apart">
                <p className="left txt-fix">{uncompletedAmount} items left</p>

                {/* <ToDoFilter
                  handleFilter={handleFilter}
                  currentFilter={currentFilter}
                /> */}

                <button
                  className="clear-btn btn txt-fix"
                  onClick={handleClearCompleted}
                >
                  Clear Completed
                </button>
              </div>
            </div>

            {/*TODO the filter is part of bar above it in desktop view  */}
            <ToDoFilter
              handleFilter={handleFilter}
              currentFilter={currentFilter}
            />
          </div>

          <p className="drag-and-drop">Drag and drop to reorder list</p>
        </div>
      </div>
    </>
  );
};

export default ToDo;

//TODO
//DONE -items left (not completed todos)
//DONE all, active, complited filter
//DONE delete all completed
//DONE drag and drop
// hold shift
//DONE light and dark mode
// Prevent from adding to much or give a scroll
// small mobile fixes
//DONE box shadow fix
// filter part of container upper it on desktop
// add ts
