const UsuarioModel = require('../models/UsuarioModel');

class UsuarioController {
    
    async SalvarUsuario(req, res){
        const salvarUsuarioResponse$ = await UsuarioModel.SalvarUsuario(req.body);
        return res.status(200).json(salvarUsuarioResponse$);
    }

    async BuscarTodosUsuarios(_req, res){
        const buscarTodosUsuariosResponse$ = await UsuarioModel.BuscarTodosUsuarios();
        return res.status(200).json(buscarTodosUsuariosResponse$)
    }

    async BuscarUmUsuario(req, res){
        const buscarUmUsuarioResponse$ = await UsuarioModel.BuscarUmUsuario(req.body.email);
        return res.status(200).json(buscarUmUsuarioResponse$)
    }

    async AtualizarUsuario(req, res){
        const atualizarUsuarioResponse$ = await UsuarioModel.AtualizarUsuario(req.body);
        return res.status(200).json(atualizarUsuarioResponse$);
    }

    async DeletarUsuario(req, res){
        const idUsuario = req.params.id;
        const deletarUsuarioResponse$ = await UsuarioModel.DeletarUsuario(idUsuario);
        return res.status(200).json(deletarUsuarioResponse$);
    }
}

module.exports = new UsuarioController;