const db = require('../configdb');

const riwayat = {
    getPresensi : (id_user,callback) =>{
        const sql = "SELECT `jns_presensi`,`keterangan`,`created_at` FROM riwayat WHERE id_user=?";
        db.query(sql,[id_user],(err,result)=>{
            if (err) return callback(console.log(err));
            callback(null,result);
        });
    }

};

module.exports = riwayat;