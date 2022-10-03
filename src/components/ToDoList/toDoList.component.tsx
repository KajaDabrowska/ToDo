import { useState } from "react";
import uuid from "react-uuid";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";

import crossIcon from "../../images/icon-cross.svg";

import "./toDoList.styles.css";

import { ToDoType } from "../ToDo/todo.component";

type Props = {
  toDoArr: ToDoType[];
  toDoArrDisplayed: ToDoType[];
  setToDoArr: React.Dispatch<React.SetStateAction<ToDoType[]>>;
  setToDoArrDisplayed: React.Dispatch<React.SetStateAction<ToDoType[]>>;
};

const ToDoList = ({
  toDoArr,
  toDoArrDisplayed,
  setToDoArr,
  setToDoArrDisplayed,
}: Props) => {
  function handleDragEnd(result: DropResult) {
    if (!result.destination) return;
    const items = Array.from(toDoArrDisplayed);

    // Remove it by it's source index
    const [reorderedItem] = items.splice(result.source.index, 1);

    // Put it in the destination index
    items.splice(result.destination.index, 0, reorderedItem);

    setToDoArrDisplayed(items);
  }

  const Item = ({ id, completed, text }: ToDoType) => {
    const [checked, setChecked] = useState(completed);

    const handleCheck = () => {
      setChecked((prev) => !prev);

      const updatedToDosDisplay = toDoArrDisplayed.map((toDo) => {
        if (toDo.id === id) toDo.completed = !toDo.completed;

        return toDo;
      });

      setToDoArrDisplayed(updatedToDosDisplay);
    };

    const deleteToDo = () => {
      const updatedToDos = toDoArr.filter((toDo) => toDo.id !== id);
      const updatedToDosDisplay = toDoArrDisplayed.filter(
        (toDo) => toDo.id !== id
      );
      setToDoArrDisplayed(updatedToDosDisplay);
      setToDoArr(updatedToDos);
    };

    return (
      <>
        <input
          type="checkbox"
          name={id}
          id={id}
          checked={checked}
          onChange={handleCheck}
          className="checkbox"
        />
        <label htmlFor={id} className="text txt-fix">
          {text}
        </label>

        <button className="delete-btn btn" onClick={deleteToDo}>
          <img src={crossIcon} alt="delete toDo task" className="delete" />
        </button>
      </>
    );
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      {/* i add a role list because when u do a list-style: none in Safari/Webkit it makes lists loose semantics */}
      <Droppable droppableId={uuid()}>
        {(provided) => (
          <ul
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="list"
          >
            {toDoArrDisplayed.map((toDo, idx) => (
              <Draggable draggableId={toDo.id} index={idx} key={toDo.id}>
                {(provided) => (
                  <li
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    className="item"
                  >
                    <Item
                      id={toDo.id}
                      completed={toDo.completed}
                      text={toDo.text}
                    />
                  </li>
                )}
              </Draggable>
            ))}

            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default ToDoList;
