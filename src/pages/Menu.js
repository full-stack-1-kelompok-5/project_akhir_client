import React, { useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import networkFunction from "../network"
import AddMenu from './AddMenu';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  const navigate = useNavigate()
  const [menuData, setMenuData] = useState([
    { id: 1, name: 'Nasi Goreng', price: 15000 },
    { id: 2, name: 'Mie Goreng', price: 12000 },
    { id: 3, name: 'Ayam Bakar', price: 20000 },
    { id: 4, name: 'Sop Buntut', price: 25000 },
    { id: 5, name: 'Sate Ayam', price: 18000 },
  ]);

  const [menu, setMenu] = useState({
    item_name:"",
     price:"",
      image:"",
       adminId:"",
        waitersId:"",
  });
  const onSubmitHandler = (event) => {
    event.preventDefault();
    networkFunction(menu.item_name, menu.price, menu.image, menu.adminId, menu.waitersId);
    navigate("/menu");
  }

  const [showEditModal, setShowEditModal] = useState(false);
  const [editMenu, setEditMenu] = useState({ id: null, name: '', price: '' });

  const handleEdit = (id) => {
    const menuToEdit = menuData.find((menu) => menu.id === id);
    setEditMenu({ ...menuToEdit });
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  const handleSaveEdit = () => {
    const updatedMenuData = menuData.map((menu) =>
      menu.id === editMenu.id ? { ...menu, name: editMenu.name, price: editMenu.price } : menu
    );
    setMenuData(updatedMenuData);
    setShowEditModal(false);
  };

  const handleDelete = (id) => {
    const updatedMenu = menuData.filter((menu) => menu.id !== id);
    setMenuData(updatedMenu);
  };

  const handleAddMenu = (newMenu) => {
    const id = menuData.length + 1;
    const menuWithId = { id, ...newMenu };
    setMenuData((prevMenuData) => [...prevMenuData, menuWithId]);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
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

      <AddMenu onAdd={handleAddMenu} />

      <Modal show={showEditModal} onHide={handleCloseEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Menu</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Menu Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter a menu name"
                value={editMenu.name}
                onChange={(e) => setEditMenu({ ...editMenu, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter menu prices"
                value={editMenu.price}
                onChange={(e) => setEditMenu({ ...editMenu, price: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEditModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <footer style={{ borderTop: '1px solid black', padding: '15px', marginTop: 'auto' }}>
        <p>copyright &copy; 2023 Nocturnals</p>
      </footer>
    </div>
  );
};

export default Menu;