const connection = require('./connection');

const tabelaPrincipal = 'USUARIOS';

class UsuarioModel {
    
    async SalvarUsuario(objUsuario){
        const query = `INSERT INTO ${tabelaPrincipal}(NOME, EMAIL, CPF, SENHA) VALUES (?, ?, ?, ?)`;
        const { nome, cpf, email, senha } = objUsuario;
        const [createUsuario] = await connection.execute(query, [nome, email, cpf, senha]);
        return createUsuario;
    }

    async BuscarTodosUsuarios(){
        const query = `SELECT * FROM ${tabelaPrincipal}`;
        const [readUsuarios] = await connection.execute(query);
        return readUsuarios;
    }

    async BuscarUmUsuario(emailUsuario){
        const query = `SELECT * FROM ${tabelaPrincipal} WHERE EMAIL = ?`;
        const [readUsuarios] = await connection.execute(query, [emailUsuario]);
        return readUsuarios;
    }

    async AtualizarUsuario(objUsuario){
        const query = `UPDATE ${tabelaPrincipal} SET NOME = ?, CPF = ?, EMAIL = ?, SENHA = ? WHERE ID = ?`;
        const { id, nome, cpf, email, senha } = objUsuario;
        const [updateUsuario] = await connection.execute(query, [nome, cpf, email, senha, id]);
        return updateUsuario;
    }

    async DeletarUsuario(idUsuario){
        const query = `DELETE FROM ${tabelaPrincipal} WHERE ID = ?`;
        const [deleteUsuario] = await connection.execute(query, [idUsuario]);
        return deleteUsuario;
    }

}

module.exports = new UsuarioModel;