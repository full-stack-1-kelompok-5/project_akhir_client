import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../image/logo1.png';

const Kitchen = () => {
  const handleLogout = () => {
  };

  return (
    <Container>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <img src={logo} alt="Logo" style={{ height: '80px', width: 'auto', marginRight: '10px' }} />
            <h3>Kitchen</h3>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto d-flex align-items-center">
                <li className="nav-item">
                  <span className="nav-link">
                    <h6>Selamat Datang, Kitchen Staff!</h6>
                  </span>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/kitchen">
                    <h6>Home</h6>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Status">
                    <h6>Status</h6>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/" onClick={handleLogout}>
                    <h6>Logout</h6>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <h1>Welcome to Our Kitchen</h1>
      <p>
        <strong>Selamat Datang Di Dapur Kami</strong>
      </p>
      <p>
        Kami memiliki keahlian dalam menyiapkan hidangan lezat dan berkualitas tinggi untuk memuaskan setiap pelanggan. Dengan menggunakan bahan-bahan segar dan proses memasak yang teliti, kami berkomitmen untuk memberikan pengalaman kuliner yang istimewa.
      </p>
      <h2>About Us</h2>
      <Row>
        <Col>
          <p>
            Tim dapur kami berdedikasi untuk menyajikan hidangan dengan cita rasa yang unik dan menggugah selera. Kami memastikan setiap hidangan mencerminkan standar kualitas tertinggi kami.
          </p>
        </Col>
        <Col>
          <p>
            Dapur kami adalah tempat kreativitas kuliner berkumpul. Kami selalu berusaha untuk memberikan pengalaman makanan yang tak terlupakan bagi setiap pelanggan yang datang ke restoran kami.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Kitchen;