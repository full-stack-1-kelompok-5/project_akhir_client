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
                        <div className="card">
                            <div className="card-body">
                                <div className="form-group">
                                    <h2>Daftar</h2>
                                    <label>Username</label>
                                    <input type="text" placeholder="Username" className="form-control" value={username} onChange={changeUsername} />
                                </div>

                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="text" placeholder="Email" className="form-control" value={email} onChange={changeEmail} />
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="Password" placeholder="Password" className="form-control" value={password} onChange={changePassword}/>
                                </div>

                                <button className="btn btn-primary col-10 mb-1">Daftar</button>
                                <Form>
                                    <Link to="/login" className="text">
                                    <button className="btn btn-primary col-10 mb-1">Batal</button>
                                    </Link>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Daftar