const express = require ('express');
const app = express();
const path = require ('path');
const PORT = 3000;

app.use(express.static('public')); /* el app.use es un metodo que le indica que la aplicacion tiene que utilizar a nivel aplicacion en todas las peticiones que se hagan en archivos estaticos(que sean img, hojas de estilos o todos los archivos que esten dentro de la carpeta public) */

/* Routes */
app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname, './views/home.html'))
})



app.listen(PORT, () => console.log(`
Servidor escuchando en el puerto ${PORT}
http://localhost:${PORT} 
`))