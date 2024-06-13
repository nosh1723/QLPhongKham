const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');

// Route để đặt lịch hẹn
router.post('/book', appointmentController.bookAppointment);

// Route để tìm kiếm lịch hẹn theo mã
router.get('/find/:appointmentCode', appointmentController.findAppointmentByCode);

module.exports = router;
