console.log('--------------------------');
/*
function daugyba(a, b) {
    // parametru validacija
    //jeigu a yra ne skaicius, grazinti klaidos pranesima
   

    if (typeof a !== 'number') {
        return 'Pirmasis parametras turi buti skaiciaus tipo';
    }
    if (isNaN(a)) {
        return 'Pirmasis parametras turi buti skaiciaus tipo';
    }
    if (a === Infinity) {
        return 'Pirmasis parametras turi buti skaiciaus tipo';
    }
    if (a === -Infinity) {
        return 'Pirmasis parametras turi buti skaiciaus tipo';
    }

    // jeigu b yra ne skaicius, grazinti klaidos pranesima
    if (typeof b !== 'number') {
        return 'Antrasis parametras turi buti skaiciaus tipo';
    }
    if (isNaN(b)) {
        return 'Antrasis parametras turi buti skaiciaus tipo';
    }
    if (b === Infinity) {
        return 'Pirmasis parametras turi buti skaiciaus tipo';
    }
    if (b === -Infinity) {
        return 'Pirmasis parametras turi buti skaiciaus tipo';
    }
     // logika
    const rez = a * b;

    // rezultato grazinimas
    return rez;
}
    */
    
function daugyba(a, b) {
    if (typeof a !== 'number') {
        return 'Pirmasis parametras turi buti skaiciaus tipo ';
    }
    if (isNaN(a) || a === Infinity || a === -Infinity ) {
         return `Pirmasis parametras turi buti normalus skaicius ir negali buti ${a} `;
    }

    if (typeof b !== 'number') {
         return 'Antrasis parametras turi buti skaiciaus tipo ';
    }
    if (isNaN(b) || b === Infinity || b === -Infinity ) {
         return `Antrasis parametras turi buti normalus skaicius ir negali buti ${b} `;
    }
    const rez = a * b;

    return rez;
}    


console.log(daugyba('trys', 'penki'));
console.log(daugyba(5, 'sesi'));
console.log(daugyba('trys', 7));
console.log(daugyba(true, false));
console.log(daugyba(5, false));
console.log(daugyba(true, 9));
console.log(daugyba(5, 'jkili'), '->' , 'jikuhgff');
console.log(daugyba(['jkiu'], ['gfdr']));
console.log(daugyba([4], 9));
console.log(daugyba(6, [15]));
console.log(daugyba([15], [15]));
console.log(daugyba('cbd', 5));
console.log(daugyba(15, 'cbn'));
console.log(daugyba('vbn', 'ghk'));

console.log(daugyba(NaN, 7));
console.log(daugyba(3, NaN));
console.log(daugyba(NaN, NaN));
console.log(daugyba(Infinity, 5));
console.log(daugyba(15, Infinity));
console.log(daugyba(Infinity, Infinity));
console.log(daugyba(-Infinity, 5));
console.log(daugyba(15, -Infinity));
console.log(daugyba(-Infinity, -Infinity));

console.log(daugyba(4, 5));
console.log(daugyba(44, 5));
console.log(daugyba(15, 15));
console.log(daugyba(45, 50));
console.log(daugyba(-45, -15));
console.log(daugyba(400, -5));
console.log(daugyba(0, 15));
console.log(daugyba(3.14, 12));
console.log(daugyba(4, 5), '->' , 20);
console.log(daugyba(44, 5), '->', 220);
console.log(daugyba(15, 15), '->' , 225);
console.log(daugyba(45, 50), '->' , 2250);
console.log(daugyba(-45, -15), '->' , 675);
console.log(daugyba(400, -5), '->' , -2000);
console.log(daugyba(0, 15), '->' , 0);
console.log(daugyba(3.14, 2), '->' , 6.28);
console.log(daugyba(3, 5), '->', 15);
console.log(daugyba( 5, 8), ['nhytt']);



console.log('--------------------------');

