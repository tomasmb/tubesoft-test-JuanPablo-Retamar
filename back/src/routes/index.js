const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {save, get, del} = require('../control/index.js')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.post('/del/time', del)
router.post('/save/time', save) 
router.get('/times', get)

module.exports = router;
