import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const OrderList = () => {
  const [menuItems] = useState([
    { id: 1, name: 'Nasi Goreng', price: 15000 },
    { id: 2, name: 'Soto Ayam', price: 12000 },
    { id: 3, name: 'Mie Goreng', price: 13000 },
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

  const handleDeleteOrder = (index) => {
    const updatedOrders = [...orders];
    updatedOrders.splice(index, 1);
    setOrders(updatedOrders);
  };

  const handleUpdateStatus = (index, newStatus) => {
    const updatedOrders = [...orders];

    // Menambahkan logika untuk mengatur status "Preparing" menjadi disabled jika status order adalah "Ready"
    if (newStatus === 'Ready' && updatedOrders[index].status !== 'Preparing') {
      updatedOrders[index].statusPreparingDisabled = true;
    }

    updatedOrders[index].status = newStatus;
    setOrders(updatedOrders);
  };

  useEffect(() => {
    // Automatically click the "Order" button when the first order is created
    if (orders.length === 1) {
      document.getElementById('orderButton').click();
    }
  }, [orders]);

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
        <h2>Your Orders</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Menu</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
              <th>Created At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order.menu}</td>
                <td>{order.quantity}</td>
                <td>{order.price} IDR</td>
                <td>{order.total} IDR</td>
                <td>{order.createdAt || 'N/A'}</td>
                <td>
                  <Button
                    variant="btn btn-warning mr-1"
                    onClick={() => handleUpdateStatus(index, 'Preparing')}
                    disabled={order.status === 'Preparing' || order.status === 'Ready' || order.statusPreparingDisabled}
                  >
                    Preparing
                  </Button>
                  <Button
                    variant="btn btn-success mr-1"
                    onClick={() => handleUpdateStatus(index, 'Ready')}
                    disabled={order.status === 'Ready'}
                  >
                    Ready
                  </Button>
                  <Button
                    variant="primary mr-1"
                    onClick={() => handleDeleteOrder(index)}
                  >
                    Clear
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDeleteOrder(index)}
                    disabled={order.status === 'Ready'}
                  >
                    Cancel
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Link to="/Waiters">
          <Button variant="primary">
            Back to Home
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

export default OrderList;