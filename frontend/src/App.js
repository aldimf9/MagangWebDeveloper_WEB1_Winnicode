import React from 'react';
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import SignIn from './components/SignIn';
import Login from './components/Login';
import Profile from './components/Profile';
import Beranda from './components/Beranda';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/signin" />} />
                <Route path="/signin" element={<SignIn/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/profile/:id" element={<Profile/>} />
                <Route path="/beranda/:id" element={<Beranda/>} />
            </Routes>
        </Router>
    );
}

export default App;
