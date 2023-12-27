import React, { useState, useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  const handleDeleteOrder = (index) => {
    const updatedOrders = [...orders];
    updatedOrders.splice(index, 1);
    setOrders(updatedOrders);
  };

  const handleUpdateStatus = (index, newStatus) => {
    const updatedOrders = [...orders];

    // Adding logic to disable "Preparing" status if the order status is "Ready"
    if (newStatus === 'Ready' && updatedOrders[index].status !== 'Preparing') {
      updatedOrders[index].statusPreparingDisabled = true;
    }

    // Adding logic to disable "Cooking" status if the order status is "Ready"
    if (newStatus === 'Cooking' && updatedOrders[index].status === 'Ready') {
      alert('Order is already ready, cannot be cooked again.');
      return;
    }

    updatedOrders[index].status = newStatus;
    setOrders(updatedOrders);
  };

  useEffect(() => {
    // Simulating data fetch or initialization
    const initialOrders = [
      {
        menu: 'Nasi Goreng',
        quantity: 2,
        price: 15000,
        total: 30000,
        createdAt: '2023-01-01 12:30 PM',
        status: 'Order',
      },
      {
        menu: 'Soto Ayam',
        quantity: 1,
        price: 12000,
        total: 12000,
        createdAt: '2023-01-01 01:45 PM',
        status: 'Preparing',
      },
      {
        menu: 'Mie Goreng',
        quantity: 3,
        price: 13000,
        total: 39000,
        createdAt: '2023-01-01 02:15 PM',
        status: 'Ready',
      },
      {
        menu: 'Ayam Bakar',
        quantity: 1,
        price: 20000,
        total: 20000,
        createdAt: '2023-01-01 03:00 PM',
        status: 'Ready',
      },
      {
        menu: 'Sop Buntut',
        quantity: 2,
        price: 25000,
        total: 50000,
        createdAt: '2023-01-01 04:30 PM',
        status: 'Order',
      },
    ];

    setOrders(initialOrders);
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <Container className="d-flex flex-column min-vh-100">
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
                    disabled={
                      order.status === 'Preparing' ||
                      order.status === 'Ready' ||
                      order.statusPreparingDisabled
                    }
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
                  {/* Adding Cooking button with disabled logic */}
                  <Button
                    variant="btn btn-primary mr-1"
                    onClick={() => handleUpdateStatus(index, 'Cooking')}
                    disabled={order.status === 'Ready'}
                  >
                    Cooking
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
        <Link to="/AddOrder">
          <Button variant="primary m-3">
            Add Order
          </Button>
        </Link>
        <Link to="/waiters">
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