window.addEventListener('load', async () => {
    if(!sessionStorage.infoUsuario){
        window.location.href = "../html/index.html";
    }
})