import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div style={{marginTop: "200px"}}>
      <strong className="fs-1 text-center text-light">Sign In</strong>
      <Form
        className="row px-1 g-3 m-5 text-light col-md-4 mx-auto"
      >
        <Form.Group className="row-md-6 text-start">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            required
          />
        </Form.Group>
        <Form.Group className="row-md-6 text-start">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </Form.Group>
        <Form.Group>
          {username && password ? (
            <Button
              className="col-3 mb-1 btn-outline-primary"
              variant="light"
              type="submit"
            >
              Log In
            </Button>
          ) : (
            <Button
              className="btn btn-primary col-10 mb-1"
              variant="light"
              type="submit"
              disabled
            >
              Log In
            </Button>
          )}
        </Form.Group>
        <div className="line" />
        <Form>
          <div className="text-start">
            Jika tidak mempunyai akun,{" "}
            <Link to="/daftar" className="text">
              <strong>Daftar</strong>
            </Link>
          </div>
        </Form>
      </Form>
    </div>
  );
}

export default Login;