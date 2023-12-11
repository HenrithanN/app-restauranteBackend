const connection = require('./connection');

const tabelaPrincipal = 'LOGIN';

class LoginModel {
    
    async SalvarLogin(objLogin){
        const query = `INSERT INTO ${tabelaPrincipal}(EMAIL, SENHA) VALUES (?, ?)`;
        const { email, senha } = objLogin;
        const [createLogin] = await connection.execute(query, [email, senha]);
        return createLogin;
    }

    async BuscarTodosLogins(){
        const query = `SELECT * FROM ${tabelaPrincipal}`;
        const [readLogins] = await connection.execute(query);
        return readLogins;
    }

    async BuscarUmLogin(emailLogin){
        const query = `SELECT * FROM ${tabelaPrincipal} WHERE EMAIL = ?`;
        const [readLogins] = await connection.execute(query, [emailLogin]);
        return readLogins;
    }

    async AtualizarLogin(objLogin){
        const query = `UPDATE ${tabelaPrincipal} SET SENHA = ? WHERE EMAIL = ?`;
        const { email, senha } = objLogin;
        const [updateLogin] = await connection.execute(query, [senha, email]);
        return updateLogin;
    }

    async DeletarLogin(emailLogin){
        const query = `DELETE FROM ${tabelaPrincipal} WHERE EMAIL = ?`;
        const [deleteLogin] = await connection.execute(query, [emailLogin]);
        return deleteLogin;
    }

}

module.exports = new LoginModel;