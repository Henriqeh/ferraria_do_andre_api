const express = require('express');
const router = express.Router();
const sql = require('../models/usuario.models');
const sha1 = require('sha1');

router.post('/add', (requisicao,resposta)=>{
    let dados = requisicao.body.dados;
    dados.senha = sha1('123456');
    sql.addUsuario(dados).then((retorno)=>{
        console.log(retorno)
        if(retorno instanceof Error){
            resposta.status(500).json(retorno);
            return;
        }
        resposta.status(200).json(retorno);
    })
})








module.exports = router;