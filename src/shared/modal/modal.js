import React from 'react';

const Modal = ({ 
    titleRef,
    isTaskCompleted,
    setTaskCompleted,
    handleUpdate }) => {
    return (
        <div className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edit Todo 😃!</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">

                        <input
                            className="form-control m-1"
                            type="text"
                            placeholder="title"
                            ref={titleRef} />

                        <div>
                            <div className="form-check">
                                <input className="form-check-input"
                                    type="radio"
                                    id="flexRadioDefault1"
                                    name="r"
                                    checked={isTaskCompleted}
                                    onChange={
                                        () => setTaskCompleted(!isTaskCompleted)
                                    } />
                                <label className="form-check-label"
                                    htmlFor="flexRadioDefault1">
                                    Completed
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input"
                                    type="radio"
                                    id="flexRadioDefault2"
                                    name="r"
                                    checked={!isTaskCompleted}
                                    onChange={() => setTaskCompleted(!isTaskCompleted)} />
                                <label className="form-check-label"
                                    htmlFor="flexRadioDefault2">
                                    In Progress
                                </label>
                            </div>
                        </div>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary"
                            onClick={handleUpdate}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
