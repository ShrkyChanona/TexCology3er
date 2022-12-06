const conn = require('../database/conn')

exports.regisAccesorios = (req, res) => {
    
    const { acceTipo, acceCantidad,id_donativo } = req.body
    conn.query(`INSERT INTO texcology.accesorios(tipo,cantidad,id_donativo) VALUES('${acceTipo}','${acceCantidad}','${id_donativo}');`, (err, result) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        console.log({message: 'accesorios insertados correctamente'});
        res.send(JSON.stringify({message:'accesorios insertados correctamente'}));
    });
};