const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');

router.post('/create-user', authController.createNewUser);
router.get('/get-users', authController.getAllUsers);
router.get('/get-user/:idUser', authController.getUserById);
router.get('/get-user-email/:emailUser', authController.getUserByEmail);
router.patch('/update-user/:idUser', authController.updateUser);
router.delete('/delete-user/:idUser', authController.deleteUser);


module.exports = router;