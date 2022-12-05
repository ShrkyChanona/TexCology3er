function recoger(){
    let user = document.getElementById("user").value,
        name = document.getElementById("name").value,
        lastName = document.getElementById("lastName").value,
        correo = document.getElementById("email").value,
        password = document.getElementById("password").value,
        passwordV = document.getElementById("passwordV").value;
        
        const usuarioNew = { name,lastName, user , correo, password }
        fetch('http://localhost:4000/api/texcology/registrarUsuario', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(usuarioNew),
        })
            .then(async (response) => {
                if(response){
                    const usuarioNew = await response.json();
                    //console.log(usuarioNew[0])
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        window.location.href = "../html/index.html";
}