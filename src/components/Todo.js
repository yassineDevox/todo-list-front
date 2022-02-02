import React from 'react';

const Todo = (props) => {
  return (
  <li>
        <span>{props.title}</span>
        <button>DEL</button>
  </li>
  );
};

export default Todo;
