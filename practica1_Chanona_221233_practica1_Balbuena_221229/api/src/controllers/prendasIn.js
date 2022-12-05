const conn = require('../database/conn')

exports.regisPantalones = (req, res) => {
    
    const { panCantidad, panTalla, panGen, panTela } = req.body
    conn.query(`INSERT INTO texcology.pantalones(talla,genero,tela,cantidad) VALUES('${panTalla}','${panGen}','${panTela}','${panCantidad}');`, (err, result) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        console.log({message: 'pantalones insertados correctamente'});
        res.send(JSON.stringify({message:'pantalones insertados correctamente'}));
    });
};

exports.regisShorts = (req, res) => {

    const { shCantidad, shTalla, shGen, shTela } = req.body
    conn.query(`INSERT INTO texcology.shorts(talla,genero,tela,cantidad) VALUES('${shTalla}','${shGen}','${shTela}','${shCantidad}');`, (err, result) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        console.log({message: 'shorts insertados correctamente'});
        res.send(JSON.stringify({message:'shorts insertados correctamente'}));
    });
};

exports.regisCalzados = (req, res) => {
    
    const { calTalla, calGen, calTipo,calPares } = req.body
    conn.query(`INSERT INTO texcology.calzados(numero_talla,genero,tipo,pares) VALUES('${calTalla}','${calGen}','${calTipo}','${calPares}');`, (err, result) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        console.log({message: 'calzados insertados correctamente'});
        res.send(JSON.stringify({message:'calzados insertados correctamente'}));
    });
};