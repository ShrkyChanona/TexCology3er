const conn = require('../database/conn')

exports.regisCamisetas = (req, res) => {
    
    const {camisa,cTalla,cGen,cCantidad } = req.body
    conn.query(`INSERT INTO texcology.camisetas(talla,genero,tipo,cantidad) VALUES('${cTalla}','${cGen}','${camisa}','${cCantidad}');`, (err, result) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        console.log({message: 'camisas insertadas correctamente'});
        res.send(JSON.stringify({message:'camisas insertadas correctamente'}));
    });

};

exports.regisAbrigos = (req, res) => {

    const {aCantidad, aTalla, aTipo, aGen} = req.body
    conn.query(`INSERT INTO texcology.abrigos(talla,genero,tipo,cantidad) VALUES('${aTalla}','${aGen}','${aTipo}','${aCantidad}');`, (err, result) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        console.log({message: 'abrigos insertados correctamente'});
        res.send(JSON.stringify({message:'abrigos insertados correctamente'}));
    });
};

exports.regisBlusas = (req, res) => {
    
    
    const {bluCantidad, bluTalla, bluTipo } = req.body
    conn.query(`INSERT INTO texcology.blusas(talla,tipo,cantidad) VALUES('${bluTalla}','${bluTipo}','${bluCantidad}');`, (err, result) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        console.log({message: 'blusas insertadas correctamente'});
        res.send(JSON.stringify({message:'blusas insertadas correctamente'}));
    });

};

exports.regisVestidos = (req, res) => {
    
    
    const { vesCantidad, vesTalla, vesTipo } = req.body
    conn.query(`INSERT INTO texcology.vestidos(talla,tipo,cantidad) VALUES('${vesTalla}','${vesTipo}','${vesCantidad}');`, (err, result) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        console.log({message: 'vestidos insertados correctamente'});
        res.send(JSON.stringify({message:'vestidos insertados correctamente'}));
    });

};