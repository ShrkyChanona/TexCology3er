//se crea una funcion de orden superior
const contactarC = (funcion) =>{
    id = document.getElementById("Chanona").title; //obtenemos el id del contacto
    funcion(id);
}

const contactarA = (funcion) =>{
    id = document.getElementById("Alan").title; //obtenemos el id del contacto
    funcion(id);
}
//const datos = (id) => window.location.href =  `#${id}`;

const datos = (id) => {
    if(id == document.getElementById("Chanona").title){
        window.location.href =  `#${id}`; // localiza el id que contiene el variable id
        document.getElementById("foto").className = "fotoC"
        document.getElementById("info").className = "info"
        document.getElementById("mstContactoElegido").value = "Carlos Eduardo Chanona Aquino" + "\n" +
        "facebook:" + "\n" + "Carlos Chanona" + "\n" + "instagram:" + "Carlos Chanona" + "\n" + "numero telefonico:" + "\n" + "961 430 93 61";
    }
    else if(document.getElementById("Alan").title){
        window.location.href =  `#${id}`;
        document.getElementById("foto").className = "fotoA"
        document.getElementById("info").className = "info"
        document.getElementById("mstContactoElegido").value = "Alan David Balbuena Zavala" + "\n" +
        "facebook:" + "\n" + "Alan Zavala" + "\n" + "numero telefonico:" + "\n" + "961 201 40 82";
    }
}



