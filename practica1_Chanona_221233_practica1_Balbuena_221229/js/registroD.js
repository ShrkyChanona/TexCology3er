
window.addEventListener('load', (e) => {

    if(!sessionStorage.infoUsuario){
        window.location.href = "../html/index.html";
    }
    datosDonativo();
    
    //URL como parametro para transforarlo a objeto JSON
    const params = queryStringToJSON(window.location.search)
    //ahora params contiene toda la cadena de la url transformado en json
    console.log(params);

    let nombre = document.querySelector("#nombre"),
        codGuia = document.querySelector("#codGuia"),
        sucursal = document.querySelector("#sucursal"),
        fecha = document.querySelector("#fecha");
        comentario = document.querySelector("#comentario");

    //indica el caracter que remplazara
    const RegEx = /[+]/g
    //remplaza todos los caracteres '+' por un espacio
    let lugar = params.sucursales.replace(RegEx, " "),
        dia = params.fecha.replace(RegEx, " ");
        mensaje = params.comentario.replace(RegEx," ");

    const nombreReal = JSON.parse(sessionStorage.infoUsuario).nombre;
    const apellidoReal = JSON.parse(sessionStorage.infoUsuario).apellido;
    const codRastreo = JSON.parse(localStorage.getItem('donativoActual')).codigo_rastreo;
    console.log(codRastreo);

    nombre.innerHTML = `${nombreReal} ${apellidoReal}.`;
    sucursal.innerHTML = sucursal.innerHTML.replace('', `${lugar}`);
    fecha.innerHTML = fecha.innerHTML.replace('', `${dia}`);
    codGuia.innerHTML = codRastreo;

    //----------------Registro de las prendas Superiores----------------
    const id_donativo = Number(JSON.parse(sessionStorage.donativos).insertId);
    console.log(id_donativo);
    //Camisetas
    let camisetas = document.querySelector("#camisetas"),
        camisetaTipo = document.querySelector("#camisetaTipo"),
        camisetaTalla = document.querySelector("#camisetaTalla"),
        camisetaGen = document.querySelector("#camisetaGen");

    let camisa = params.camisetaTipo.replace(RegEx, " "),
        cCantidad = params.camisetas,
        cTalla = params.camisetaTalla,
        cGen = params.camisetaGen;

    const tabla_camiseta = { camisa, cTalla, cGen, cCantidad, id_donativo }
    fetch('http://localhost:4000/api/texcology/registrarCamisas', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(tabla_camiseta),
    })
        .then(async (response) => {
            if (response) {
                const tabla_camiseta = await response.json();
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });

    //Abrigos
    let abrigos = document.querySelector("#abrigos"),
        abrigoTipo = document.querySelector("#abrigoTipo"),
        abrigoTalla = document.querySelector("#abrigoTalla"),
        abrigoGen = document.querySelector("#abrigoGen");

    let aCantidad = params.abrigos,
        aTalla = params.abrigoTalla,
        aTipo = params.abrigoTipo.replace(RegEx, " "),
        aGen = params.abrigoGen;

    const tabla_abrigos = { aCantidad, aTalla, aTipo, aGen, id_donativo }
    fetch('http://localhost:4000/api/texcology/registrarAbrigos', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(tabla_abrigos),
    })
        .then(async (response) => {
            if (response) {
                const tabla_abrigos = await response.json();
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });

    //Blusas
    let blusas = document.querySelector("#blusas"),
        blusaTipo = document.querySelector("#blusasTipo"),
        blusaTalla = document.querySelector("#blusaTalla");

    let bluCantidad = params.blusas,
        bluTipo = params.blusaTipo.replace(RegEx, " "),
        bluTalla = params.blusaTalla;
    
        const tabla_blusas = { bluCantidad, bluTalla, bluTipo, id_donativo }
        fetch('http://localhost:4000/api/texcology/registrarBlusas', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(tabla_blusas),
        })
            .then(async (response) => {
                if (response) {
                    const tabla_blusas = await response.json();
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    
    //Vestidos
    let vestidos = document.querySelector("#vestidos"),
        vestidoTipo = document.querySelector("#vestidoTipo"),
        vestidoTalla = document.querySelector("#vestidoTalla");
    
    let vesCantidad = params.vestidos,
        vesTipo = params.vestidoTipo.replace(RegEx, " "),
        vesTalla = params.vestidoTalla;

        const tabla_vestidos = { vesCantidad, vesTalla, vesTipo, id_donativo }
        fetch('http://localhost:4000/api/texcology/registrarVestidos', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(tabla_vestidos),
        })
            .then(async (response) => {
                if (response) {
                    const tabla_vestidos = await response.json();
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    //-------------------------Registro de las prendas Inferiores------------------:

    //Pantalones
    let pantalones = document.querySelector("#pantalones"),
        pantalonTela = document.querySelector("#pantalonTela"),
        pantalonTalla = document.querySelector("#pantalonTalla"),
        pantalonGenero = document.querySelector("#pantalonGenero");

    let panCantidad = params.pantalones,
        panTela = params.pantalonTela,
        panTalla = params.pantalonTalla,
        panGen = params.pantalonGenero;

        const tabla_pantalones = { panCantidad, panTalla, panGen, panTela, id_donativo }
        fetch('http://localhost:4000/api/texcology/registrarPantalones', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(tabla_pantalones),
        })
            .then(async (response) => {
                if (response) {
                    const tabla_pantalones = await response.json();
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    //Shorts
    let shorts = document.querySelector("#shorts"),
        shortTela = document.querySelector("#shortTela"),
        shortTalla = document.querySelector("#shortTalla"),
        shortGenero = document.querySelector("#shortGenero");

    let shCantidad = params.shorts,
        shTalla = params.shortTalla,
        shTela = params.shortTela,
        shGen = params.shortGenero;
    
        const tabla_shorts = { shCantidad, shTalla, shGen, shTela, id_donativo }
        fetch('http://localhost:4000/api/texcology/registrarShorts', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(tabla_shorts),
        })
            .then(async (response) => {
                if (response) {
                    const tabla_shorts = await response.json();
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    
    //Calzado
    let calzados = document.querySelector("#calzados"),
        calzadoClasi = document.querySelector("#calzadoClasi"),
        calzadoNum = document.querySelector("#calzadoNum"),
        calzadoGen = document.querySelector("#calzadoGen");

    let calTalla = params.calzadoNum,
        calGen = params.calzadoGen,
        calTipo = params.calzadoClasi,
        calPares = params.calzados;

        const tabla_calzados = { calTalla, calGen, calTipo,calPares, id_donativo }
        fetch('http://localhost:4000/api/texcology/registrarCalzados', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(tabla_calzados),
        })
            .then(async (response) => {
                if (response) {
                    const tabla_calzados = await response.json();
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    
    //-------------------------Registro de Accesorios------------------:
    let accesorios = document.querySelector('accesorios'),
        acceClasi = document.querySelector('acceClasi');

    let acceCantidad= params.accesorios,
        acceTipo = params.acceClasi;

        const tabla_accesorios = { acceTipo, acceCantidad, id_donativo }
        fetch('http://localhost:4000/api/texcology/registrarAccesorios', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(tabla_accesorios),
        })
            .then(async (response) => {
                if (response) {
                    const tabla_accesorios = await response.json();
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
});

function queryStringToJSON(queryString) {
    if (queryString.indexOf('?') > -1) { //devuelve el numero de indice por la primera instancia del caracter
        queryString = queryString.split('?')[1]; //buscamos y nos quedamos con todo menos sin el ? (genera un arreglo separadas por donde iba el ?)
    }
    let pairs = queryString.split('&'); //buscamos y separamos parametros por & (remplaza el arreglo pero ahora separados por donde iba &)
    let result = {};
    pairs.forEach(function (pair) { //callback
        pair = pair.split('='); //busca y por cada parametro separa, separa cuando encuentre el '=' (remplaza el arreglo)
        result[pair[0]] = decodeURIComponent(pair[1] || ''); //el primer elemento
    });
    return result;
}

function datosDonativo(){
    
    const id_donador = Number(JSON.parse(sessionStorage.infoUsuario).id_donador);
    const tabla_donativos = { id_donador }
    fetch('http://localhost:4000/api/texcology/verDonativo', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(tabla_donativos),
    })
        .then(async (response) => {
            if (response) {
                const donativoLista = await response.json();
                console.log(donativoLista.length);
                localStorage.setItem('donativoActual',JSON.stringify(donativoLista.pop()));
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });

}
