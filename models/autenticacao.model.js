const conexao = require('../database/connection');




async function autenticaUsuario(usuario,senha) {
    try{


        const [exec] = await conexao.query(`
            select
                id_usuario
            from tb_usuario
            where login = ? and senha = ?
            `, [usuario, senha])

        return exec;
    }catch(erro){
        return erro;
    }
}



module.exports = {
    autenticaUsuario
}