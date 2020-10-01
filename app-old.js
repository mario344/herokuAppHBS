const http = require('http');


//SE CREA EL SERVIDOR
http.createServer((req, res) => {


    //probando mandar JSON
    res.writeHead(200, { 'Content-Type': 'application/json' });

    let salida = {
        nombre: 'Mario',
        edad: 26,
        url: req.url
    }

    res.write(JSON.stringify(salida));
    //   res.write('Hola Mundo');
    res.end();
})

.listen(8080);

console.log('Escuchando el puerto 8080');