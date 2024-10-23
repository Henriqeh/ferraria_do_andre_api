const mysql = require ('mysql2/promise')

const config = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_ferraria_do_andre'
}

const conexao = mysql.createPool (config);

module.exports = conexao;