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
      <h2>Tambah Menu</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Nama Menu</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukkan nama menu"
            name="name"
            value={newMenu.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formPrice">
          <Form.Label>Harga</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukkan harga menu"
            name="price"
            value={newMenu.price}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <Link to="/Menu">
        <Button variant="danger" className="mt-3">
          Kembali ke Menu
        </Button>
      </Link>
    </div>
  );
};

export default AddMenu;