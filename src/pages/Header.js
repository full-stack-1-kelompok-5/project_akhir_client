import React from 'react';
import logo from '../image/logo1.png'; // Sesuaikan path dan nama file dengan direktori dan nama file Anda.
import { Form, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import "../App.css";

const Header = () => {
  
  return (
    <div className="text-center">
      <img src={logo} alt="Logo" style={{ width: '500px', height: '500px' }} />
      <div class="text-light">
      <Form.Label><h4>Select Login Area</h4></Form.Label>
      <Form>
      <Link to="/login" className="text">
      <button type="button" class="btn btn-secondary btn-lg mr-2">Admin</button>
      <button type="button" class="btn btn btn-secondary btn-lg mr-2">Waiters</button>
      <button type="button" class="btn btn btn-secondary btn-lg">Kitchen</button>
      </Link>
      </Form>
      </div>
    </div>
  );
};
export default Header;