import React, { Fragment, useState } from "react";
import nextId from "react-id-generator";

import { ToDoType } from "../ToDo/todo.component";

import "./todo-input.styles.css";

type Props = {
  setToDoArr: React.Dispatch<React.SetStateAction<ToDoType[]>>;
  setToDoArrDisplayed: React.Dispatch<React.SetStateAction<ToDoType[]>>;
};

const Input = ({ setToDoArr, setToDoArrDisplayed }: Props) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const addToDo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!value) return;

    const toDo = {
      text: value,
      id: nextId(),
      completed: false,
    };

    setToDoArr((prev) => [...prev, toDo]);

    setToDoArrDisplayed((prev) => [...prev, toDo]);

    // Clear
    setValue("");
  };

  return (
    <Fragment>
      <form onSubmit={addToDo} className="form">
        <label htmlFor="input" className="input-label">
          <div className="sr-only">Create a new todo...</div>
        </label>
        <input type="checkbox" disabled className="checkbox checkbox--fake" />
        <input
          placeholder="Create a new todo..."
          type="text"
          className="input "
          id="input"
          onChange={handleChange}
          value={value}
          autoComplete="off"
        />
      </form>
    </Fragment>
  );
};

export default Input;
