const express = require('express');
const controller = require('../controllers/controller');
const router = express.Router();
const Controller = require('../controllers/controller');

router.get('/' , Controller.getEmpleados);

router.post('/' , Controller.addEmpleados);

router.delete('/:id' , Controller.deleteEmpleado);




module.exports = router;