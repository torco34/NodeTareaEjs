const express = require('express')
const routes = express.Router();

routes.get('/', (req, res) =>{
	res.render('index', 
		{title: 'inicio'
	});
})
 
 routes.get('/new-entry', (req, res)=>{
    res.render('new-entry',{
    	title: 'nueva entrada'
    });
 });


module.exports = routes;