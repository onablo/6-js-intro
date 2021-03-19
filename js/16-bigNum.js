function bigNum(list) {
    // input validation
    if (typeof list !== "object") {
        return 'ERROR: netinkamas tipas, turi buti array (sarasas)'; 
    }
    if (list ===null) {
        return 'ERROR: netinkama reiksme (null)';  
    }
 
    // logic

    // result
    return 0;
}

console.log(bigNum('pomidoras'));
console.log(bigNum(485562));
console.log(bigNum(true));
console.log(bigNum(false));
console.log(bigNum(undefined));
console.log(bigNum());
console.log(bigNum(bigNum));





