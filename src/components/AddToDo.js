import React, { useState } from 'react';
import { useDispatch} from 'react-redux';

import { addTodo } from '../Actions/index';

const AddTodo = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  return (
    <div >
      <div>
        <div>
          <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button
                       onClick={() => {
                        input.trim()
                          ? dispatch(addTodo({ id:Math.random(), text: input, complete: false }))
                          : alert(' enter a text');
                        setInput('');
                      }}>
              Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
