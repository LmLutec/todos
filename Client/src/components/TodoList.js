import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Todo from "./Todo";

const TodoList = ({ list }) => {
  return (
    <div>
      <h1>Goals</h1>
      <div className="listContainer">
        {list
          .filter((l) => l.complete === false)
          .map((item) => (
            <Todo key={item._id} item={item} className="listItem" />
          ))}
      </div>
    </div>
  );
};

export default TodoList;
