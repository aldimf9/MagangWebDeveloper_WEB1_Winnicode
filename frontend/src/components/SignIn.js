import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignIn() {
    const [namaLengkap, setNamaLengkap] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [id, setId] = useState('');
    const [jabatan, setJabatan] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/presen/user/signup', { id,username,password,jabatan,namaLengkap});
            navigate('/login');
        } catch (error) {
            console.error(error);
        }
    };
    const handleLogin =() =>{
        navigate('/login');
    }
    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <input
                    type="text"
                    placeholder="Name"
                    value={namaLengkap}
                    onChange={(e) => setNamaLengkap(e.target.value)}
                    required
                />
                <input
                    type="username"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="ID Pegawai"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Jabatan"
                    value={jabatan}
                    onChange={(e) => setJabatan(e.target.value)}
                    required
                />
                <button type="submit">Sign Up</button>
            </form>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default SignIn;
