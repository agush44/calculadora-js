/* eslint-disable no-fallthrough */
/* eslint-disable no-case-declarations */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// Servicios
const serMutualTit = 3842;
const servMutualPart = 3220;
const servSepelio = 100;
const protOdontInd = 566;
const protOdontFam = 356;
const fondoJub1 = 527;
const fondoJub2 = 1053;
const fondoJub3 = 1580; 

// Aportes requeridos ingreso individual según plan
const apReqPMIind = 9389.79;
const apReqPMI2000ind = 14156.95;
const apReqPMI3000ind = 21380.06;

// Aportes requeridos grupo familiar según plan
const apReqPMIfam = 21668.97;
const apReqPMI2000fam = 27146.67;
const apReqPMI3000fam = 33406.58;

function difTope(aporte, aportePMIind, aportePMI2000ind, aportePMI3000ind, cantPersonas, aportePMIFam, aportePMI2000Fam, aportePMI3000Fam) {
    if(cantPersonas===1){
        return (
            difPMI = aportePMIind - aporte,
            difPMI2000 = aportePMI2000ind - aporte,
            difPMI3000 = aportePMI3000ind - aporte
        )
            
}else{
    return (
        difPMI = aportePMIFam - aporte,
        difPMI2000 = aportePMI2000Fam - aporte,
        difPMI3000 = aportePMI3000Fam - aporte
    )
}
}

function fondoJub(edad, sexo) {
    if (sexo==="F"){
        if(edad>=45 && edad<=49){
          return fondoJub1;
            }if (edad>=50 && edad<=54){
            return fondoJub2;
            }if (edad>=55){
            return fondoJub3;
            }

    }else {
        if(edad>=50 && edad<=54){
            return fondoJub1;
              }if (edad>=55 && edad<=59){
              return fondoJub2;
              }if (edad>=60){
              return fondoJub3;
              }
    } 
        
    }

function cotizar() {
    let peopleQuantity = parseInt(prompt("Ingresá cantidad de personas"));
    let aporteTit= parseInt(prompt("Ingresá aporte de obra social de titular"));
    let ageTit= parseInt(prompt("Ingresá edad del titular"));
    let sexTit = prompt("Ingresá sexo del titular (M/F)");
    let ingConv = parseInt(prompt("Ingresa un conviviente? Si - No"));
    let agePart= parseInt(prompt("Ingresá edad del conviviente"));
    let sexPart = prompt("Ingresá sexo del conviviente (M/F)");
    let menorQuantity = parseInt(prompt("Ingresá cantidad de hijos menores de 10 años"));

    if(peopleQuantity === 1){
        let subTotal1 = serMutualTit;
        let subTotal2 = fondoJub(ageTit,sexTit);
        let total = subTotal1 + subTotal2;

    }if(peopleQuantity>1){
        if(ingConv==="Si" && peopleQuantity===2){
            if(ageTit<31 && agePart<31){
                
            
            return (`
                <div>
                    <div>
                        <h1>Cotización</h1>
                    </div>
                    <div>
                        <h1>Extra Mensual = ${total}</h1>
                    </div>

                </div>`


            )
        }
     
    }
    return total;
}
}