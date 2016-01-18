var express = require('express');
var app = express();
var faker = require('faker');
var _ = require('lodash');

var generarUsuario = function(){
  var randomEmail = faker.internet.email();
  var randomImage = faker.image.avatar();
  var randomId = faker.random.uuid();
  var randomContent = faker.lorem.sentence();
  var randomDate = faker.date.past();
  return {
	id : randomId,
	contenido : randomContent,
	fecha : randomDate,
    email: randomEmail,
    imagen: randomImage
  }

}

app.get('/', function (req, res) {
  res.send('Reto 1 ');
})

app.get('/posts', function (req, res) {
  var cantidad = _.random(5,10)
  var usuarios = _.times(cantidad, generarUsuario)
  res.json(usuarios);
})

app.listen(3000);