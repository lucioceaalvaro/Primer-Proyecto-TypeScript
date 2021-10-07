import { Console } from 'console';
import { exit } from 'process';
import { leerTeclado } from './view/entradaTeclado'
import { opcmenu } from './view/menu'




class Avion{
    nombre:string="";
    modelo:string="";
    pasajeros:number=0;
    combustible:number=0;
    empresa:string="Iberia";
    precioBillete:number=0;
   

    constructor(nombre:string,pasajeros:number,precioBilletes:number,modelo:string,empresa:string,combustible:number){
        this.nombre=nombre
        this.pasajeros =pasajeros
        this.precioBillete=precioBilletes
        this.modelo=modelo;
        this.empresa=empresa;
        this.combustible=combustible;
    }

    PVP(interuptor:boolean){
        if(interuptor== true){
            this.precioBillete=this.precioBillete+((this.precioBillete/100)*21)
        }
    }

    imprimir_avion(){
        console.log("================================")
        console.log("Nombre: "+this.nombre)
        console.log("Modelo: "+this.modelo)
        console.log("Pasajeros: "+this.pasajeros)
        console.log("Combustible: "+this.combustible)
        console.log("Empresa: "+this.empresa)

       
        
    }
   
}

const Aerolinea = async () => {
let salir:number=1
let elecM:number
let pvcBilletes:number=0
let nPasajeros:number=0
let Modelo:string
let Empresa:string
let combustible:string
let Navion:string
let flota:Avion[]=[]
let CArray:number=0
let ElecAvion:string

do {
    //Nos dirigimos al menu que nos devolvera la opcion selecionada
    elecM = await opcmenu()
    console.log(elecM)
    switch (elecM) {
        case 1:
            //Cliente
                
                let pvpElec:string
    
                console.clear();
                console.log("################# PLATAFORMA DE CLIENTES #################")
    
    
    
               
               
                    //Variables
                        let Bcompra:number=0
                        let Preciototal:number
                        for (let index = 0; index < flota.length; index++) {
                            
                            
                            console.log( (index+1) +") " + flota[index].nombre) 

                        }
                        ElecAvion = await leerTeclado('De que avión quieres comprar billetes')
                    //Si el avion se queda sin plazas 
                    if (flota[parseInt(ElecAvion)-1].pasajeros >0) {
                            
                        
                        console.log(`Hay ${ flota[parseInt(ElecAvion)-1].pasajeros} asientos disponibles`)
                        Bcompra =  parseInt( await leerTeclado('Dame un número de billetes que quieres comprar'))
                        //Resta el valor de pasajeros la cantidad de billetes comprados 
                        flota[parseInt(ElecAvion)-1].pasajeros= flota[parseInt(ElecAvion)-1].pasajeros-Bcompra
    
    
                        //Preguntamos si quiere el precio con IVA o sin el
                            do {                                                                //Pasamos toda la cadena a minusculas para poder comparar
                                pvpElec  = await(await leerTeclado('¿Quiere aplicar el IVA SI o NO?')).toLowerCase()
    
                                                    
                                                    
                                console.log(pvpElec)
                            } while (pvpElec == 'SI' || pvpElec == 'NO'){
                                if(pvpElec=="si"){
                                    flota[parseInt(ElecAvion)-1].PVP(true)
                                }else{
                                    flota[parseInt(ElecAvion)-1].precioBillete=pvcBilletes
                                };
                                                        
    
                            };
    
                        Preciototal=Bcompra* flota[parseInt(ElecAvion)-1].precioBillete
                        console.clear()
                        console.log("################# PLATAFORMA DE CLIENTES #################")
                        console.log(`Son  ${Preciototal}€ en total `) 
                        console.log(`Quedan ${ flota[parseInt(ElecAvion)-1].pasajeros} asientos libres`) 
                        
                        
                    
                    } else{
                     console.log("")
                     console.log("Avión Completo\n")
                     
    
                    }
        break;
        case 2:
            //Empresa
         
            console.log("################# PLATAFORMA DE EMPRESA #################")
            Navion=await leerTeclado('Nombre del avión');
            
            Modelo=await leerTeclado('Modelo  del avion')
            Empresa=await leerTeclado('Empresa propietaria del avion')
            nPasajeros=parseInt(await leerTeclado('¿Cuantos pasajeros tiene?'))
            pvcBilletes=parseInt(await leerTeclado('¿Cuanto cuesta el billete?'))
            
            //Se crea en el array Flota un avion con sus caracteristicas
            flota.push(new Avion(Navion,nPasajeros,pvcBilletes,Modelo,Empresa,0))
            CArray++
            console.log("")
            console.log("Avión Creado")
            console.log("")
            
        break;
        case 3:
            //Recorremos el array para mostrar los aviones de su interior
            for (let index = 0; index < flota.length; index++) {

                flota[index].imprimir_avion()
                
                
            }
            console.log("")
            console.log(`Existen ${CArray} aviónes creados`)
            console.log("")
        break;
        case 0:
        //Salimos del Bucle y de la aplicacion
        salir=0
        break;

    }
} while (salir==1);    
    
}
Aerolinea() 