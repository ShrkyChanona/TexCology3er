window.addEventListener('load', (e) => {
   
    const params = queryStringToJSON(window.location.search)
    console.log(params);

    let nombre = document.querySelector("#nombre"),
        //correo = document.querySelector("#correo"),
        sucursal = document.querySelector("#sucursal"),
        fecha = document.querySelector("#fecha");
        //prendas = document.querySelector("#prendas"),
        //comentario = document.querySelector("#comentario");

        //let cantidad = parseInt(params.prendasI) + parseInt(params.prendasS),
          let nombreCompleto = params.nombre + " " + params.apellido;
        
        const RegEx = /[+]/g
        //datos ya con los caracteres reemplazados
        let donante = nombreCompleto.replace(RegEx," "),
            email = params.correo.replace(RegEx," "),
            lugar = params.sucursales.replace(RegEx," "),
            dia = params.fecha.replace(RegEx," "),
            mensaje = params.comentario.replace(RegEx," ");

    nombre.innerHTML = nombre.innerHTML.replace('', `${donante}` || 'sin nombres');
    //correo.innerHTML = correo.innerHTML.replace('', `${email}`);
    sucursal.innerHTML = sucursal.innerHTML.replace('', `${lugar}`);
    fecha.innerHTML = fecha.innerHTML.replace('', `${dia}`);
    //prendas.innerHTML = prendas.innerHTML.replace('', `${cantidad}`);
    //comentario.innerHTML = comentario.innerHTML.replace('',`${mensaje}`);
    
})

function queryStringToJSON(queryString) {
    if(queryString.indexOf('?') > -1){
      queryString = queryString.split('?')[1]; // nos quedamos con todo menos sin el ?
    }
    let pairs = queryString.split('&'); // separamos parametros por &
    let result = {};
    pairs.forEach(function(pair) {
      pair = pair.split('='); // por cada parametro separamos, separamos por =
      result[pair[0]] = decodeURIComponent(pair[1] || '');
    });
    return result;
  }
