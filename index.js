const express = require('express');
//path module para tratar la ruta del archivo
const path = require('path');

const app = express();

/*app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});*/

// Set static folder
//.use lo usamos para incluir middleware
app.use(express.static(path.join(__dirname, 'public')));

/*The reason we put this is because when we deploy the server ins't most 
likely isn't going to run it on 5000 it's going to have the port number 
in an environment variable so we want to check that first. If that's not 
available then we want to run on 5000*/
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));








//https://www.youtube.com/watch?v=L72fhGm1tfE