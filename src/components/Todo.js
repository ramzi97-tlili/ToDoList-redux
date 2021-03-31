import React from 'react';
import { useDispatch } from 'react-redux';
import { completeTodo, deleteTodo } from '../Actions/index';
import EditTodo from "../components/EditTask"
const Todo = ({task}) => {
  const dispatch = useDispatch();  return (
    <div>
      <h1 style={{ textDecoration: task.complete ? 'line-through' : 'none' }}> {task.text} </h1>
    <div className="box">
      <div><button onClick={() => dispatch(completeTodo(task.id))}>
        {" "}
        {task.complete ? "Undo" : "Complete"}{" "}
        </button>
        </div>  
        <div>
          <button onClick={() => dispatch(deleteTodo(task.id))}>
            delete Task
            </button> 
            </div>
        <div>
        <EditTodo task={task} />
      </div>

      </div>
</div>

  );
};
export default Todo;