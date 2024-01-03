import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import logo from '../logo/Notes Logo.png';

const Frontpage = () => {
    return (
        <div className="frontpage-container">
            <img src={logo} alt="NotesBuddy Logo" className="frontpage-logo"/>
            <h1 className="frontpage-title">NotesBuddy</h1>
            <Link to="/login" className="frontpage-link">Login</Link>
            <Link to="/signup" className="frontpage-link">Signup</Link>
        </div>
    );
};

export default Frontpage;
