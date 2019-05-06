import React, { useState } from 'react';
import './App.css';

const Todo = ({ todo }) => <div className='todo'>{todo.text}</div>;

function App() {
  const [todos, setTodos] = useState([
    { text: 'Eat' },
    { text: 'Programming' },
    { text: 'Repeat' },
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  return (
    <div className='app'>
      <div className='todo-list'>
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
      </div>
    </div>
  );
}
export default App;
