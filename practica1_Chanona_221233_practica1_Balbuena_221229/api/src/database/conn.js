const {createPool} = require('mysql')

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "",
    port: 3306,
    connectionLimit: 10
})


module.exports = pool;