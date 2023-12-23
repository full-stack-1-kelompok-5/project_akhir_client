import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../image/logo1.png';

const Waiters = () => {
  const handleLogout = () => {
  };

  return (
    <Container className="d-flex flex-column min-vh-100">
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">          
            <img src={logo} alt="Logo" style={{ height: '80px', width: 'auto', marginRight: '10px' }} />
            <h3>Waiters</h3>
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
                    <h6>Selamat Datang, Waiters!</h6>
                  </span>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/waiters">
                    <h6>Home</h6>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/order">
                    <h6>Order</h6>
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
      <div className="flex-grow-1">
      <h1>Welcome to Our Restaurant</h1>
      <p>
        <strong>Selamat Datang Di Restoran</strong>
      </p>
      <p>
      Kami menghargai peran Anda dalam menyajikan hidangan lezat kepada para pelanggan kami. Dengan keahlian dan dedikasi Anda, kami memberikan pengalaman kuliner yang tak terlupakan. Dapur kami adalah tempat kreativitas kuliner berkumpul, dan kami bangga dapat bekerja bersama Anda untuk menciptakan pengalaman makanan yang istimewa.
      </p>
      <h2>About Us</h2>
      <Row>
        <Col>
          <p>
          Tim dapur kami berdedikasi untuk menyajikan hidangan dengan cita rasa yang unik dan menggugah selera. Kami menggunakan bahan-bahan segar dan diproses dengan teliti, berkomitmen untuk memberikan pengalaman kuliner yang istimewa kepada setiap pelanggan.
          </p>
        </Col>
        <Col>
          <p>
          Dapur kami adalah tempat di mana ide-ide kuliner bermekaran. Kami senantiasa berusaha untuk memberikan pengalaman makanan yang tak terlupakan bagi setiap pelanggan yang datang ke restoran kami. Terima kasih atas dedikasi Anda dalam menjaga kualitas makanan dan menciptakan suasana yang nyaman di restoran kami.
          </p>
        </Col>
      </Row>
      </div>
      <div>
      </div>
      <hr />
      <footer>
        <p>copyright &copy; 2023 Nocturnals</p>
      </footer>
    </Container>
  );
};

export default Waiters;