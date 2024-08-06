import React, { useState } from "react";

const Header = ( ) => {
  const [formOpen, setFormOpen] = useState(true);

  const handleSearch = () => {
    setFormOpen(!formOpen);
  };
  return (
    <nav className="navbar navbar-expand-lg custom-nav position-fixed top-0 end-0">
      <div className="container-fluid">
        <div
          className={`header-search ${
            formOpen ? "d-none d-md-inline-block" : "d-inline-block"
          }`}
        >
          <form className={`custome-form`}>
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
        <ul className="navbar-nav ms-auto flex-row">
          <li className="nav-item d-inline-block d-md-none">
            <button
              className="nav-link"
              onClick={handleSearch}
            >
              <i className="bi bi-search"></i>
            </button>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">
              <i className="bi bi-envelope"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="bi bi-gear"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="bi bi-bell"></i>
            </a>
          </li>
          <li className="nav-item dropdown ms-2">
            <a
              className="nav-link p-0"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="/images/customer1.png"
                alt="user-icon"
                className="img-fluid"
              />
            </a>
            <ul
              className="dropdown-menu  position-absolute"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <a className="dropdown-item" href="#">
                  <i className="bi bi-person me-2"></i> Personal Info
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <i className="bi bi-envelope me-2"></i> Contact Us
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
