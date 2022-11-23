const conn = require('../database/conn')

exports.login = (req, res) => {
    
    const { correo, pass } = req.body
    conn.query(`select * from texcology.donadores where correo = '${correo}' and contraseña = '${pass}'`, (err, result) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        console.log(result)
        res.send(JSON.stringify(result))
    })

  
};

exports.registrar = (req, res) => {
    // conn.query("select * from texcology.info", (err, result) => {
    //     res.setHeader('Access-Control-Allow-Origin', '*');
    //     res.send(JSON.stringify(result))
    // })

    console.log(req.body)
};