const conn = require('../database/conn')

exports.regisDonativos = (req, res) => {
    
    const { codigo_rastreo , today, status, id_donador } = req.body;
    conn.query(`INSERT INTO texcology.donativos(fecha, codigo_rastreo ,estado,id_donador) VALUES('${today}','${codigo_rastreo}','${status}','${id_donador}');`, (err, result) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        console.log({message: 'donativo creado correctamente'});
        console.log(result);
        res.send(JSON.stringify(result));
    });
};

exports.verDonativos = (req,res) =>{
    const { id_donador} = req.body;
    conn.query(`SELECT * FROM texcology.donativos WHERE id_donador = '${id_donador}'; `, (err, result) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        console.log({message: 'donativo devuelto correctamente'});
        res.send(JSON.stringify(result))
    });
}