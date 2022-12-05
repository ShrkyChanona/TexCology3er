const conn = require('../database/conn')

exports.regisAccesorios = (req, res) => {
    
    const { acceTipo, acceCantidad } = req.body
    conn.query(`INSERT INTO texcology.accesorios(tipo,cantidad) VALUES('${acceTipo}','${acceCantidad}');`, (err, result) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        console.log({message: 'accesorios insertados correctamente'});
        res.send(JSON.stringify({message:'accesorios insertados correctamente'}));
    });
};