import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Modal from 'react-modal';

import { editTodo } from '../Actions/index';

const customStyles = {
  content: {
    top: '40%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const EditTodo = ({ task }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [editInput, setEditInput] = useState('');
  const dispatch = useDispatch();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setEditInput('');
  };

  return (
    <div>
      <button className="btn" onClick={openModal}>
       Edit Task
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h3 >
          Edit To Do
        </h3>
        <form>
          <input
            type="text"
            id="ModalInput"
            placeholder={task.text}
            value={editInput}
            onChange={(event) => setEditInput(event.target.value)}
          />
          <button
            onClick={() => {dispatch(editTodo({id: task.id,text: editInput,}))
              closeModal();
              setEditInput('');
            }}
          >
            Submit
          </button>
          <button className="Modal-Btn" onClick={closeModal}>
            close
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default EditTodo;