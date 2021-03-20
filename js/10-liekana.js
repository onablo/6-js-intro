/*
Suskaiciuoti, kiek nurodytame intervale nuo 0 iki 11 yra skaiciu, kurie dalijasi be liekanos is 3,  5,  7.
*/
 
console.log('---------------------------');

const nuo = 0;
const iki = 11;
const daliklis = 3;
let kiekis = 0;         //ka reikia suskaiciuti 

for (let i = nuo; i<=iki; i++) {
    if (i % daliklis === 0) {  // jeigu dalybos rez yra 0 
        kiekis++                 // padidinam 1 vnt
    }    
}

const ats = `Skaiciu intervale tarp ${nuo} ir ${iki} besidalijanciu be liekanos is ${daliklis} yra ${kiekis} vienetai.`;

console.log(ats);


// 15- 20      (20-15) /5+1    Z(iki-nuo) / daliklis + 1
//i++, i+=daliklis

console.log('---------------------------');


const nuo1 = 0;
const iki1 = 11;
const daliklis1 = 3;
let count1 = (iki1 - nuo1) / 1% daliklis + 1;        

const ats1 = `Skaiciu intervale tarp ${nuo1} ir ${iki1} besidalijanciu be liekanos is ${daliklis1} yra ${count1} vienetai.`          

console.log(ats1);


