const conn = require('../database/conn')

exports.registers = (req, res) => {
    
    
    const { name,lastName,correo, password } = req.body
    conn.query(`INSERT INTO texcology.donadores(nombre, apellido, num_donaciones, correo, contraseña) VALUES('${name}','${lastName}',0,'${correo}','${password}');`, (err, result) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        console.log({message: 'insertado correctamente'})
        res.send(JSON.stringify({message:'insertado correctamente'}))
    })

  
};