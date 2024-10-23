const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
    host: 'b0velui7pwjfseqtkalr-mysql.services.clever-cloud.com',
    user: 'uhsmygizo9ocs4bk',
    password: 'brKik4pqYKufJfVWh1Mv',
    database: 'b0velui7pwjfseqtkalr',
    multipleStatements: true
});

mysqlConnection.connect( function(err){
    if(err){
        console.error(err);
        return;
    } else {
        console.log('Base de datos conectada!');
    }
})

module.exports = mysqlConnection;