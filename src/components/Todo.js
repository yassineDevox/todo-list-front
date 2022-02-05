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
    <li className='list-group-item d-flex justify-content-between'>
      <span className={props.isCompleted ? "text-decoration-line-through":undefined }>{props.title}</span>
      <div>
        <button className='btn btn-danger me-1'
          onClick={handleClickDelete}>DEL</button>
        <button className='btn btn-warning'
          data-bs-toggle="modal" data-bs-target="#exampleModal"
          onClick={handleClickEdit}>EDIT</button>
      </div>
    </li>
  );
};

export default Todo;
