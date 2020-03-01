const express = require('express');
const morgan = require('morgan')
const path = require('path');
const bodyParser = require('body-parser')
const app = express();


app.set('port', process.env.PORT || 3000);

//carpeta views

 app.set('views', path.join(__dirname, 'views'));
 app.set('view engine', 'ejs' )


//aqui va morgan

app.use(morgan('dev'));

//body json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
 
 //la rutas

app.use('/', require('./routes/index'));


app.get('/', (req, res) =>{
	res.render('index');
})
app.listen(3000, () => {
	console.log(`cadena de texto ${3000}`)
}) 