import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';

function Presensi() {
    const [presensi, setPresensi] = useState([]);
    const [jenis, setJenis] = useState('');
    const [ket, setKet] = useState('');
    const {id} = useParams();
    const navigate = useNavigate();

    const handleEditProfile =() =>{
        navigate(`/profile/${id}`);
    }

    const handleLogout = () => {
        // Hapus token dari localStorage
        localStorage.removeItem('token');
        // Redirect ke halaman login
        navigate('/login');
    };

    useEffect(() => {
        const fetchPresensi = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`http://localhost:3000/presen/user/riwayat/${id}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setPresensi(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchPresensi();
    }, []);

    const handlePresensi = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            await axios.post('http://localhost:3000/presen/user/presensi', { id, jenis,ket }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            alert('Check-in successful');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>No Pegawai:{id}</h1><h1/>
            <button onClick={handleEditProfile}>Edit Profile</button>
            <button onClick={handleLogout}>Logout</button>
            <h2>Presensi</h2>
            <form onSubmit={handlePresensi}>
                {/* <input
                    type="text"
                    value={id}
                    placeholder="ID Pegawai"
                    onChange={(e) => setId(e.target.value)}
                    required
                /> */}
                <input
                    type="text"
                    placeholder="Jenis Presensi"
                    value={jenis}
                    onChange={(e) => setJenis(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Keterangan"
                    value={ket}
                    onChange={(e) => setKet(e.target.value)}
                    required
                />
                <button type="submit">Presensi</button>
            </form>
            <h3>History</h3>
            <ul>
                {presensi.map((entry, index) => (
                    <li key={index}>
                        Jenis Presensi: {entry.jenis}, Keterangan: {entry.ket}, waktu: {entry.created_at}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Presensi;
