
const argv = require('./config/yargs.js');
const colors = require('colors');
const { crearArchivo } = require('./helpers/crearArchivo.js');

console.log(argv);

 crearArchivo( argv.b , argv.l)
    .then( nombreArchivo => console.log(colors.cyan(`   ${nombreArchivo} creada`)))
    .catch( (err) => console.log(err));