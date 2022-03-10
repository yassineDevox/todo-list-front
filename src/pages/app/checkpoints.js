import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import CheckpointsTable from "../../components/table-checkpoints";
import "./../../assets/style/checkpoints.css";

export const Checkpoints = () => {

  const call = useDispatch()
  
  useEffect(()=>{
    call()
  },[])

  return (
    <>
      {/* tabs  */}
      <nav className="tabs">
        <ul>
          <li>Checkpoints to validate</li>
          <li>Closed checkpoints</li>
          <li>Unlocked checkpoints</li>
        </ul>
      </nav>
      {/* filters */}
      <div className="list-filters">
        <div className="filters-container">
          <div className="filter filter-active">
            <span>Student Name</span>
            <span>
              <i className="fas fa-arrow-down" />
            </span>
          </div>
          <div className="filter-values filter-values-active">
            <div className="search-filter">
              <i className="fas fa-search" />
              <input type="search" placeholder="Type in to search" />
            </div>
            <div className="filter-choices filter-choices-active">
              <div className="filter-choice-item">
                <label>
                  <input type="radio" name="radio-button" defaultValue="css" />
                  <span>Contains</span>
                </label>
              </div>
              <div className="filter-choice-item">
                <label>
                  <input type="radio" name="radio-button" defaultValue="no" />
                  <span>Does not contains</span>
                </label>
              </div>
            </div>
            <div className="actions">
              <button className="cancel">Cancel</button>
              <button className="add add-active">Add</button>
            </div>
          </div>
        </div>
        <div className="filters-container">
          <div className="filter">
            <span>Track</span>
            <span>
              <i className="fas fa-arrow-down" />
            </span>
          </div>
          <div className="filter-values">
            <div className="search-filter">
              <i className="fas fa-search" />
              <input type="search" placeholder="Type in to search" />
            </div>
            <div className="filter-choices">
              <div className="filter-choice-item">
                <label>
                  <input type="radio" name="radio-button" defaultValue="css" />
                  <span>Contains</span>
                </label>
              </div>
              <div className="filter-choice-item">
                <label>
                  <input type="radio" name="radio-button" defaultValue="no" />
                  <span>Does not contains</span>
                </label>
              </div>
            </div>
            <div className="actions">
              <button className="cancel">Cancel</button>
              <button className="add add-active">Add</button>
            </div>
          </div>
        </div>
        <div className="filters-container">
          <div className="filter">
            <span>Checkpoint Name</span>
            <span>
              <i className="fas fa-arrow-down" />
            </span>
          </div>
          <div className="filter-values">
            <div className="search-filter">
              <i className="fas fa-search" />
              <input type="search" placeholder="Type in to search" />
            </div>
            <div className="filter-choices">
              <div className="filter-choice-item">
                <label>
                  <input type="radio" name="radio-button" defaultValue="css" />
                  <span>Contains</span>
                </label>
              </div>
              <div className="filter-choice-item">
                <label>
                  <input type="radio" name="radio-button" defaultValue="no" />
                  <span>Does not contains</span>
                </label>
              </div>
            </div>
            <div className="actions">
              <button className="cancel">Cancel</button>
              <button className="add add-active">Add</button>
            </div>
          </div>
        </div>
        <div className="filters-container">
          <div className="filter">
            <span>Status</span>
            <span>
              <i className="fas fa-arrow-down" />
            </span>
          </div>
          <div className="filter-values">
            <div className="search-filter">
              <i className="fas fa-search" />
              <input type="search" placeholder="Type in to search" />
            </div>
            <div className="filter-choices">
              <div className="filter-choice-item">
                <label>
                  <input type="radio" name="radio-button" defaultValue="css" />
                  <span>Contains</span>
                </label>
              </div>
              <div className="filter-choice-item">
                <label>
                  <input type="radio" name="radio-button" defaultValue="no" />
                  <span>Does not contains</span>
                </label>
              </div>
            </div>
            <div className="actions">
              <button className="cancel">Cancel</button>
              <button className="add add-active">Add</button>
            </div>
          </div>
        </div>
      </div>
      {/* table */}
      <CheckpointsTable />
    </>
  );
};
