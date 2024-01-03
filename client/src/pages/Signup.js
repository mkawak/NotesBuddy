import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate, Link} from 'react-router-dom';
import '../App.css';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('server/signup/', {
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
            <h2 className="auth-title">Signup</h2>
            <form onSubmit={handleSubmit}>
                <div className="auth-form-group">
                    <label>
                        <p>Username</p>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        <p>Password</p>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                    <button type="submit" className="auth-submit-button">Sign Up</button>
                    <Link to="/login" className="auth-alternate-link">Already have an account? Login</Link>
                </div>
            </form>
        </div>
    );
};
export default Signup;
