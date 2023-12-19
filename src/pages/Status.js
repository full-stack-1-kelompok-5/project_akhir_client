import React, { useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Status = () => {
  const [orders, setOrders] = useState([
    { id: 1, menu: 'Nasi Goreng', quantity: 2, status: 'Cooking' },
    { id: 2, menu: 'Soto Ayam', quantity: 1, status: 'Ready' },
    { id: 3, menu: 'Mie Goreng', quantity: 3, status: 'Pending' },
  ]);

  const updateStatus = (orderId, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <Container>
      <h1>Kitchen Status</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID Pesanan</th>
            <th>Menu</th>
            <th>Jumlah</th>
            <th>Status</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.menu}</td>
              <td>{order.quantity}</td>
              <td>{order.status}</td>
              <td>
                <Button
                  variant="success"
                  onClick={() => updateStatus(order.id, 'Cooking')}
                  disabled={order.status === 'Cooking'}
                >
                  Cooking
                </Button>{' '}
                <Button
                  variant="info"
                  onClick={() => updateStatus(order.id, 'Ready')}
                  disabled={order.status === 'Ready'}
                >
                  Ready
                </Button>{' '}
                <Button
                  variant="danger"
                  onClick={() => updateStatus(order.id, 'Cancelled')}
                  disabled={order.status === 'Cancelled'}
                >
                  Cancel
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      
      <div className="mb-3">
        <Link to="/kitchen">
          <Button variant="success">Kembali Ke Kitchen</Button>
        </Link>
      </div>
    </Container>
  );
};

export default Status;