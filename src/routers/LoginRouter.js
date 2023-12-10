const express = require('express');
const router = express.Router();
const LoginController = require('../controllers/LoginController');

router.post('/cadastrar', LoginController.SalvarLogin);
router.post('/autenticar', LoginController.AutenticarLogin);
router.post('/deletar', LoginController.DeletarLogin);
router.post('/listarUm', LoginController.BuscarUmLogin);
router.get('/listarTodos', LoginController.BuscarTodosLogins);

module.exports = router;