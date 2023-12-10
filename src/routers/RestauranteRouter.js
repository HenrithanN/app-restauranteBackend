const express = require('express');
const router = express.Router();
const RestauranteController = require('../controllers/RestauranteController');

router.post('/salvar', RestauranteController.SalvarRestaurante);
router.get('/listarTodos', RestauranteController.BuscarTodosRestaurantes);
router.get('/listarUm', RestauranteController.BuscarUmRestaurante);
router.post('/atualizar', RestauranteController.AtualizarRestaurante);
router.delete('/deletar/:id', RestauranteController.DeletarRestaurante);

module.exports = router;