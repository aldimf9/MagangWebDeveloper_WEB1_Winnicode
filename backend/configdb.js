const mysql = require("mysql")
require('dotenv').config();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'presensi'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the db:' ,err.stac);
        return
    }
    console.log('Connecting Succes');
});

module.exports = db;