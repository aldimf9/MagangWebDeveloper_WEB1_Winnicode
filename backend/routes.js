const express = require('express');
const router = express.Router();
const userController = require('./Controllers/userControl');
const riwayatController = require('./Controllers/presenControl');

router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.put('/edit/:id',userController.update);
router.post('/presensi/:id',userController.presensi);
router.get('/riwayat/:id',riwayatController.riwayat);
router.get('/profile/:id',userController.getProfile);

module.exports = router;
