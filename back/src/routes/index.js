const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {save, get} = require('../control/index.js')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.post('/save/time', save) 
router.get('/times', get)

module.exports = router;
