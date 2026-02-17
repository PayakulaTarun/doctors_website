
const express = require('express');
const { getDoctors, getDoctorById, updateDoctor } = require('../controllers/doctorController');

const router = express.Router();

router.get('/', getDoctors);
router.get('/:id', getDoctorById);
router.put('/:id', updateDoctor);

module.exports = router;
