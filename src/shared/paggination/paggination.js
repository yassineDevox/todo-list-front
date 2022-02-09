import React, { useState } from 'react';

const Paggination = ({ currentPage, onPageIndexChange }) => {

    const [CP, setCP] = useState(currentPage);

    const handleClickPrev = () => {
        let newCurrentPage = currentPage - 1
        if (newCurrentPage % 5 === 0) {
            setCP(CP - 5)
        }
        onPageIndexChange(newCurrentPage)
    }
    const handleClickNext = () => {

        if (currentPage % 5 === 0) {
            setCP(currentPage + 1)
        }
        onPageIndexChange(currentPage + 1)
    }

    const Goto = (pageIndex) => {
        onPageIndexChange(pageIndex)
    }

    return (
        <nav aria-label="Page navigation example">
            <br />
            <ul className="pagination justify-content-center">
                <li
                    onClick={handleClickPrev}
                    className="page-item disabled">
                    <button className="btn btn-light" >Previous</button>
                </li>
                {[0, 1, 2, 3, 4].map(i => <li
                    key={i}
                    className={i + CP === currentPage ? "page-item active" : "page-item"}
                    onClick={() => Goto(i + CP)}>
                    <a className="page-link" style={{ cursor: "pointer" }}>
                        {i + CP}
                    </a>
                </li>)}
                <li className="page-item disabled"
                    onClick={handleClickNext}>
                    <button className='btn btn-light'>Next</button>
                </li>
            </ul>
        </nav>

    );
};

export default Paggination;
