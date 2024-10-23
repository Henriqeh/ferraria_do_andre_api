const conexao=require ('../database/connection')

async function getTodos(){
    try {
        let[rows]=await conexao.query(`
            select * from tb_tipo`)
            return rows
    }catch(e){
        return e
    }
}

module.exports={
    getTodos
}