import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UpdateMenu = ({ menuData, onUpdate }) => {
  const [selectedMenu, setSelectedMenu] = useState({
    id: '',
    name: '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedMenu({
      ...selectedMenu,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedMenu.name || !selectedMenu.price) {
      alert('Nama dan harga menu harus diisi!');
      return;
    }

    onUpdate(selectedMenu);

    setSelectedMenu({
      id: '',
      name: '',
      price: '',
    });
  };

  return (
    <div>
      <h2>Update Menu</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Nama Menu</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukkan nama menu"
            name="name"
            value={selectedMenu.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formPrice">
          <Form.Label>Harga</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukkan harga menu"
            name="price"
            value={selectedMenu.price}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Update
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

export default UpdateMenu;