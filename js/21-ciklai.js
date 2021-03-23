/*
JS galimi ciklai ir "cikliskos" funkcijos/metodai:

(funkcijos)
-for
-for-in
-for-of
-while
-do-while

(metodai)
-foreach
-map
-filter
-reduce
-sort
*/

const list = [1, -5, 78, 2, 11, -14, 0, -3];


/*******************/

//FOR
//break: nutraukia ciklo darba
//continue: eiti i sekancia ciklo iteracija, jei tokia yra
// if  (item )

for (let i= 0; i < list.length; i++) {
    const item = list[i];
    if (item < -10) {
        break;
    }
    console.log(item);
}
console.log('------------');

// FOR-in 
//break: nutraukia ciklo darba
//continue: eiti i sekancia ciklo iteracija, jei tokia yra

console.log(list);

for (const i in list) {
    const item = list[i];
    if (item > 0) {
        continue;
    } 
    console.log(i, item);
}

console.log('------------');

//FOR-OF 
//break: nutraukia ciklo darba
//continue: eiti i sekancia ciklo iteracija, jei tokia yra

for (const item of list) {
    if (item > 0) {
        continue;
    }
    console.log(item);       
}                      

/*
for (const item of list) {   
    console.log(item);       
}                             
 */
console.log('------------');


//While
//break: nutraukia ciklo darba


//let randomNumber = Math.random();  
//console.log(randomNumber);
console.log('-------');

let randomNumber = 0;
let randomNumberCount = 0;

while (randomNumber < 0.9) {
    randomNumber = Math.random();      // [0..1]
    randomNumberCount++;
    console.log(randomNumberCount, randomNumber);
}
let i = 0;
while (i < list.length) {
    const item = list[i];
    console.log(item);
    i++
}

  console.log('------------');

  
   //DO-WHILE 
   //break: nutraukia ciklo darba
   
  
let dwi = 0;

do {
    console.log(dwi);
    dwi++;
} while (dwi < 5)                            


console.log('------------');


// FOREACH


//list.forEach(function (item, i, arr)  {  //anonimine funkcija
 //   console.log(i, item, arr);
//})

let suma = 0;

list.forEach(item => suma += item)   //anonimine funkcija
    console.log(suma);


/*
list.forEach(function (item, i, arr)  {  
    console.log(i, item, arr);
})
*/

const doubleList = [[1,5], 15, [8, 99], -40, [-8, -7, 15, 4], [3]];
let dlSuma = 0;

doubleList.forEach(
    innerItem => typeof innerItem === 'number'
        ? dlSuma += innerItem
        : innerItem.forEach( n=> dlSuma += n
        )
);

/*
const doubleList = [[1,5], [8, 99], [-8, -7, 15, 4], [3]];
let dlSuma = 0;
doubleList.forEach(innerItem => innerItem.forEach(n => dlSuma += n));
*/

console.log(dlSuma)



console.log('------------');


//MAP
//map( metodas perejas per duota sarasa grazina tokio pat dydzio sarasa tik su pakeistomis reiksmemis)


const mapList = [1, 2, 3, 4, 5, 6];
const formapListSquare = [];

for (const num of mapList) {
    formapListSquare.push(num*num);

}    
console.log(formapListSquare);

const mapListSquare = mapList.map(n => n * n);
console.log(mapListSquare);


console.log('------------');


// uzdavinys: visi neigiami skaiciai turi buti konvertuoti i nuli
const pazymiai =  [10, -8, 2, -6, 8, -2];

const konvertuotiPazymiai = pazymiai.map(n=> n < 0 ? 0 : n);
console.log(pazymiai);
console.log(konvertuotiPazymiai);

const desimtainiai = [3.14, 5, 6.7, -14.7, -8, 0.001];

const sveikieji = desimtainiai.map(n => Math.round(n));
console.log(desimtainiai);
console.log(sveikieji);


console.log('------------');


for (let i = 0; i< desimtainiai.length; i++) {
    desimtainiai[i] = Math.round(desimtainiai[i]);
}
console.log(desimtainiai);


console.log('------------');


// FILTER
// atrinkti tik tikrus pazymius, t.y. [1..10]
const marks = [10, -8, 2, 3.14, -6, 8, -2];

const filteredMarks = marks.filter(m => m > 1 && m % 1 === 0);

console.log(marks);
console.log(filteredMarks);


console.log('------------');


// palikti zodzius is dydziosios raides

const dictionary = ['Labas', 'rytas', 'Lietuva', 'sakau', 'tau'];

const isDidziosios = dictionary.filter(word => word[0] === word[0].toUpperCase());

console.log(dictionary);
console.log(isDidziosios);


console.log('------------');


// REDUCE

// eina per sarasa, paima visas reiksmes is eiles ir su jomis padaro viena bendra rezultata
// pvz: jei turime pazymiu sarasa tai eina per pazymius ir suskaiciuoja pazymiu suma

const dariukoPazymiai = [10, 7, 8, 6, 4];
let dariukoPazymiuSuma = 20;
dariukoPazymiai.forEach(p => dariukoPazymiuSuma += p);

console.log(dariukoPazymiuSuma);

const reducedPazymiai = dariukoPazymiai.reduce((total, paz,) => total + paz, 0);
console.log(reducedPazymiai);

console.log('------------');


// koks gausis tekstas, jei sujungsime visu zodziu pirmas raides
const dictionary2 = ['Labas', 'rytas', 'Lietuva', 'sakau', 'tau'];

const short = dictionary2.reduce ((total, word) => total + word[0], '');

console.log(short);
