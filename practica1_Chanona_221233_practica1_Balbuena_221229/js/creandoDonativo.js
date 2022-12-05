
window.addEventListener('load', (e) => {
    const codigo_rastreo = generarGuia();
    const fecha = new Date();
    let today = fecha.toLocaleDateString();
    let status = "Pendiente";
    
    const id_donador = Number(JSON.parse(sessionStorage.infoUsuario).id_donador);
    const tabla_donativos = { codigo_rastreo , today, status, id_donador  }
    //sessionStorage.removeItem('infoUsuario')
    
        fetch('http://localhost:4000/api/texcology/crearDonativo', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(tabla_donativos),
        })
            .then(async (response) => {
                if (response) {
                    const tabla_donativos = await response.json();
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
});

//genera numeros de rastreo
function generarGuia() {
    const codigo = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        'A', 'B', 'C', 'D', 'E', 'F', 'a', 'b', 'c', 'd', 'e', 'f', 'g'];

    let guia = "";
    let codigoGuia = "";
    let guiaRedu = [];

    //Ordenamiento fisher-yates
    for (let i = codigo.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); //random index
        [codigo[i], codigo[j]] = [codigo[j], codigo[i]]; // intercambio
        guia += codigo.pop();
    }

    //separar la cadena anterior
    const splitCode = guia.split("");
    //reducir la cadena
    for (let i = 0; i < 6; i++) {
        guiaRedu.push(splitCode.shift());
        codigoGuia += guiaRedu.pop();
    }

    return codigoGuia;
}