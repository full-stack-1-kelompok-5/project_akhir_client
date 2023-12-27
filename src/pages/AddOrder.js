import React, { useState, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddOrder = () => {
  const [menuItems] = useState([
    { id: 1, name: 'Nasi Goreng', price: 15000 },
    { id: 2, name: 'Mie Goreng', price: 12000 },
    { id: 3, name: 'Ayam Bakar', price: 20000 },
    { id: 4, name: 'Sop Buntut', price: 25000 },
    { id: 5, name: 'Sate Ayam', price: 18000 },
  ]);

  const [orders, setOrders] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleMenuChange = (e) => {
    setSelectedMenu(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value, 10));
  };

  const handleAddOrder = () => {
    if (selectedMenu && quantity > 0) {
      const selectedMenuItem = menuItems.find((item) => item.id.toString() === selectedMenu);
      if (selectedMenuItem) {
        const newOrder = {
          menu: selectedMenuItem.name,
          quantity,
          price: selectedMenuItem.price,
          total: selectedMenuItem.price * quantity,
          createdAt: new Date().toLocaleString(),
          status: 'Order', // Set status to 'Order' directly
        };

        setOrders((prevOrders) => [...prevOrders, newOrder]);
        setSelectedMenu('');
        setQuantity(1);
      }
    }
  };

  return (
    <Container className="d-flex flex-column min-vh-100">
      <h1>Place Your Order</h1>
      <Form>
        <Form.Group controlId="formMenu">
          <Form.Label>Select Menu</Form.Label>
          <Form.Control as="select" onChange={handleMenuChange} value={selectedMenu}>
            <option value="" disabled>Select a menu</option>
            {menuItems.map((menuItem) => (
              <option key={menuItem.id} value={menuItem.id.toString()}>
                {menuItem.name} - {menuItem.price} IDR
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="formQuantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type="number"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleAddOrder} id="orderButton">
          Add to Order
        </Button>
      </Form>
      <br />
      <div className="flex-grow-1">
        {/* You can add a different layout or components here if needed */}
        <Link to="/OrderList">
          <Button variant="primary">
            Back to OrderList
          </Button>
        </Link>
      </div>
      <hr />
      <footer>
        <p>copyright &copy; 2023 Nocturnals</p>
      </footer>
    </Container>
  );
};

export default AddOrder;