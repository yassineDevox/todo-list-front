import "./spinner.css"
import React from 'react';

export const Spinner = ({color="success"}) => {
    return (
        <div className={`spinner-border text-${color}`} role="status">
            <span className="sr-only">Loading...</span>
        </div>
    );
};
