import React from 'react';
import logo from '../image/logo1.png'; 
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";

const Header = () => {
  
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="flex-grow-1">
    <div className="text-center">
      <img src={logo} alt="Logo" style={{ width: '500px', height: '500px' }} />
      <div class="text-light">
      <Form.Label><h4>Select Login Area</h4></Form.Label>
      <Form>
      <Link to="/login/admin" className="text">
      <button type="button" class="btn btn-secondary btn-lg mr-2">Admin</button>
      </Link>
      <Link to="/login/waiters" className="text">
      <button type="button" class="btn btn btn-secondary btn-lg mr-2">Waiters</button>
      </Link>
      <Link to="/login/kitchen" className="text">
      <button type="button" class="btn btn btn-secondary btn-lg">Kitchen</button>
      </Link>
      </Form>
      </div>
    </div>
    </div>
    </div>
  );
};
export default Header;