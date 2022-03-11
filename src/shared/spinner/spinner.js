import "./spinner.css"
import React from 'react';

const Spinner = ({color="success"}) => {
    return (
        <div className={`spinner-border text-${color}`} role="status">
            <span className="sr-only">Loading...</span>
        </div>
    );
};

export default Spinner;