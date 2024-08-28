import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';

function Profile() {
    // const [user, setUser] = useState({ name: '',jabatan: '' });
    const [newName, setNewName] = useState('');
    const [newJabatan, setNewJabatan] = useState('');
    const {id} = useParams();
    const navigate = useNavigate();
    const HandleBeranda = () =>{
        navigate(`/beranda/${id}`)
    }
    const handleLogout = () => {
        // Hapus token dari localStorage
        localStorage.removeItem('token');
        // Redirect ke halaman login
        navigate('/login');
    };
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`http://localhost:3000/presen/user/profile/${id}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                // setUser(response.data);
                setNewName(response.data.user.namaLengkap);   
                setNewJabatan(response.data.user.jabatan);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProfile();
    }, []);

    const handleProfileUpdate = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            await axios.put(`http://localhost:3000/presen/user/edit/${id}`, { namaLengkap: newName, jabatan: newJabatan }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            alert('Profile updated successfully');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <button onClick={HandleBeranda}>Beranda</button>
            <button onClick={handleLogout}>Logout</button>
            <h2>Edit Profile</h2>
            <form onSubmit={handleProfileUpdate}>
                <input
                    type="text"
                    placeholder="Name"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Jabatan"
                    value={newJabatan}
                    onChange={(e) => setNewJabatan(e.target.value)}
                />
                <button type="submit">Update Profile</button>
            </form>
        </div>
    );
}

export default Profile;
