const {createPool} = require('mysql') //metodo createpool del modulo mysql

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "",
    port: 3306,
    connectionLimit: 10
})


module.exports = pool;