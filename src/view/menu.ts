import { leerTeclado } from './entradaTeclado'

export const opcmenu = async () => {
    console.log("################# MENU #################")
    let n: number
    console.log('\n')
    console.log('1.- Entorno Cliente')
    console.log('2.- Entorno Empresa')
    console.log('3.- Muestra aviones y billetes') 
    console.log('0.- Salir')
    n = parseInt( await leerTeclado('Opción: ') )
    console.clear();
    return n
    
}