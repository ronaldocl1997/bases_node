import yargs from 'yargs'
import {hideBin} from 'yargs/helpers'
export {prueba}
console.clear();

const prueba = yargs(hideBin(process.argv))
            .option('b',{
              alias: 'base',
              type: 'number',
              demandOption: true,
              describe: 'es la base para multiplicar'
            })
            .option('l',{
              alias:'listar',
              type: 'boolean',
              demandOption: true,
              default: false,
              describe: 'es la bandera para listar'
            })
            .option('h',{
              alias:'hasta',
              type: 'number',
              demandOption: true,
              describe: 'es el limite de la tabla'
            })
            .check((argv,options)=>{
              if(isNaN(argv.b)){
                throw 'La base debe se numero'
              }
              return true
            })
            .argv