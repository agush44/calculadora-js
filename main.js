// Servicios
const serMutualTit = 3842;
const servMutualPart = 3220;
const servSepelio = 100;
const protOdontInd = 566;
const protOdontFam = 356;

// Aportes requeridos ingreso individual según plan
const apReqPMIind = 9389.79;
const apReqPMI2000ind = 14156.95;
const apReqPMI3000ind = 21380.06;

// Aportes requeridos grupo familiar según plan
const apReqPMIfam = 21668.97;
const apReqPMI2000fam = 27146.67;
const apReqPMI3000fam = 33406.58;

// Sueldo mínimo para el ingreso en cada plan
const sueldoMinPMI = 76000;
const sueldoMinPMI2000 = 109000;
const sueldoMinPMI3000 = 147000;

function cotizar() {
    let peopleQuantity = parseInt(prompt("Ingresá cantidad de personas"));
    let ageTit= parseInt(prompt("Ingresá edad del titular"));
    let plan;
    // Aportes mínimos para el ingreso en cada plan
    const apMinPMI = aportesMinimos(sueldoMinPMI);
    const apMinPMI2000 = aportesMinimos(sueldoMinPMI2000);
    const apMinPMI3000 = aportesMinimos(sueldoMinPMI3000);

    function aportesMinimos(sueldoMin){
        let apMin = parseInt((sueldoMin * 0.0765).toFixed(2));
        return apMin;
    }

    function diferenciaTope(aporteRequerido, aporteTotal){
        let resultadoDifTope = (aporteRequerido - aporteTotal).toFixed(2);
        return resultadoDifTope;
    }

    function retornarAportes(){
        let contributions = parseFloat(prompt("Ingresá descuento de obra social"));
        let aportes = parseFloat(((contributions * 100) / 3) * 0.0765).toFixed(2);
        return aportes;
    }

    let aporteTotal = retornarAportes();

    switch(peopleQuantity) {
        case 1:
            // Si es menor de 31 años:
            if(ageTit < 31){
                // Si es menor de 31 años y el aporte es mayor o igual al requerido para PMI(sueldo mínimo para PMI 2000):
                if(aporteTotal >= apReqPMIind){
                    // Si es menor de 31 años y cumple el sueldo requerido en PMI o le alcanza el mínimo de PMI 2000 abonando dif de aportes
                    if(aporteTotal < apReqPMI2000ind){
                        resultadoDifTope = diferenciaTope(apReqPMI2000ind, aporteTotal);
                        plan = `Plan PMI con cuota bonificada o PMI 2000 con diferencia de aportes de $${resultadoDifTope}`;
                    // Si es menor de 31 años y cumple el sueldo requerido en PMI 2000 o le alcanza el mínimo de PMI 3000 abonando dif de aportes
                    }else if(aporteTotal < apReqPMI3000ind){
                        resultadoDifTope = diferenciaTope(apReqPMI3000ind, aporteTotal);
                        plan = `Plan PMI 2000 con cuota bonificada o PMI 3000 con diferencia de aportes de $${resultadoDifTope}`;
                    // Si es menor de 31 años y cumple el sueldo requerido para PMI 3000
                    }else{
                        plan = `Plan PMI 3000 con cuota bonificada`;
                    }
                // Si es menor de 31 años y el sueldo es menor al requerido pero mayor o igual al mínimo
                }else if(aporteTotal >= apMinPMI && aporteTotal < apReqPMIind){
                    resultadoDifTope = diferenciaTope(apReqPMIind, aporteTotal);
                    plan = `Plan PMI con diferencia de aportes de $${resultadoDifTope}`;
                // Si es menor de 31 años pero el sueldo es menor al mínimo
                }else{
                    plan = `No es viable el ingreso por sueldo bajo`;
                }
            }else{
                alert("es mayor de 31");
            }
            alert(plan);
            break;
        case 2:  
            
            let ageCony = parseInt(prompt("Ingresá edad de conviviente"));
            let youngQuantity = parseInt(prompt("Ingresá cuántos hijos son menores de 10 años"));

        case 3:
            
        case 4:  
            
        case 5:
            
        case 6:
            
        case 7:
            
        case 8:
            
    }
}
