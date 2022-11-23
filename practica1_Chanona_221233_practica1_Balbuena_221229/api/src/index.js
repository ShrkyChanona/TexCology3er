const app = require('./app')
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:4000'
}));

app.listen(app.get('port'), () => {
    console.log('Servidor escuchando en puerto', app.get("port"))
});