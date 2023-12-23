import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../image/logo1.png';

const Admin = () => {
  const handleLogout = () => {
  };

  return (
    <Container className="d-flex flex-column min-vh-100">
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">          
              <img src={logo} alt="Logo" style={{ height: '80px', width: 'auto', marginRight: '10px' }} />
              <h3>Admin</h3>
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
                    <h6>Selamat Datang, Admin!</h6>
                  </span>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/Admin">
                    <h6>Home</h6>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/menu">
                    <h6>Menu</h6>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/AddOrder">
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
        Kami memahami bahwa makanan bukan sekadar kebutuhan, tetapi juga pengalaman. Dengan bangga kami menghadirkan kepada Anda cita rasa yang tak terlupakan dalam suasana yang hangat dan bersahabat. Restoran kami menggabungkan keahlian kuliner dengan sentuhan kreatif, menciptakan pengalaman kuliner yang luar biasa.
      </p>
      <h2>About Us</h2>
      <Row>
        <Col>
          <p>
            Restoran kami menyajikan berbagai hidangan lezat dan berkualitas tinggi. Dengan menggunakan bahan-bahan segar dan diproses dengan teliti, kami berkomitmen untuk memberikan pengalaman kuliner yang istimewa kepada setiap pelanggan.
          </p>
        </Col>
        <Col>
          <p>
            Keahlian para koki kami dalam menciptakan hidangan unik dan menggugah selera menjadikan restoran kami tempat yang sempurna untuk menikmati makanan berkualitas dalam suasana yang nyaman dan menyenangkan.
          </p>
        </Col>
      </Row>
      </div>
      <hr />
      <footer>
        <p>copyright &copy; 2023 Nocturnals</p>
      </footer>
    </Container>
  );
};

export default Admin;