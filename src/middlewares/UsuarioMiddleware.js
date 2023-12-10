class UsuarioMiddleware {

    async ValidarSalvarUsuario(req, res, next){
        req.errorMiddlewareMessage = [];
        ValidaCampoObrigatorio(req, 'nome');
        ValidaCampoObrigatorio(req, 'cpf');
        ValidaCampoObrigatorio(req, 'email');        
        ValidaCampoObrigatorio(req, 'senha');
        ValidaCampoTamanho(req, 'cpf', 11);

        if(req.errorRequiredMiddleware){
            const objError = {
                Mensagem: 'Existem Campos Obrigatórios!',
                DetalhesAdicionais: req.errorMiddlewareMessage
            }
            return res.status(400).json(objError);
        }
        if(req.errorLengthMiddleware){
            const objError = {
                Mensagem: 'Existem Campos Inválidos!',
                DetalhesAdicionais: req.errorMiddlewareMessage
            }
            return res.status(400).json(objError);
        }
        next();
    }

    async ValidarAtualizarUsuario(req, res, next){
        req.errorMiddlewareMessage = [];
        ValidaCampoObrigatorio(req, 'id');
        ValidaCampoObrigatorio(req, 'nome');
        ValidaCampoObrigatorio(req, 'cpf');
        ValidaCampoObrigatorio(req, 'email');        
        ValidaCampoObrigatorio(req, 'senha');
        ValidaCampoTamanho(req, 'cpf', 11);

        if(req.errorRequiredMiddleware){
            const objError = {
                Mensagem: 'Existem Campos Obrigatórios!',
                DetalhesAdicionais: req.errorMiddlewareMessage
            }
            return res.status(400).json(objError);
        }
        if(req.errorLengthMiddleware){
            const objError = {
                Mensagem: 'Existem Campos Inválidos!',
                DetalhesAdicionais: req.errorMiddlewareMessage
            }
            return res.status(400).json(objError);
        }
        next();
    }
    async ValidarDeletarUsuario(req, res, next){
        req.errorMiddlewareMessage = [];
        ValidaCampoObrigatorio(req, 'id');

        if(req.errorRequiredMiddleware){
            const objError = {
                Mensagem: 'Existem Campos Obrigatórios!',
                DetalhesAdicionais: req.errorMiddlewareMessage
            }
            return res.status(400).json(objError)
        }
        next();
    }
}

module.exports = new UsuarioMiddleware;

function ValidaCampoObrigatorio(req, nomeCampo){
    const campo = req.body[nomeCampo] ?? req.params[nomeCampo]
    if(campo == undefined || campo == null || campo == ''){
        req.errorRequiredMiddleware = true;
        req.errorMiddlewareMessage.push(`O campo [${nomeCampo}] é obrigatório!`);
    }
}

function ValidaCampoTamanho(req, nomeCampo, tamanhoMaximo){
    const campo = req.body[nomeCampo]
    if(campo.length > tamanhoMaximo){
        req.errorLengthMiddleware = true;
        req.errorMiddlewareMessage.push(`O campo [${nomeCampo}] é deve conter no máximo ${tamanhoMaximo} caracteres!`);
    }
}