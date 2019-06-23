function checkCashRegister(price, cash, enCaja) {
  var vueltoDebido = calcularVuelto (price, cash);
  var arrayCaja = antiFloat(depurarNum(enCaja));
  var totalCaja = sumarDinero(arrayCaja);
  var reservaPennies = totalPennies(enCaja)*1000;
  var vueltoDoy = cambio(vueltoDebido,enCaja);
  var totalVuelto = sumarDinero(depurarNum(vueltoDoy));
  var restoPennies = checkPennies(vueltoDebido, totalVuelto);
  var totalVueltoRevisado = correctPennies(totalVuelto, restoPennies, reservaPennies); 
  vueltoDoy[0][1] = vueltoDoy[0][1] + restoPennies;
  vueltoDoy = removeZeros(vueltoDoy);
  vueltoDoy = depurarArray(vueltoDoy);
  vueltoDoy = vueltoDoy.reverse();
  var vueltoDoyNum = toFloat(depurarNum(vueltoDoy));
  var vueltoDoyStr = depurarStr(vueltoDoy);
  vueltoDoy = combinar(vueltoDoyStr, vueltoDoyNum);
  var estadoCaja = hayFondos(restoPennies, reservaPennies);
  
  if (estadoCaja =="OPEN") {
		estadoCaja = hayFondos(vueltoDebido, totalCaja);  
  }
  if (estadoCaja == "INSUFFICIENT_FUNDS") {
    vueltoDoy = [];
  } else
  if (estadoCaja == "CLOSED") {
    vueltoDoy = enCaja;
  } 
 
  var elCambio = {
    status : estadoCaja,
    change : vueltoDoy,

  }
  
  // Here is your change, ma'am.
  return elCambio;
}



function calcularVuelto (precio, efectivo) {
  let elVuelto = precio * 1000 - efectivo *1000;
  if (elVuelto < 0) {
    elVuelto = -1 * elVuelto
    return elVuelto;
  } else 
	elVuelto = 0;
	return elVuelto;  
}

function depurarNum(arr) {
 let  arrayNum = arr.flat().filter(x => typeof  x === 'number');

 return arrayNum;
}

function antiFloat(arr) {
  var noFloat =  arr.map(x => x * 1000);
  return noFloat;
}

function sumarDinero (arr) {
  let totalDinero = arr.reduce(function(valorAnterior, valorActual, indice, vector){
  return valorAnterior + valorActual;
}, 0);
  return totalDinero;

}

function totalPennies (arr) { 
  var penniesTotal = depurarNum(arr)[0];
  return penniesTotal; 
  }

function cambio (vueltoBase, cashInDrawer) {
    var dinero = cashInDrawer.flat().filter(cashInDrawer => typeof  cashInDrawer === 'number').reverse().map(x => x *1000);
  
    var denominaciones = cashInDrawer.flat().filter(cashInDrawer => typeof cashInDrawer === 'string');
    var currencies = [100,20,10,5,1,0.25,0.1,0.5,0.1].map(x => x *1000);
  
    var vueltoEntero = Math.floor(vueltoBase/currencies[0]);
    var billetes = [];
        for(let i = 0; i < dinero.length; i ++) {
     billetes.push((dinero[i]/currencies[i]))   
  
   }   

    var laPila = [];
    var laPilaDinero = [];
    var elVueltoEntero; 
    var billetesDoy;
    var dineroDoy;
        for(let j = 0; j < currencies.length; j ++) {
            elVueltoEntero = Math.floor(vueltoBase/currencies[j])
            billetesDoy=  check(elVueltoEntero, billetes[j]);
            dineroDoy= billetesDoy * currencies[j];
            laPila[j] = billetesDoy;
            laPilaDinero[j] = dineroDoy;
            vueltoBase = vueltoBase - dineroDoy;
           
           
        }
    var laPilaDineroReves = laPilaDinero.reverse()
    var outPut = [];
        for( let k = 0; k < laPilaDinero.length; k ++) {
        outPut[k] = [denominaciones[k], laPilaDineroReves[k]] 
        }

    
      return outPut; 

}

function check(debo, tengo) {
    if (debo >= tengo) {
    return tengo; 

  } else 
    return (debo);
}


function checkPennies(debo,doy) {
let diferencia = debo - doy;
return diferencia;
}

function correctPennies(doy, falta, reserva) {
  var ajuste = doy + falta;
  if ( falta <= reserva) {
    return ajuste;
  } else 
    return doy;
}

function removeZeros(arr) {
  var sinCeros = []
    for (let i = 0; i < arr.length; i ++) {
         if (arr[i][1] > 0) {
            sinCeros[i] = arr[i];
          } 
  
        }
    return sinCeros;
  }

function depurarArray(arr) {
   var cleanArray = arr.filter(x => x != undefined);
   return cleanArray;
 }

function toFloat (arr) {
  let f = arr.map(x => x / 1000)
  return f;
  };

function depurarStr(arr) {
   let  arrayStr = arr.flat().filter(x => typeof  x === 'string');
   return arrayStr;
}

function combinar(arrX, arrY) {
  var arrZ = []
  for(let i = 0; i < arrX.length; i++) {
    arrZ[i] =[arrX[i], arrY[i]];

  }
  return arrZ;
}

function hayFondos(debo, tengo) {
      var estado = "OPEN";
      if (debo > tengo) {
        estado = "INSUFFICIENT_FUNDS";
        return estado;
      } else 
      if (debo == tengo) {
        estado = "CLOSED";
        return estado;

      } else 
        return estado;
}



checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);




















