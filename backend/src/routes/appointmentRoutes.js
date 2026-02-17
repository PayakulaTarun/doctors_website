
const express = require('express');
const { bookAppointment, getAppointments, updateAppointment } = require('../controllers/appointmentController');

const router = express.Router();

router.post('/', bookAppointment);
router.get('/', getAppointments);
router.put('/:id', updateAppointment);

module.exports = router;
