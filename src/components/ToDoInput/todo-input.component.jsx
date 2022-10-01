import { useState } from "react";
import nextId from "react-id-generator";

import "./todo-input.styles.css";

const Input = ({ setToDoArr, setToDoArrDisplayed }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const addToDo = (e) => {
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
    <>
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
    </>
  );
};

export default Input;
