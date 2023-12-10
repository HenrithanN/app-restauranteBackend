const connection = require('./connection');

const tabelaPrincipal = 'RESTAURANTES';

class RestauranteModel {
    
    async SalvarRestaurante(objRestaurante){
        const query = `INSERT INTO ${tabelaPrincipal}(NOME, DESCRICAO, NOTA, TEMPOENTREGA, VALORENTREGA, IMAGEM) VALUES (?, ?, ?, ?, ?)`;
        const { nome, descricao, nota, tempoEntrega, valorEntrega, imagem } = objRestaurante;
        const [createRestaurante] = await connection.execute(query, [nome, descricao, nota, tempoEntrega, valorEntrega, imagem]);
        return createRestaurante;
    }

    async BuscarTodosRestaurantes(){
        const query = `SELECT * FROM ${tabelaPrincipal}`;
        const [readRestaurantes] = await connection.execute(query);
        return readRestaurantes;
    }

    async BuscarUmRestaurante(idRestaurante){
        const query = `SELECT * FROM ${tabelaPrincipal} WHERE IDRESTAURANTE = ?`;
        const [readRestaurante] = await connection.execute(query, [idRestaurante]);
        return readRestaurante;
    }

    async AtualizarRestaurante(objRestaurante){
        const query = `UPDATE ${tabelaPrincipal} SET NOME = ?, DESCRICAO = ?, NOTA = ?, TEMPOENTREGA = ?, VALORENTREGA = ?, IMAGEM = ? WHERE ID = ?`;
        const { id, nome, descricao, nota, tempoEntrega, valorEntrega, imagem } = objRestaurante;
        const [updateRestaurante] = await connection.execute(query, [nome, descricao, nota, tempoEntrega, valorEntrega, imagem, id]);
        return updateRestaurante;
    }

    async DeletarRestaurante(idRestaurante){
        const query = `DELETE FROM ${tabelaPrincipal} WHERE IDRESTAURANTE = ?`;
        const [deleteRestaurante] = await connection.execute(query, [idRestaurante]);
        return deleteRestaurante;
    }

}

module.exports = new RestauranteModel;