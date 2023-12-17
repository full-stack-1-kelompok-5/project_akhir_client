import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';

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
                <Button variant="warning" onClick={() => handleEdit(menu.id)}>
                  Edit
                </Button>{' '}
                <Button variant="danger" onClick={() => handleDelete(menu.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Menu;