window.addEventListener('load', (e) => {

    //URL como parametro
    const params = queryStringToJSON(window.location.search)
    //params contiene todas las cadenas de la url
    console.log(params);
    generarGuia()

    let nombre = document.querySelector("#nombre"),
        correo = document.querySelector("#correo"),
        sucursal = document.querySelector("#sucursal"),
        fecha = document.querySelector("#fecha");
        comentario = document.querySelector("#comentario");

        //-------------------------Prendas superiores------------------:
        //Camisetas
        let camisetas = document.querySelector("#camisetas"),
            camisetaTipo = document.querySelector("#camisetaTipo"),
            camisetaTalla = document.querySelector("#camisetaTalla"),
            camisetaGen = document.querySelector("#camisetaGen");
        //Blusas
        let blusas = document.querySelector("#blusas"),
            blusaTipo = document.querySelector("#blusasTipo"),
            blusaTalla = document.querySelector("#blusaTalla");
        //Abrigos
        let abrigos = document.querySelector("#abrigos"),
            abrigoTipo = document.querySelector("#abrigoTipo"),
            abrigoTalla = document.querySelector("#abrigoTalla"),
            abrigoGen = document.querySelector("#abrigoGen");
        //Vestidos
        let vestidos = document.querySelector("#vestidos"),
            vestidoTipo = document.querySelector("#vestidoTipo"),
            vestidoTalla = document.querySelector("#vestidoTalla");

            //-------------------------Prendas Inferiores------------------:
            //Pantalones
            let pantalones = document.querySelector("#pantalones"),
                pantalonTela = document.querySelector("#pantalonTela"),
                pantalonTalla = document.querySelector("#pantalonTalla"),
                pantalonGenero = document.querySelector("#pantalonGenero");
            //Shorts
            let shorts = document.querySelector("#shorts"),
                shortTela = document.querySelector("#shortTela"),
                shortTalla = document.querySelector("#shortTalla"),
                shortGenero = document.querySelector("#shortGenero");
            //Calzado
            let calzados = document.querySelector("#calzados"),
                calzadoClasi = document.querySelector("#calzadoClasi"),
                calzadoNum = document.querySelector("#calzadoNum"),
                calzadoGen = document.querySelector("#calzadoGen");

        let nombreCompleto = params.nombre + " " + params.apellido;
        
        //indica el caracter que remplazara
        const RegEx = /[+]/g
        //remplaza todos los caracteres '+' por un espacio
        let donante = nombreCompleto.replace(RegEx," "),
            //email = params.correo.replace(RegEx," "),
            lugar = params.sucursales.replace(RegEx," "),
            dia = params.fecha.replace(RegEx," ");
            //mensaje = params.comentario.replace(RegEx," ");

        let camisa = params.camisetaTipo.replace(RegEx," "),
            blusa = params.blusaTipo.replace(RegEx," "),
            abrigo = params.abrigoTipo.replace(RegEx," "),
            vestido = params.vestidoTipo.replace(RegEx," ");


    nombre.innerHTML = nombre.innerHTML.replace('', `${donante}` || 'sin nombres');
    sucursal.innerHTML = sucursal.innerHTML.replace('', `${lugar}`);
    fecha.innerHTML = fecha.innerHTML.replace('', `${dia}`);
    
})

function queryStringToJSON(queryString) {
    if(queryString.indexOf('?') > -1){ //devuelve el numero de indice por la primera instancia del caracter
      queryString = queryString.split('?')[1]; //buscamos y nos quedamos con todo menos sin el ? (genera un arreglo separadas por donde iba el ?)
    }
    let pairs = queryString.split('&'); //buscamos y separamos parametros por & (remplaza el arreglo pero ahora separados por &)
    let result = {};
    pairs.forEach(function(pair) { //callback
      pair = pair.split('='); //busca y por cada parametro separa, separa cuando encuentre el '=' (remplaza el arreglo)
      result[pair[0]] = decodeURIComponent(pair[1] || ''); //el primer elemento
    });
    return result;
  }

  //genera numeros de rastreo
function generarGuia(){
    const codigo = ['0','1','2','3','4','5','6','7','8','9',
                    'A','B','C','D','E','F','a','b','c','d','e','f','g']

    let guia = "";
    let codigoGuia = "";
    let guiaRedu = [];

    //Ordenamiento fisher-yates
      for(let i = codigo.length-1 ; i > 0 ;i--){
          let j = Math.floor(Math.random() * (i + 1)); //random index
          [codigo[i],codigo[j]] = [codigo[j],codigo[i]]; // intercambio
          guia += codigo.pop();
      } 
      console.log(guia)
      //separar la cadena anterior
      const splitCode = guia.split("");
      //reducir la cadena
      for(let i = 0; i < 6; i++){
        guiaRedu.push(splitCode.shift());
        codigoGuia += guiaRedu.pop();
      }
      console.log(codigoGuia)
}