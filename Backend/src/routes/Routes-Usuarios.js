'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controlers/Controller-Usuarios');

router.get('/admin', controller.get);
router.get('/:nome', controller.getbyName);
router.get('/:email/:senha', controller.login);
router.post('/', controller.post);
router.delete('/', controller.delete);
router.put('/', controller.put);

module.exports = router;