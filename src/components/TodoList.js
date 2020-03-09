import React from 'react';

import Todo from './Todo';

const TodoList = props => {
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
  return (
    <div className="todo-list">
      {props.todo.map(item => (
        <Todo
          key={item.id}
          task={item}
          toggleTask={props.toggleTask}
        />
      ))}
      <button type='button' className="clear-btn" onClick={props.clearItem}>
        Clear task
      </button>
    </div>
  );
};

export default TodoList;