const {Router } = require('express');
const { validarJWT } = require('../midlewares/auth');
const {obtenerEquipos,crearEquipo,EliminarEquipo,editarEquipo} = require('../controllers/equipo.controller');
const router = Router();
router.get('/',validarJWT,obtenerEquipos);
router.post('/',validarJWT,crearEquipo);
router.put('/:id',validarJWT,editarEquipo);
router.delete('/:id',validarJWT,EliminarEquipo);


module.exports = router;