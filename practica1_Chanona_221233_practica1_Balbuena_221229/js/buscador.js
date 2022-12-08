function buscar(){
    let guia = document.querySelector('#buscador').value;

    const dato = { guia }

        fetch('http://localhost:4000/api/texcology/buscarDonativo', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(dato),
        })
            .then(async (response) => {
                if (response) {
                    const datito = await response.json();
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    
}