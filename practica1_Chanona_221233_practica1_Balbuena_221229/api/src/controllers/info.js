const conn = require('../database/conn')

exports.index = (req, res) => {
    conn.query("select * from texcology.info", (err, result) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(JSON.stringify(result))
    })
  };