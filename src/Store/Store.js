import { createStore } from 'redux';
import todo from '../Reducer/Todo';

const store = createStore(todo);

export default store;