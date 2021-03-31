const argv = require('yargs')
    .option('b', {  
        alias: 'base',
        type: 'number',
        demandOption: true,
		describe: 'El número que quieres multiplicar'
    })
    .option('l', {
        alias: 'limit',
        type: 'number',
        demandOption: true,
        describe: 'el máximo número por el que quieres multiplicar',
        choices: [10, 20, 30, 40,50,60,70, 80, 90,100]
    })
    .check((argv) => {
        if(isNaN(argv.b)){
            throw 'la base debe ser un número'
        }
        return true
    }).argv;

module.exports = argv;