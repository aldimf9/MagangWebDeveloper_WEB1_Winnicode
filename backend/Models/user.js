const db = require('../configdb');
const bcrypt = require('bcryptjs');

const User = {
    create: (id_user ,username, password,jabatan,nm_Lengkap,callback) => {
        bcrypt.hash(password, 10, (err, hashedPassword) => {
            if (err) return callback(err);
            const sql = "INSERT INTO user (id_user ,username,password,jabatan,nm_Lengkap,role ) VALUES (?,?,?,?,?,'karyawan')";
            db.query(sql, [id_user,username,hashedPassword,jabatan,nm_Lengkap], (err, result) => {
                if (err) return callback(err);
                callback(null, result);
            });
        });
    },
    findByUsername: (username, callback) => {
        const sql = "SELECT * FROM user WHERE username = ?";
        db.query(sql, [username], (err, results) => {
            if (err) return callback(err);
            callback(null, results[0]);
        });
    },
    findById: (id, callback) => {
        const sql = "SELECT `jabatan`,`nm_lengkap` FROM user WHERE id_user = ?";
        db.query(sql, [id], (err, results) => {
            if (err) return callback(err);
            callback(null, results[0]);
        });
    },
    updateById: (id_user ,jabatan,nm_Lengkap,callback) =>{
            const sql = "UPDATE user SET jabatan=?,nm_lengkap=? WHERE id_user=?";
            db.query(sql, [jabatan,nm_Lengkap,id_user], (err, result) => {
                if (err) return callback(console.log(err));
                callback(null, result);
            });
    },
    presensi: (id_user,jenis,keterangan, callback) => {
        const sql = 'INSERT INTO riwayat (id_user,jns_presensi,keterangan) VALUES (?,?,?)';
        db.query(sql,[id_user,jenis,keterangan],(err,result) =>{
            if (err) return callback(err);
            callback(null,result);
        });
    },
};

module.exports = User;
