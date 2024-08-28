import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/presen/user/login', { username, password });
            const {token,user} = response.data;
            console.log(response.data.token,response.data.user.id);
            localStorage.setItem('token', token);
            localStorage.setItem('id',user.id);
            navigate(`/beranda/${user.id}`);
        } catch (error) {
            console.error(error);
        }
    };

    const handleSignIn = () =>{
        navigate(`/signin`)
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
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
                <button type="submit">Login</button>
            </form>
            <button onClick={handleSignIn}>SignIn</button>
        </div>
    );
}

export default Login;
