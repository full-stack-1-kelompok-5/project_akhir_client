import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate, Link, useParams } from "react-router-dom";
import {
  loginAdmin,
  loginWaiters,
  loginKitchen,
  putAccessToken,
} from "../network";

function Login() {
  const { role } = useParams();
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  async function onSubmitHandler(event) {
    event.preventDefault();
    if (role === "admin") {
      const response = await loginAdmin({ Email, Password });
      if (response?.data?.token) {
        putAccessToken(response.data.token);
        navigate("/admin");
      }
    } else if (role === "waiters") {
      const response = await loginWaiters({ Email, Password });
      if (response?.data?.token) {
        putAccessToken(response.data.token);
        navigate("/waiters");
      }
    } else if (role === "kitchen") {
      const response = await loginKitchen({ Email, Password });
      if (response?.data?.token) {
        putAccessToken(response.data.token);
        navigate("/kitchen");
      }
    }
  }

  return (
    <div style={{ marginTop: "200px" }}>
      <strong className="fs-1 text-center text-light">Log in</strong>
      <Form
        className="row px-1 g-3 m-5 text-light col-md-4 mx-auto"
        onSubmit={(event) => {
          onSubmitHandler(event);
        }}
      >
        <Form.Group className="row-md-6 text-start">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
            value={Email}
            required
          />
        </Form.Group>

        <Form.Group className="row-md-6 text-start">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            value={Password}
            required
          />
        </Form.Group>
        <Form.Group>
          {Email && Password ? (
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
