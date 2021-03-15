/*
TERNARY OPERATOR: ? (Klaustukas)

palyginimas ? Ka daryti jei tenkina logika : ka daryti jei logikos netenkina

palyginimas ? true : false
*/

const a = 8;
const b = 7;

let ats = '';

if (a > b) {
    ats = 'daugiau';
} else {
    ats = 'nedaugiau';
}

console.log(ats);


const c = 3;
const d = 5;

const ats2 = c > d ? 'daugiau' : 'nedaugiau';

console.log(ats2);



const pazymiai = [7, 10, 7];

const suma = pazymiai[0] + pazymiai[1] + pazymiai[2];

const vidurkis = suma / pazymiai.length;
console.log(vidurkis);


