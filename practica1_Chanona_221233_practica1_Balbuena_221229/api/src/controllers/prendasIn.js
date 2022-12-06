const conn = require('../database/conn')

exports.regisPantalones = (req, res) => {
    
    const { panCantidad, panTalla, panGen, panTela, id_donativo } = req.body
    conn.query(`INSERT INTO texcology.pantalones(talla,genero,tela,cantidad,id_donativo) VALUES('${panTalla}','${panGen}','${panTela}','${panCantidad}','${id_donativo}');`, (err, result) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        console.log({message: 'pantalones insertados correctamente'});
        res.send(JSON.stringify({message:'pantalones insertados correctamente'}));
    });
};

exports.regisShorts = (req, res) => {

    const { shCantidad, shTalla, shGen, shTela, id_donativo } = req.body
    conn.query(`INSERT INTO texcology.shorts(talla,genero,tela,cantidad,id_donativo) VALUES('${shTalla}','${shGen}','${shTela}','${shCantidad}','${id_donativo}');`, (err, result) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        console.log({message: 'shorts insertados correctamente'});
        res.send(JSON.stringify({message:'shorts insertados correctamente'}));
    });
};

exports.regisCalzados = (req, res) => {
    
    const { calTalla, calGen, calTipo,calPares, id_donativo } = req.body
    conn.query(`INSERT INTO texcology.calzados(numero_talla,genero,tipo,pares,id_donativo) VALUES('${calTalla}','${calGen}','${calTipo}','${calPares}','${id_donativo}');`, (err, result) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        console.log({message: 'calzados insertados correctamente'});
        res.send(JSON.stringify({message:'calzados insertados correctamente'}));
    });
};