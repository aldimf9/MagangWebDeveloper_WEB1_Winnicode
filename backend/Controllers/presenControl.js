const Presensi = require('../Models/riwayat');

exports.riwayat = (req,res)=>{
    // console.log("s");
    const id = req.params.id;
    Presensi.getPresensi(id,(err,result)=>{
        if(err) {
            return res.status(500).send('failed');
        }
        res.send(result);
    });
};