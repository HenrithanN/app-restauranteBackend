const express = require('express');
const router = express.Router();
const ProdutoController = require('../controllers/ProdutoController');

router.post('/salvar', ProdutoController.SalvarProduto);
router.get('/listarTodos', ProdutoController.BuscarTodosProdutos);
router.get('/listarProdutoPorIdRestaurante', ProdutoController.BuscarProdutosPorIdRestaurante);
router.post('/listarUm', ProdutoController.BuscarUmProduto);
router.post('/atualizar', ProdutoController.AtualizarProduto);
router.delete('/deletar/:id', ProdutoController.DeletarProduto);

module.exports = router;