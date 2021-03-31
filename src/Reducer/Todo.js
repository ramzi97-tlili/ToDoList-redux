import {ADD_TASK,DELETE_TASK,COMPLETE_TASK,EDIT_TASK,} from '../Constants/Types';
  
  const initialState = {
   tasks: [
      { id: Math.random(),text:'Wake-Up' ,isDone: false   }
    ,
   ]};
  
  const todo = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TASK:
        return {
          ...state,
          tasks: state.tasks.concat(action.payload),
        }; 
        case DELETE_TASK:
          return {
            ...state,
            tasks: state.tasks.filter((el) => el.id !== action.payload),
          };
          case COMPLETE_TASK:
            return {
              ...state,
              tasks: state.tasks.map((el, i) =>
                el.id === action.payload ? { ...el, complete: !el.complete } : el
              ),
            };
        case EDIT_TASK:
          return {
            ...state,
            tasks: state.tasks.map((el) => el.id === action.payload.id
            ? { ...el, text: action.payload.text }
            : el
        ),
      };
      default:
        return state;
    }
  };
  
  export default todo;