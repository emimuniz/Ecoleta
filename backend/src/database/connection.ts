import knex from 'knex';
import path from 'path';

// Configuracao da conexao
const connection = knex({

    // Banco de dados que sera usado
    client: 'sqlite3',

    // Em qual arquivo sera armazenado o banco
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },

    // Valor padrao
    useNullAsDefault: true

});

export default connection;
