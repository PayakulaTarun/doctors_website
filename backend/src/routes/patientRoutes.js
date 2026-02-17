
const express = require('express');
const { getPatients, getPatientById, updatePatient } = require('../controllers/patientController');

const router = express.Router();

router.get('/', getPatients);
router.get('/:id', getPatientById);
router.put('/:id', updatePatient);

module.exports = router;
