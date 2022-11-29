const conn = require('../database/conn')

exports.login = (req, res) => {
    
    const { correo, pass } = req.body
    conn.query(`select * from texcology.donadores where correo = '${correo}' and contraseña = '${pass}'`, (err, result) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        console.log(result)
        res.send(JSON.stringify(result))
    })

  
};