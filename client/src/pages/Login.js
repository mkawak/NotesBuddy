import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate, Link} from 'react-router-dom';
import '../App.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('server/login/', {
                username: username,
                password: password
            });
            localStorage.setItem('token', response.data.token.access);
            navigate('/notes');
        } catch (error) {
            alert(error.response.data.error);
        }
    };

    return (
        <div className="auth-container">
            <h2 className="auth-title">Login</h2>
            <form onSubmit={handleLogin}>
                <div className="auth-form-group">
                    <label>
                        <p>Username</p>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    </label>
                    <label>
                        <p>Password</p>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </label>
                    <button type="submit" className="auth-submit-button">Log In</button>
                    <Link to="/signup" className="auth-alternate-link">Don't have an account? Signup</Link>
                </div>
            </form>
        </div>
    );
};

export default Login;
