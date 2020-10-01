const express = require('express')
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));

//renderizador
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



//home
app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'diana'

    })
})

//about
app.get('/about', (req, res) => {

    res.render('about', {


    })

})


app.listen(port, () => {
    console.log(`${port}`);
});