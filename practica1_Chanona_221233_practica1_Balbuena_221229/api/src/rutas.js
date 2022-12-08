const express = require('express');
const bodyParser = require('body-parser');
let jsonParser = bodyParser.json();
const router = express.Router();

// controladores
const info = require('./controllers/info');
const login = require('./controllers/login');
const registers = require('./controllers/registers');
const prendasS = require('./controllers/prendasS');
const prendasIn = require('./controllers/prendasIn');
const accesorios = require('./controllers/accesorios');
const donativos = require('./controllers/donativos')

router.get('/', info.index);

//Usuarios
router.post('/validarUsuario', jsonParser, login.login) //primer parametro es el controlador y segundo la funcion de ese controlador
router.post('/registrarUsuario', jsonParser, registers.registers);

//Donativos
router.post('/crearDonativo', jsonParser, donativos.regisDonativos);
router.post('/verDonativo', jsonParser, donativos.verDonativos);
router.post('/buscarDonativo', jsonParser, donativos.buscarDonativo);

//prendas superiores
router.post('/registrarCamisas', jsonParser, prendasS.regisCamisetas);
router.post('/registrarAbrigos', jsonParser, prendasS.regisAbrigos);
router.post('/registrarBlusas', jsonParser, prendasS.regisBlusas);
router.post('/registrarVestidos', jsonParser, prendasS.regisVestidos);

//prendas inferiores
router.post('/registrarPantalones', jsonParser, prendasIn.regisPantalones);
router.post('/registrarShorts', jsonParser, prendasIn.regisShorts);
router.post('/registrarCalzados', jsonParser, prendasIn.regisCalzados);

//Accesorios
router.post('/registrarAccesorios', jsonParser, accesorios.regisAccesorios);

module.exports = router;