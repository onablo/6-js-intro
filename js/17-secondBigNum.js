/*
- antras pagal diduma skaicius sarase

- rekursija? rasti didziausia skaiciu bet kokio gilumo sarase
    - kas vyriausias gimineje?
    - kas turi daugiausia vaiku gimineje
*/


function bigNum(list) {
    // input validation
    if (!Array.isArray(list)) {
        return 'ERROR: netinkamas tipas, turi buti array (sarasas)';
    }
    if (list.length === 0) {
        return 'Error: array is empty';
    }
  
    // logic
    let biggest = -Infinity;
    let secondBiggest = -Infinity;

    for (let i = 0; i < list.length; i++ ) {
        const number = list[i];

        //ar tai normalus skaicius
        if (typeof number !== 'number' || !isFinite(number)) {
            continue;  //eina i sekancia ciklo iteracija
        }

        //ar jis didesnis uz jau zinoma didziausia skaiciu
        if (number > biggest) { 
            secondBiggest = biggest;
            biggest = number;
        } else
         if (number > secondBiggest && number < biggest) { 
            secondBiggest = number;
        }    
    }

    //logic validation
    if (secondBiggest === -Infinity) {
        return 'ERROR: sarase nerastas nei vienas normalus skaicius';
    }

    // result
    return secondBiggest;
}


console.log(bigNum([1, 2, 3]), '->', 2);
console.log(bigNum([-5, 78, 14, 0, 18]), '->', 18);
console.log(bigNum([69, 69, 69, 69, 66]), '->', 66);
console.log(bigNum([-1, -2, -3, -4, -5, -6, -7, -8]), '->', -2);
console.log(bigNum([-15, -32, -3, -34, -5, -6, -7, -8]), '->', -5);


console.log(bigNum([1, 8, 3, 5, '']), '->', 5);
console.log(bigNum([1, 8, '', 3, 5]), '->', 5);
console.log(bigNum(['', 1, 8, 3, 5]), '->', 5);

