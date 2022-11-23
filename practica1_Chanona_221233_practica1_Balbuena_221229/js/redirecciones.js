//aqui iran todas las redirrecciones por boton

const donacion = () => {
    window.location.href = "../html/Donacion.html";
}

const home = () => {
    window.location.href = "../html/Home.html";
}

const iniciarSesion = async () => {
    let correo = document.getElementById("email").value;
    let pass = document.getElementById('password').value;

    const usuario = { correo, pass }
    fetch('http://localhost:4000/api/texcology/validarUsuario', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(usuario),
    })
        .then(async (response) => {
            if(response){
                const usuario = await response.json()
                console.log(usuario[0])
                if(usuario[0]){
                    window.location.href = "../html/home.html";
                }
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    
}

const registrarUsuario = () => {
    window.location.href = "/html/RegistroU.html";
}

const historial = () => {
    window.location.href = "../html/Historial.html";
}

const ayuda = () => {
    window.location.href = "../html/Ayuda.html";
}


window.addEventListener('load', async () => {
    const urlInfo = await fetch('http://localhost:4000/api/texcology')
    const info = await urlInfo.json()

    const appName = document.querySelector('#appName')
    appName.innerHTML = info[0].nombre
})