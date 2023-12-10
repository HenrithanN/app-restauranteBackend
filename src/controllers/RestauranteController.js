const RestauranteModel = require('../models/RestauranteModel');

class RestauranteController {
    
    async SalvarRestaurante(req, res){
        const salvarRestauranteResponse$ = await RestauranteModel.SalvarRestaurante(req.body);
        return res.status(200).json(salvarRestauranteResponse$);
    }

    async BuscarTodosRestaurantes(_req, res){
        const buscarTodosRestaurantesResponse$ = await RestauranteModel.BuscarTodosRestaurantes();
        return res.status(200).json(buscarTodosRestaurantesResponse$)
    }

    async BuscarUmRestaurante(req, res){
        const buscarUmRestauranteResponse$ = await RestauranteModel.BuscarUmRestaurante(req.body.idRestaurante);
        return res.status(200).json(buscarUmRestauranteResponse$)
    }

    async AtualizarRestaurante(req, res){
        const atualizarRestauranteResponse$ = await RestauranteModel.AtualizarRestaurante(req.body);
        return res.status(200).json(atualizarRestauranteResponse$);
    }

    async DeletarRestaurante(req, res){
        const idRestaurante = req.params.id;
        const deletarRestauranteResponse$ = await RestauranteModel.DeletarRestaurante(idRestaurante);
        return res.status(200).json(deletarRestauranteResponse$);
    }
}

module.exports = new RestauranteController;