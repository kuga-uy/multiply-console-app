const fs = require("fs");
const argv = require("../config/yargs");
const colors = require('colors');
let salida = "";
let consola = "";

const crearArchivo = async (base, limite ) => {
    try {

        console.log(colors.cyan(" ======================"));
        console.log(colors.yellow(`      Tabla del ${base} `));
        console.log(colors.cyan(" ======================"));
        limite = argv.l;

        for (let tabla = 1; tabla <= limite; tabla++) {
            salida += `       ${base} X ${tabla} = ${base * tabla}\n`; // \n genera un salto de linea.
            consola += `       ${base} ${colors.cyan('X')} ${tabla} ${colors.green('=')} ${base * tabla}\n`;
        }

        console.log(consola);

        fs.writeFileSync(`./tablas/tabla-del-${base}.txt`, salida);

        return `tabla-del-${base}.txt`;

    } catch (err) {
        throw err;
    }
  
}

module.exports = {
  crearArchivo,
};
