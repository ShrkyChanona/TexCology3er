window.addEventListener('load',async(e) =>{

    const id_donador = Number(JSON.parse(sessionStorage.infoUsuario).id_donador);
    const tabla_donativos = { id_donador  }

        fetch('http://localhost:4000/api/texcology/verDonativo', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(tabla_donativos),
        })
            .then(async (response) => {
                if (response) {
                    const donativos = await response.json();
                    console.log(donativos);
                    insertarLista(donativos);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
})


function insertarLista(lista){
    const donador = JSON.parse(sessionStorage.infoUsuario);
    let listaDonaciones = document.querySelector('#listaDonaciones');
    let listaHTML = [];
    lista.forEach(element => {
        listaHTML.push(`<div class="col-9">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Donante: <span>${donador.nombre} ${donador.apellido}</span></h5>
                <h6 class="card-subtitle mb-2 text-muted">Codigo de rastreo: <span>${element.codigo_rastreo}</span></h6>
                <h5>
                    Estado del envio: 
                    <span class="status-pendiente" id="clase">
                        <b>${element.estado}</b>
                    </span>
                </h5>
                <p class="card-text">
                    
                </p>
            </div>
        </div>
    </div>`)
    });

    listaHTML.forEach(element =>{
        listaDonaciones.innerHTML += element;
    })
}