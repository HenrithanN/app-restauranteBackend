const ProdutoModel = require('../models/ProdutoModel');

class ProdutoController {
    
    async SalvarProduto(req, res){
        const salvarProdutoResponse$ = await ProdutoModel.SalvarProduto(req.body);
        return res.status(200).json(salvarProdutoResponse$);
    }

    async BuscarTodosProdutos(_req, res){
        const buscarTodosProdutosResponse$ = await ProdutoModel.BuscarTodosProdutos();
        return res.status(200).json(buscarTodosProdutosResponse$)
    }

    async BuscarProdutosPorIdRestaurante(req, res){
        const idRestaurante = req.body.idRestaurante;
        const BuscarProdutosPorIdRestauranteResponse$ = await ProdutoModel.BuscarProdutosPorIdRestaurante(idRestaurante);
        return res.status(200).json(BuscarProdutosPorIdRestauranteResponse$)
    }

    async BuscarUmProduto(req, res){
        const buscarUmProdutoResponse$ = await ProdutoModel.BuscarUmProduto(req.body.idProduto);
        return res.status(200).json(buscarUmProdutoResponse$)
    }

    async AtualizarProduto(req, res){
        const atualizarProdutoResponse$ = await ProdutoModel.AtualizarProduto(req.body);
        return res.status(200).json(atualizarProdutoResponse$);
    }

    async DeletarProduto(req, res){
        const idProduto = req.params.id;
        const deletarProdutoResponse$ = await ProdutoModel.DeletarProduto(idProduto);
        return res.status(200).json(deletarProdutoResponse$);
    }
}

module.exports = new ProdutoController;