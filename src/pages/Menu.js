import React, { useState } from 'react';
import { Table, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Menu = () => {
  const [menuData, setMenuData] = useState([
    { id: 1, name: 'Nasi Goreng', price: 15000 },
    { id: 2, name: 'Mie Goreng', price: 12000 },
    { id: 3, name: 'Ayam Bakar', price: 20000 },
    { id: 4, name: 'Sop Buntut', price: 25000 },
    { id: 5, name: 'Sate Ayam', price: 18000 },
  ]);

  const handleEdit = (id) => {
    console.log(`Edit menu with ID ${id}`);
  };

  const handleDelete = (id) => {
    const updatedMenu = menuData.filter((menu) => menu.id !== id);
    setMenuData(updatedMenu);
  };

  return (
    <div>
      <h1>Menu Page</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {menuData.map((menu) => (
            <tr key={menu.id}>
              <td>{menu.id}</td>
              <td>{menu.name}</td>
              <td>{menu.price}</td>
              <td>
                <Button variant="danger" onClick={() => handleDelete(menu.id)}>
                  Delete
                </Button>
                <Button variant="warning" onClick={() => handleEdit(menu.id)}>
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Row className="mb-3">
        <Col>
          <Link to="/Admin">
            <Button variant="success">Back</Button>
          </Link>
        </Col>
        <Col>
          <Link to="/AddMenu">
            <Button variant="success">TambahMenu</Button>
          </Link>
        </Col>

      </Row>
    </div>
  );
};

export default Menu;