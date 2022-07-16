import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(...todos);
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);
    setTodos(removedArr);
  };

  const remvoveAll = () => {
    setTodos([]);
}

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <div>
        <img src="https://img.myloview.com/murals/glowing-neon-line-verification-of-delivery-list-clipboard-and-pen-icon-isolated-on-black-background-colorful-outline-concept-vector-400-270190870.jpg" alt="todoIcon" width="200px" height="200px"/>
      </div>
      <h1>Todo List - Add your list here!</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
      />
      <button className="removeAllBtn" onClick={remvoveAll}><span>REMOVE ALL</span></button>
    </>
  );
}

export default TodoList;
