

function sym(v1, v2, v3, v4, v5, v6) {
  
  return symTwo(symTwo(symTwo(symTwo(symTwo(v1,v2),v3),v4),v5),v6);
}


function symTwo(v1, v2 ){ 
  if(v2 === undefined) {
    return v1;
  } else
var a = v1;
var b = v2;
var c;
var d = a.concat(b);

for(let i = 0; i < a.length; i ++) {
    for(let j = 0; j < b.length; j ++) {
     if (b[j] == a[i]) {
        c =  b[j];
        d = d.filter(x => x !== c);
       

     }
  }
  
}
return noDuplicates(d);
}


function noDuplicates(arr) {
var e = arr;
for (let i = 0; i < e.length; i ++ ) {
  for (let j = i + 1; j < e.length; j ++ ) {
  if(e[j] == e[i]) {
    e[j]= "";
        }
      }
  
  }
  return e.filter(x => x !== "");
}


