/*const fs = require('fs');
//const fs = require('express');
//const fs = require('../fs'); // ./hs


let base = 2;

let tabla = '';
for (i = 1; i <= 12; i++) {
    tabla += `${base} * ${i} = ${base*i} \n`;
}

fs.writeFile(`tablas/tabla-${base}.txt`, tabla, (err) => {
    if (err) throw err;
    console.log('El archivo tabla-2.txt ha sido  creado!');
});*/

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');
// comando-ayuda para el usario-objeto configuracion parametros
// argv: puede tener otro nombre
const argv = require('./config/yargs.js').argv;

const colors = require('colors/safe');

let comando = argv._[0]; //arreglo posisión 0 _:['c','l']
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        //console.log('Listar');
        break
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`${colors.green('archivo creado')}  ${colors.blue(archivo)}`))
            .catch((err) => {
                console.log(err);
            });
        // console.log('Crear');
        break;
    default:
        console.log('Comando no encontrado');

}

// con destructuración


//let argv2 = process.argv; //GLOBAL ES DE NODE

//console.log(argv2);
// console.log(precess);
//console.log(multiplicar);
// PROCESS ES UNA VARIABLE GLOBAL DE NODE
//console.log(process.argv);
//console.log(process.argv[2]);
//let valor = process.argv[2].split('=');
//console.log(valor[1]);
/*let base = valor[1];
crearArchivo(base)
    .then(archivo => console.log(`archivo creado ${archivo}`))
    .catch((err) => {
        console.log(err);
    });*/