import React, { useState } from "react";
import ShowList from "./ShowList";

const Todo = () => {
  const [inputList, setInputList] = useState([]);
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    if (inputList.length > 0) {
      setItems((prevState) => {
        return [...prevState, inputList];
      });
    }

    setInputList("");
  };

  const deleteItem = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };
  console.log(items.length);
  return (
    <>
      <div className="main-div">
        <div className="center-divi">
          <h2>Todo List</h2>
          <div className="flex-p">
            <input
              className="showinp"
              type="text"
              placeholder="Add a Item"
              onChange={itemEvent}
              value={inputList}
            />
            <button onClick={listOfItems}>+</button>
          </div>
          <ul>
            {items.length !== 0
              ? items.map((valItem, index) => (
                  <ShowList
                    text={valItem}
                    key={index}
                    id={index}
                    onSelect={deleteItem}
                  />
                ))
              : "please type something"}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Todo;
