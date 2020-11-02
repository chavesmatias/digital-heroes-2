// PASO 1: Crear una constante llamada express y requerir el modulo express

// PASO 2: Ejecución de Express
// Recorda que express es una funcion... hay que invocarla y guardalo en una constante llamada app

// PASO 3: Informacion que vamos a usar
// Crea una variable (por ej. heroes) y asignale como valor el contenido del archivo "heroes.json"
// Tip: p/odes usar el require como si fuera un modulo ;)

// PASO 4: Configurando el servidor
// Crea una constante llamada PORT y asignale como valor el numero tres mil
// ...

// Reemplaza los guiones por la constante para que utilice ese numero de puerto
// Sabes por que lo definimos como constante y no como variable ? 
// /app.listen(____, () => console.log(`Server running in ${____} port`));

// // CONSIGNA 1
// // Ruta Raíz / Home
// app.get('/', _que_debemos_hacer_aqui_para_que_funcione_?_);

// // CONSIGNA 2
// // Ruta /heroes
// // Consigna: enviar todo el array
// app.get(_nombre_de_ruta_, (_que_parametros_necesita_?_) => {
//   res.send(_donde_estan_los_datos_que_voy_a_enviar_?_);
// });

// // CONSIGNA 3
// // Aqui creas la ruta para devolver la pagina de los creditos
// // Podes resolverlo en base a los ejemplos anteriores.


// // Ruta... ¿Pára qué sirve esto?
// app.get('*', (req, res) => {
//   res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
// });

// comienza mi pagina web

const express = require ('express')
const app = express
const heroes = require ('./heroes.json')
const PORT = 3000
app.listen(PORT, () => console.log(`Server running in ${PORT} port`));
app.get('/', function (req, res){
  res.send ('Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los Héroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!')
});
app.get('/heroes', (req, res) => {
  res.send(heroes);
});
app.get('/creditos', (req, res) => {
  res.send('Matias Chaves' + ' / ' + 'Utah! Give me two!');
});
app.get('*', (req, res) => {
  res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});