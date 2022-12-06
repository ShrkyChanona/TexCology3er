const conn = require('../database/conn')

exports.regisCamisetas = (req, res) => {
    
    const {camisa,cTalla,cGen,cCantidad, id_donativo } = req.body
    conn.query(`INSERT INTO texcology.camisetas(talla,genero,tipo,cantidad,id_donativo) VALUES('${cTalla}','${cGen}','${camisa}','${cCantidad}','${id_donativo}');`, (err, result) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        console.log({message: 'camisas insertadas correctamente'});
        res.send(JSON.stringify({message:'camisas insertadas correctamente'}));
    });

};

exports.regisAbrigos = (req, res) => {

    const {aCantidad, aTalla, aTipo, aGen, id_donativo} = req.body
    conn.query(`INSERT INTO texcology.abrigos(talla,genero,tipo,cantidad,id_donativo) VALUES('${aTalla}','${aGen}','${aTipo}','${aCantidad}','${id_donativo}');`, (err, result) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        console.log({message: 'abrigos insertados correctamente'});
        res.send(JSON.stringify({message:'abrigos insertados correctamente'}));
    });
};

exports.regisBlusas = (req, res) => {
    
    
    const {bluCantidad, bluTalla, bluTipo, id_donativo } = req.body
    conn.query(`INSERT INTO texcology.blusas(talla,tipo,cantidad,id_donativo) VALUES('${bluTalla}','${bluTipo}','${bluCantidad}','${id_donativo}');`, (err, result) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        console.log({message: 'blusas insertadas correctamente'});
        res.send(JSON.stringify({message:'blusas insertadas correctamente'}));
    });

};

exports.regisVestidos = (req, res) => {
    
    const { vesCantidad, vesTalla, vesTipo, id_donativo } = req.body
    conn.query(`INSERT INTO texcology.vestidos(talla,tipo,cantidad,id_donativo) VALUES('${vesTalla}','${vesTipo}','${vesCantidad}','${id_donativo}');`, (err, result) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        console.log({message: 'vestidos insertados correctamente'});
        res.send(JSON.stringify({message:'vestidos insertados correctamente'}));
    });

};