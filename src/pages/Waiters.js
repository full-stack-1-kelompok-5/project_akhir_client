import React, { useState } from 'react';
import { Container, Row, Col, Nav, Card, Button } from 'react-bootstrap';

const Waiters = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [menuItems] = useState([
    { id: 1, name: 'Nasi Goreng', price: 15000 },
    { id: 2, name: 'Mie Goreng', price: 12000 },
    { id: 3, name: 'Ayam Bakar', price: 20000 },
    { id: 4, name: 'Sop Buntut', price: 25000 },
    { id: 5, name: 'Sate Ayam', price: 18000 },
  ]);

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  const formatRupiah = (amount) => {
    const formatter = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    });

    return formatter.format(amount);
  };

  const renderMenuItems = () => {
    return menuItems.map((item) => (
      <Col key={item.id} lg={4} md={6} className="mb-4">
        <Card>
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>Price: {formatRupiah(item.price)}</Card.Text>
            <Button variant="primary" onClick={() => handleOrder(item)}>
              Add to Order
            </Button>
          </Card.Body>
        </Card>
      </Col>
    ));
  };

  const handleOrder = (selectedItem) => {
    // Implement logic to add the selected item to the order
    console.log('Adding to order:', selectedItem);
  };

  return (
    <Container fluid>
      <h1 className="mt-4">Waiters Page</h1>

      <Row className="mb-3">
        <Col>
          <Nav fill variant="tabs">
            <Nav.Item>
              <Nav.Link active={activeTab === 'home'} onClick={() => handleTabChange('home')}>
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link active={activeTab === 'order'} onClick={() => handleTabChange('order')}>
                Order
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>

      {activeTab === 'home' && (
        <Row>
          <Col>
            <p>Welcome to the Waiters Home Page. Heheheh....</p>
          </Col>
        </Row>
      )}

      {activeTab === 'order' && (
        <Row>
          {renderMenuItems()}
        </Row>
      )}
    </Container>
  );
};

export default Waiters;