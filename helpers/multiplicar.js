import {writeFileSync } from 'fs';
export {crearArchivo};
import colors from 'colors'

const crearArchivo = async(base,listar = false,hasta) =>{
    try {
        let salida = '';
        for(let i=0;i<=hasta;i++){
            salida+=`${base} ${'x'.red} ${i}=${base*i}\n`;
        }
    
        writeFileSync(`./salida/tabla-${base}.txt`,salida)
    
        console.log(salida);
        
        return `tabla-${base}.txt`
    } catch (error) {
        throw error;
    }

}