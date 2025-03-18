import React from 'react';

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  );
}

export default TodoList;