import React from 'react';

function TodoList({ todos }) {
  return (
    <div>
      <h2>ToDoList</h2>
      <h3>Your tasks for today:</h3>
      <ul>
        {todos.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;