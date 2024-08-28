const User = require('../Models/user');
const bcrypt = require('bcryptjs');
const { json } = require('express');
const jwt = require('jsonwebtoken');

exports.signup = (req, res) => {
    const { id,username, password,jabatan,namaLengkap } = req.body;
    User.create(id,username, password, jabatan,namaLengkap, (err, result) => {
        if (err) {
            return res.status(500).send('Error registering the user.');
            
        }
        res.send('User registered successfully');
    });
};

exports.login = (req, res) => {
    const { username, password } = req.body;
    User.findByUsername(username, (err, user) => {
        if (err) {
            return res.status(500).send('Error logging in.');
        }
        if (!user) {
            return res.status(400).send('Invalid username or password');
        }
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) {
                return res.status(500).send('Error logging in.');
            }
            if (!isMatch) {
                return res.status(400).send('Invalid username or password');
            }
            const token = jwt.sign({id: user.id},'your_jwt_secret',{expiresIn: '1h'});
            res.status(200).json({token,user:{
                id : user.id_user
            }});
        });
    });
};

exports.update = (req,res) =>{
    const id = req.params.id;
    const {jabatan,namaLengkap} = req.body;
    User.updateById(id,jabatan,namaLengkap,(err,result)=>{
        if (err) {
            return res.status(500).send('Error update the user.');
            
        }
        res.send('User update successfully');
    });
};
exports.getProfile = (req,res)=>{
    const id = req.params.id;
    User.findById(id,(err,user)=>{
        if(err) {
            return res.status(500).send('failed');
        }
        res.status(200).json({user:{
            jabatan : user.jabatan,
            namaLengkap : user.nm_lengkap
        }});
    });
};
exports.presensi = (req,res) =>{
    const id = req.params.id;
    const {jenis,ket} = req.body;
    User.presensi(id,jenis,ket,(err,result)=>{
        if(err){
            return res.status(500).send('Error Presensi the user')
        }
        res.send('User presensi successfully');
    });
};