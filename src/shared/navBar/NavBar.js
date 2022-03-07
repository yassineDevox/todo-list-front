
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearUserSession } from "redux/ducks/auth";


const NavBar = () => {

    //route
  const navTo = useNavigate();
  //get global state from redux's store
  const user = useSelector((s) => s.auth.user);
  //call redux action
  const call = useDispatch();

  //logout ui action
  const handleClickLogout = () => {
    //call logout action
    call(clearUserSession());
    //redirect to login page
    navTo("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Hello : {user?.firstname}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/todo/all"
              >
                My Tasks
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/todo/add">
                New Task
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button onClick={handleClickLogout} className="btn btn-warning">
              <i className="fas fa-power-off"></i>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
