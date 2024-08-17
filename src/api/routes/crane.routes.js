const express = require('express');
const CraneController = require('../controllers/crane.controller');

const router = express.Router();

router.get('/', CraneController.getAllCranes);
router.get('/:id', CraneController.getCraneById);
router.post('/', CraneController.createCrane);
router.put('/:id', CraneController.updateCrane);
router.delete('/:id', CraneController.deleteCrane);

module.exports = router;