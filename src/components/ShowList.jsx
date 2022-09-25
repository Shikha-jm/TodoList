import React from "react";

function ShowList(props) {
  return (
    <>
      <div className="list">
        <li>{props.text}</li>
        <span
          className="del"
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          X
        </span>
      </div>
    </>
  );
}

export default ShowList;
