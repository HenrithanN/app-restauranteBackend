const connection = require('./connection');

const tabelaPrincipal = 'PRODUTOS';
const tabelaRestaurantes = 'RESTAURANTES';

class ProdutoModel {
    
    async SalvarProduto(objProduto){
        const query = `INSERT INTO ${tabelaPrincipal}(NOME, DESCRICAO, VALOR, IMAGEM, IDRESTAURANTE) VALUES (?, ?, ?, ?, ?)`;
        const { nome, descricao, valor, imagem, idRestaurante } = objProduto;
        const [createProduto] = await connection.execute(query, [nome, descricao, valor, imagem, idRestaurante]);
        return createProduto;
    }

    async BuscarTodosProdutos(){
        const query = `SELECT * FROM ${tabelaPrincipal}`;
        const [readProdutos] = await connection.execute(query);
        return readProdutos;
    }

    async BuscarProdutosPorIdRestaurante(idRestaurante){
        const query = `SELECT tp.ID, tp.NOME, tp.DESCRICAO, tp.VALOR, tp.IMAGEM 
        FROM ${tabelaPrincipal} tp inner join ${tabelaRestaurantes} tr
        ON tp.IDRESTAURANTE = tr.IDRESTAURANTE WHERE tp.IDRESTAURANTE = ?`;
        const [readProdutos] = await connection.execute(query, [idRestaurante]);
        return readProdutos;
    }

    async BuscarUmProduto(idProduto){
        const query = `SELECT * FROM ${tabelaPrincipal} WHERE ID = ?`;
        const [readProduto] = await connection.execute(query, [idProduto]);
        return readProduto;
    }

    async AtualizarProduto(objProduto){
        const query = `UPDATE ${tabelaPrincipal} SET NOME = ?, DESCRICAO = ?, NOTA = ?, TEMPOENTREGA = ?, VALORENTREGA = ? WHERE ID = ?`;
        const { id, nome, descricao, nota, tempoEntrega, valorEntrega } = objProduto;
        const [updateProduto] = await connection.execute(query, [nome, descricao, nota, tempoEntrega, valorEntrega, id]);
        return updateProduto;
    }

    async DeletarProduto(idProduto){
        const query = `DELETE FROM ${tabelaPrincipal} WHERE ID = ?`;
        const [deleteProduto] = await connection.execute(query, [idProduto]);
        return deleteProduto;
    }

}

module.exports = new ProdutoModel;