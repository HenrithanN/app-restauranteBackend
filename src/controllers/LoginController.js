const LoginModel = require('../models/LoginModel');
const ErroService = require('../uteis/ErroService');

class LoginController {

    async AutenticarLogin(req, res){
        const emailLogin = req.body.email;
        const autenticarLoginResponse$ = await LoginModel.BuscarUmLogin(emailLogin);
        
        if(autenticarLoginResponse$.length > 0){
            const { EMAIL, SENHA } = autenticarLoginResponse$[0];
            if(EMAIL.toUpperCase() == emailLogin.toUpperCase() && SENHA == req.body.senha){
                return res.status(200).json({Autenticado: true});
            }else{
                const objError = ErroService.MontaObjErro('Acesso não autorizado.', ["Usuário ou senha Inválidos!"])
                return res.status(401).json(objError);
            }
        }else{
            const objError = ErroService.MontaObjErro('Acesso não autorizado.', ["Usuário não existe!"])
            return res.status(401).json(objError);
        }
    }

    async SalvarLogin(req, res){
        const emailLogin = req.body.email;
        const buscarUmLoginResponse$ = await LoginModel.BuscarUmLogin(emailLogin);

        if(buscarUmLoginResponse$.length > 0){
            const objError = ErroService.MontaObjErro('Não foi Possível Realizar o Cadastro.', ["Usuário ja está cadastrado na Base de Dados!"]);
            return res.status(400).json(objError);
        }else{
            const salvarLoginResponse$ = await LoginModel.SalvarLogin(req.body);
            return res.status(200).json(salvarLoginResponse$);
        }
    }

    async BuscarTodosLogins(_req, res){
        const buscarLoginsResponse$ = await LoginModel.BuscarTodosLogins();
        return res.status(200).json(buscarLoginsResponse$);
    }

    async BuscarUmLogin(req, res){
        const emailLogin = req.body.email;
        const buscarUmLoginResponse$ = await LoginModel.BuscarUmLogin(emailLogin);
        return res.status(200).json(buscarUmLoginResponse$);
    }

    async AtualizarLogin(req, res){
        const { email, senha, senhaConfirmacao} = req.body
        if(senha != senhaConfirmacao){
            const objError = ErroService.MontaObjErro('Não foi Possível Alterar a Senha.', ["As senhas informadas são diferentes!"]);
            return res.status(400).json(objError);
        }
        const buscarUmLoginResponse$ = await LoginModel.BuscarUmLogin(email);

        if(buscarUmLoginResponse$.length == 0){
            const objError = ErroService.MontaObjErro('Não foi Possível Alterar a Senha.', ["O usuário informado não foi encontrado!"]);
            return res.status(400).json(objError);
        }else{
            const atualizarLoginResponse$ = await LoginModel.AtualizarLogin(req.body);
            return res.status(200).json(atualizarLoginResponse$);
        }
    }

    async DeletarLogin(req, res){
        const emailLogin = req.body.email;
        const deletarLoginResponse$ = await LoginModel.DeletarLogin(emailLogin);
        return res.status(200).json(deletarLoginResponse$);
    }
}

module.exports = new LoginController;