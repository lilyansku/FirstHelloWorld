import React from 'react';
import Greeting from './components/Greeting';
import ThemeToggle from './components/ThemeToggle';
import LoginMessage from './components/LoginMessage';
import TodoList from './components/TodoList';

function App() {
  const isLoggedIn = true;
  const todos = ["Study", "Eat", "Sleep", "Walk", "Read", "Relax"];

  return (
    <div>
      <p>Hello, World!</p>
      <Greeting name="Angelika" />
      <ThemeToggle />
      <LoginMessage isLoggedIn={isLoggedIn} />
      <h2>Your tasks for today</h2>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;