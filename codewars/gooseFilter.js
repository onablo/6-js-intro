function gooseFilter(birds) {

    var geese = ['African', 'Roman Tufted', 'Toulouse', 'Piligrim', 'Steinbacher'];

// sarasas, kur kaupsime visas leistinas reiksmes
    const rez = [];

/* einame per sarasa (bird)
    paimame birds sarase esanti nari (bird) 
    reikia palyginti ar bird yra geese sarase
    reikia eiti per geese sarasa
        paimti geese nari
        jeigu geese naris sutampa su bird reiksme, tai ji yra neleistina / neitraukiama i rez sarasa
        priesingu atveju - bird itraukiame i rez sarasa 
        
*/
    for (let b=0; b<birds.length; b++) {
        const bird = birds[b];

       let yraSarase = false;
        for (let g=0; g < geese.length; g++) {
            const goose = geese[g]; 
            if (goose === bird) {
                yraSarase = true;
                break;
            }
        }
        if (!yraSarase) {
            rez.push(bird);
        } 
    }
    return rez;
}


console.log(gooseFilter(
    ['Mallard', 'Hook Bill ', 'Afrikan', 'Crested', 'Piligrim', 'Toulouse', 'Blue Swedish']),
    ['Mallard', 'Hook Bill ', 'Crested', 'Blue Swedish']);

console.log(gooseFilter(
    ['Mallard', 'Barbary', 'Hook Bill ', 'Blue Swedish', 'Crested']),
    ['Mallard', 'Barbary', 'Hook Bill ', 'Blue Swedish', 'Crested']);
    
console.log(gooseFilter(
    ['African', 'Roman Tufted', 'Toulouse', 'Piligrim', 'Steinbacher']), []);


