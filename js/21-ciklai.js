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



 /*
// FOREACH

list.forEach(function(item) {
    console.log(item);
}  
*/




