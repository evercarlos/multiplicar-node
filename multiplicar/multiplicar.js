const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log("=================================".blue);
    console.log(`========tabla del ${base} ===========`.green);
    console.log("=================================".blue);

    if (!Number(base)) {
        reject(`El valor introducido ${base} no es un número`);
        return;
    }
    let data = '';
    for (i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }

}

let crearArchivo = (base, limite = 10) => {

        return new Promise((resolve, reject) => {

            if (!Number(base)) {
                reject(`El valor introducido ${base} no es un número`);
                return;
            }
            let data = '';
            for (i = 1; i <= limite; i++) {
                data += `${base} * ${i} = ${base*i} \n`;
            }

            fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
                if (err)
                    reject(err); // err;
                else
                    resolve(`tabla-${base}.txt`);
                //console.log('El archivo tabla-2.txt ha sido  creado!');
            });

        });
    }
    // ya no se pone crearArchivo:CrearArchivo gracias a MScript6
module.exports = {
    crearArchivo,
    listarTabla
}