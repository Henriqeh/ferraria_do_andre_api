const conexao = require('../database/connection');

async function addUsuario(dados) {
    try{
        let [exec] = await conexao.query(`
            insert into tb_usuario(
                nome,
                sobrenome,
                login,
                senha,
                email,
                telefone,
                id_tipo
                ) values(
                 ?,
                 ?,
                 ?,
                 ?,
                 ?,
                 ?,
                 ?)

            `,[
                dados.nome,
                dados.sobrenome,
                dados.usuario,
                dados.senha,
                dados.email,
                dados.telefone,
                dados.tipo
            ])
            return exec.affectedRows;
    }catch(e){
        return e;
    }
}




module.exports = {
    addUsuario
}