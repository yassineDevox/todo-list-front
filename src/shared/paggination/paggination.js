import React from 'react';

const Paggination = ({ currentPage }) => {

    let list = []
    for (let i = 1; i <= currentPage + 5; i++) {
        list.push((
            <li className={currentPage == i ? "page-item active" : "page-item"}>
                <a className="page-link" href="#">
                    {i}
                </a>
            </li>))
    }
    return (
        <nav aria-label="Page navigation example">
            <br />
            <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                    <a className="page-link">Previous</a>
                </li>
                {list}
                <li className="page-item disabled">
                    <a className="page-link" href="#">Next</a>
                </li>
            </ul>
        </nav>

    );
};

export default Paggination;
