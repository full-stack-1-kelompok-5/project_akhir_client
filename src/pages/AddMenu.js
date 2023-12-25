import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AddMenu = ({ onAdd }) => {
  const [newMenu, setNewMenu] = useState({ name: '', price: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMenu({
      ...newMenu,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newMenu.name || !newMenu.price) {
      alert('Nama dan harga menu harus diisi!');
      return;
    }

    onAdd(newMenu);

    setNewMenu({ name: '', price: '' });
  };

  return (
    <div>
      <h2>Add Menu</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Menu Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter a menu name"
            name="name"
            value={newMenu.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter menu prices"
            name="price"
            value={newMenu.price}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>

      <Link to="/Admin">
        <Button variant="success" className="mt-3">
          Back To Home
        </Button>
      </Link>
    </div>
  );
};

export default AddMenu;