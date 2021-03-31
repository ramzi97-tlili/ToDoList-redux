import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Todo from '../components/Todo';
import AddTodo from './AddToDo';
const TodoList = () => {
  
  const tasks = useSelector((state) => state.tasks);
  const [filter, setFilter] = useState(false);
  const handleFilter = () => setFilter(!filter);
  return (
    <div>

      <AddTodo  filter={filter} handleFilter={handleFilter} />
      <ul>
        {tasks.map((el, i) => (
          <Todo task={el} />
          
        ))}
      </ul>
  </div>
  );
};

export default TodoList;