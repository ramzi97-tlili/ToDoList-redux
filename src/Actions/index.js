import {ADD_TASK,DELETE_TASK,COMPLETE_TASK, EDIT_TASK,} from '../Constants/Types';
  
  export const addTodo = (payload) => {
    return { type: ADD_TASK, 
      payload };
  };
  export const deleteTodo = (payload) => {
    return {
         type: DELETE_TASK, 
        payload};
  };
  
  export const completeTodo = (payload) => {
    return {
         type: COMPLETE_TASK, 
         payload };
  };
  
  export const editTodo = (payload) => {
    return {
         type: EDIT_TASK,
         payload };
        };