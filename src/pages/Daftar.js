import React, { useState } from 'react';
import { Form, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

const Daftar = () => {
    const[username,setUsername] = useState('');
    const[email,setEmail]       = useState('');
    const[password,setPassword] = useState('');

    const changeUsername = (e) => {
        const value = e.target.value
        setUsername(value)
    }

    const changeEmail = (e) => {
        const value = e.target.value
        setEmail(value)
    }

    const changePassword = (e) => {
        const value = e.target.value
        setPassword(value)
    }

    return (
        <div style={{marginTop: '170px'}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="">
                            <div className="">
                                <div className="form-group">
                                    <h2 style={{ color: 'white' }}>Daftar</h2>
                                    <div className="row-md-6 text-start">
                                    <label style={{ color: 'white' }}>Username</label>
                                    </div>
                                    <input type="text" placeholder="Username" className="form-control" value={username} onChange={changeUsername} />
                                </div>

                                <div className="form-group">
                                    <div className="row-md-6 text-start">
                                    <label style={{ color: 'white' }}>Email</label>
                                    <input type="text" placeholder="Email" className="form-control" value={email} onChange={changeEmail} />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="row-md-6 text-start">
                                    <label style={{ color: 'white' }}>Password</label>
                                    <input type="Password" placeholder="Password" className="form-control" value={password} onChange={changePassword}/>
                                    </div>
                                </div>
                                <Form>
                                <Link to="/login" className="text">
                                <button className="btn btn-primary col-10 mb-1">Daftar</button>
                                </Link>
                                </Form>
                                <Form>
                                    <Link to="/" className="text">
                                    <button className="btn btn-primary col-10 mb-1">Batal</button>
                                    </Link>
                                </Form>
                                <Form>
                                    <div className="text-start text-light">
                                        Jika mempunyai akun,{" "}
                                        <Link to="/login" className="text">
                                        <strong>Login</strong>
                                        </Link>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Daftar;