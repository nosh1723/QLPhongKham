const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');

// Định nghĩa các route cho các hoạt động liên quan đến bệnh nhân

// Route để tạo mới một bệnh nhân
router.post('/patients', patientController.createPatient);

// Route để lấy tất cả các bệnh nhân
router.get('/patients', patientController.getAllPatients);

// Route để lấy thông tin của một bệnh nhân theo ID
router.get('/patients/:id', patientController.getPatientById);

// Route để cập nhật thông tin của một bệnh nhân theo ID
router.put('/patients/:id', patientController.updatePatientById);

// Route để xóa một bệnh nhân theo ID
router.delete('/patients/:id', patientController.deletePatientById);

module.exports = router;
