const conn = require('../database/conn')

exports.registers = (req, res) => {
    
    
    const { name,lastName,user,correo, password } = req.body
    conn.query(`INSERT INTO texcology.donadores(nombre, apellido, username, correo, contraseña) VALUES('${name}','${lastName}','${user}','${correo}','${password}');`, (err, result) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        console.log({message: 'insertado correctamente'})
        res.send(JSON.stringify({message:'insertado correctamente'}))
    })

  
};