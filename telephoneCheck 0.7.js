//variables//
  let numero = "(6054756961)";
  console.log(numero.length);
  let regEx1 = /[(]/g;
  let regEx2 = /[)]/g;
  let regEx3 = /[()]/g;
  let regEx8 =/[^(^)^-\s]/g; 
  let regEx4 = /\D/g;
  let regEx5 = /[1]/;
  let regEx6 = /[^0^1]/;
  let regEx7 = /\W/;
  let regEx9 = /[-]/;
   
//console.log(revisarParentesis(numero));//
console.log(revisar(numero));

//funciones//
//revisar parentesis y guiones//
function revisarParentesis(cadena) {
    let muestra1;
    let muestra2;
    if (regEx2.test(cadena[cadena.length-1])== true) {
      return false
    }
    else if (regEx9.test(cadena[0]) == true|| regEx9.test(cadena[cadena.length-1]) == true) {
      return false
    } else if (regEx1.test(cadena)==true && regEx2.test(cadena) == false) {
      return false;
    } else if (regEx1.test(cadena) == false && regEx2.test(cadena) == true) {
      return false;
    } else if(! regEx3.test(cadena)) {
      return true;
    } 
    else
        muestra1 = cadena.match(regEx1);
        muestra2 = cadena.match(regEx2);
    if(muestra1.length == muestra2.length) {
      return true;
    } else 
    return false;
}
//console.log(revisarParentesis(numero));//

//remover caracteres no alfanumericos y espacios blancos//
function limpiar(cadena) {
    let cadenaLimpia 
    if(!regEx7.test(cadena)) {
      cadenaLimpia = cadena;
      return cadenaLimpia;
    } else
    cadenaLimpia = cadena.match(regEx8);
    cadenaLimpia = cadenaLimpia.join('');
    return cadenaLimpia;       
}


//revisar que haya solo dígitos//
function soloDigitos(cadena) {

if (regEx4.test(cadena) == true) {
  return false;
} else 
  return true;
}

//revisar la cantidad de digitos//
function cuantosDigitos(cadena) {
  if (cadena.length > 11 || cadena.length < 10) {
    return false;
  } else 
    return true;
}


//revisar los dígitos de las características//
function caracteristica(cadena) {
  
  //caso 1// 
  if (cadena.length == 11) {
    if (! regEx5.test(cadena[0])) {
      return false;
    } else if ( ! regEx6.test(cadena[1])) {
      return false;
    } else if (! regEx6.test(cadena[4])) {
      return false;
    } else 
      return true;

    }
  //caso 2//
  if(cadena.length == 10) {
     if (! regEx6.test(cadena[0])) {
      return false;
    } else if ( ! regEx6.test(cadena[3])) {
      return false;
    } else 
      return true;
  } else 
  return false;
}
  
  function revisar(dato) {
  if (revisarParentesis(dato) == true) {
    console.log("eu")
   let  numeroLimpio = limpiar(dato);
   console.log(numeroLimpio);
    if (soloDigitos(numeroLimpio) == true) {
      console.log("hola");
      if (cuantosDigitos(numeroLimpio) == true) {
        console.log("quehace");
        if (caracteristica(numeroLimpio) == true) { 
          console.log("todoliso");
          console.log("todo bien");
          
          return true;
        } else
        return false 

      } else 
      return false

    } else
      return false;
  } else 
  return false;
  }   




function telephoneCheck(str) {
  
  if (revisar(str) == true) {
    return true;
    } else 
    return false;
}

//telephoneCheck("555)-555-5555");//


