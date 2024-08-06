import { React, useState } from "react";
// import { Link } from "react-router-dom";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`side-nav position-fixed ${isOpen ? "text-start" : "text-center close"}`}>
      <button onClick={toggleMenu} className="toggle-btn">
        <i className={`bi ${isOpen ? "bi-x-lg" : "bi-grid"}`}></i>
      </button>
      <div className="d-flex flex-column justify-content-between" style={{height: 'calc(100% - 60px)'}}>
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active">
              <i className="bi bi-house-door-fill"></i>
              <span className="text">Dashboard</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
            <i className="bi bi-clipboard2-data"></i>
            <span className="text">Link2</span>      
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="bi bi-clipboard-check"></i>
              <span className="text">Link3</span>      
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="bi bi-building"></i>
              <span className="text">Link4</span>      
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="bi bi-bag-check"></i>
              <span className="text">Link5</span>      
            </a>
          </li>
        </ul>
        <ul className="nav flex-column">
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="bi bi-box-arrow-right"></i>
              <span className="text">LogOut</span>      
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
