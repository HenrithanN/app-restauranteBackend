const ProdutoModel = require('../models/ProdutoModel');

class RestauranteController {
    
    async SalvarRestaurante(req, res){
        const salvarRestauranteResponse$ = await ProdutoModel.SalvarProduto(req.body);
        return res.status(200).json(salvarRestauranteResponse$);
    }

    async BuscarTodosRestaurantes(_req, res){
        const buscarTodosRestaurantesResponse$ = await ProdutoModel.BuscarTodosProdutos();
        return res.status(200).json(buscarTodosRestaurantesResponse$)
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

module.exports = new RestauranteController;