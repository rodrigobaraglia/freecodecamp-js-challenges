//Inventory Update problem from Free Code Camp, advanced algorithm scripting challenges//

function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
   var p = sumRepeatedItems(arr1, arr2);
   var q = checkNewItems(arr1, arr2);
   var r = p.concat(q);
   var s = checkNewItems(r, arr1);
   var t = r.concat(s);
   var u = sortSecondColAlpha(t);
   return t;
    
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));
  
function sumRepeatedItems(arr1, arr2) {
var sum = []
for(let i = 0; i < arr1.length; i ++) {
    for (let j = 0; j < arr2.length; j ++) {
        if (arr1[i][1] == arr2[j][1] ) {
             sum[i] = [arr1[i][0] + arr2[j][0], arr1[i][1]]
            
             
        }

    }

}  
return sum.filter(x => x !== "");
}


function checkNewItems(arr1, arr2) {
for(let i = 0; i < arr2.length; i ++) {
    for(let j = 0; j < arr1.length; j ++) {
        if(arr2[i][1]== arr1[j][1]) {
            arr2[i] = '';
        }

    }
    
}
return arr2.filter(x => x !== "");
}






function sortSecondColAlpha(arr) {
    return arr.sort(function(a,b) {
    return a[1].localeCompare(b[1]);
});
}

