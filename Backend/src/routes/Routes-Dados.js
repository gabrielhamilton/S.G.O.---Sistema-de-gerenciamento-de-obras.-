'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controlers/Controller-Dados');


router.get('/admin', controller.getAll);
router.get('/:nome', controller.getbyName);
router.post('/', controller.post);
router.delete('/',controller.delete);
router.put('/', controller.put);


module.exports = router;