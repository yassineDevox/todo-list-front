import React from 'react';

const Todo = (props) => {

  const handleClickDelete = () => {
    if (window.confirm("Are you sure ?"))
      props.handleDelete(props.id)
  }

  const handleClickEdit = () => {
    props.handleEdit(props.id, props.title, props.isCompleted)
  }

  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'
      >
      <span className={
        props.isCompleted ? "text-decoration-line-through fs-5":"fs-5"
      }>{props.title}</span>
      <div>
        <button className='btn btn-danger me-2 p-1' style={{opacity:.8}}
          onClick={handleClickDelete}> <i className="fas fa-trash"></i> </button>
        <button className='btn btn-warning p-1' style={{opacity:.8}}
          data-bs-toggle="modal" data-bs-target="#exampleModal"
          onClick={handleClickEdit}> <i className="fas fa-edit"></i> </button>
      </div>
    </li>
  );
};

export default Todo;
