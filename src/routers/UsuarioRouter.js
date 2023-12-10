const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/UsuarioController');
const UsuarioMiddleware = require('../middlewares/UsuarioMiddleware');

router.post('/salvar', UsuarioMiddleware.ValidarSalvarUsuario, UsuarioController.SalvarUsuario);
router.get('/listarTodos', UsuarioController.BuscarTodosUsuarios);
router.get('/listarUm', UsuarioController.BuscarUmUsuario);
router.post('/atualizar', UsuarioMiddleware.ValidarAtualizarUsuario, UsuarioController.AtualizarUsuario);
router.delete('/deletar/:id', UsuarioMiddleware.ValidarDeletarUsuario, UsuarioController.DeletarUsuario);

module.exports = router;