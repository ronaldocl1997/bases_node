import {crearArchivo} from './helpers/multiplicar.js';
import {prueba} from './config/yargs.js';
import colors from 'colors'

console.log(prueba);

crearArchivo(prueba.b,prueba.l,prueba.h).then(a=>{
  console.log('prueba=',a.rainbow);
});

