const RestauranteModel = require('../models/RestauranteModel');
const ErroService = require('../uteis/ErroService');

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
        const idRestaurante = req.params.idRestaurante
        const buscarUmRestauranteResponse$ = await RestauranteModel.BuscarUmRestaurante(idRestaurante);
        if(buscarUmRestauranteResponse$.length > 0){
            return res.status(200).json(buscarUmRestauranteResponse$)
        }else{
            const objError = ErroService.MontaObjErro('Restaurante não encontrado.');
            return res.status(404).json(objError)
        }
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