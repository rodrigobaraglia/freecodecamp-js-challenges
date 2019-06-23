function convertToRoman(num) {
 var numero = num;
var millares = ~~(numero/1000);
var centenas = ~~((numero/100)%10);
var decenas = ~~(((numero/100)%1)*10);
var uniSt = num.toString()/*~~(((((numero/100)%1)*10) %1) *10)*/;
var lastChar = uniSt.substr(uniSt.length-1);
var unidades = parseInt(lastChar);
var uniRom = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]; 
var decRom = ["X", "XX", "XXX", "IL", "L", "LX", "LXX", "LXXX", "XC"];
var centRom = "C";
var milRom = "M";
var nums = [1,2,3,4,5,6,7,8,9];
var outputUni;
var outputDec;
var outputCent;
var outputMil;
var romano = [] //outputMil.concat(outputCent, outputDec, outputUni);//
console.log(unidades);
console.log(decenas)

console.log(unidades);


for (let i = 0; i < nums.length; i++) {
    /*console.log("unidades " + unidades);
    console.log(nums.length);
    console.log("iteracion " + i);
    console.log("nums[i] " + nums[i]);
    console.log("uniRom " + uniRom[i]);*/

    if(unidades == nums[i]){
        outputUni = uniRom[i];
        romano.unshift(outputUni);
       /*console.log(unidades)
       console.log(nums[i])*/
        
    }
}

for (let i = 0; i < nums.length; i++) {

    if(decenas == nums[i]) {
        outputDec = decRom[i];
        romano.unshift(outputDec)
        
    } 
    
}

for (let i = 0; i < nums.length; i++) {

    if(centenas == nums[i]) {
        outputCent = centRom.repeat(nums[i]);
        romano.unshift(outputCent);
       
    }
}

for (let i = 0; i < nums.length; i ++) {
    if(millares == nums[i]) {
        outputMil = milRom.repeat(nums[i]);
        romano.unshift(outputMil);
        
    }

}
num = romano.join('');
return num;
}


console.log(convertToRoman());
