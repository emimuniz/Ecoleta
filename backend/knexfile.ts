import path from 'path';

module.exports = {

    // Banco de dados que sera usado
    client: 'sqlite3',

    // Em qual arquivo sera armazenado o banco
    connection: {
        filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite')
    },

    // Operacoes sql
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },

    // Popular dados
    seeds: {
        directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    },

    // Valor padrao
    useNullAsDefault: true,

};
