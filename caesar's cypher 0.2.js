function rot13(str) { // LBH QVQ VG!
var alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var cadena = str;
//cadena = "serr pbqr pnzc"//

//console.log(alfabeto.length);//
var cifrado = [];
for (let i = 0; i < cadena.length; i++) {
      if(cadena[i] == " ") {
        cifrado[i]= " ";
        } 
      if (cadena[i] == "!") {
        cifrado[i] = "!";
      }
      if (cadena[i] == "?") {
        cifrado[i] ="?";
      }
      if (cadena[i] == ".") {
        cifrado[i] = ".";

      }
      for (let j = 0; j < alfabeto.length; j++) {
        if (cadena[i] == alfabeto[j]) {
        //console.log(true);//
        cifrado[i] = alfabeto[j - 13];
        //console.log(cifrado);//

      }
      
     


}
//console.log(cifrado.join(''));//

}  
console.log(cifrado.join(''));
var resultado = cifrado.join('');
console.log(resultado);
  return resultado;
 
}

rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
