/*
FOR LOOP (ciklas) :

for () {}
*/


const abc = ['r', 'y', 't', 'a', 's'];

let zodis = '';
let abcIndex =0;

zodis += abc[abcIndex++];
zodis += abc[abcIndex++];
zodis += abc[abcIndex++];
zodis += abc[abcIndex++];
zodis += abc[abcIndex++];

console.log(zodis);

console.log('--------------');


for (let i=0; i < 5; i++) {
    console.log(i);
}

console.log('ciklo pabaiga');

console.log('--------------');


for (let i= 3; i<=7; i++) {
    console.log(i);
}

console.log('--------------');

const marks = [5, 7, 10, 6, 10 ];  //atspausdina visus elementus

for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]);    
} 

console.log('--------------');


const vardai = ['Petras', 'Onute', 'Jonas', 'Elvyra'];

for (let i=0; i < vardai.length; i++) {
    const raide = vardai[i];
 
    console.log(raide);
}

console.log('--------------');
  

const marks1 = [5, 7, 10, 6, 10, 3, 8, 1];
let sum = 0; 

for (let i = 0; i < marks1.length; i++) {
    const pazymis = marks1[i];
    sum += pazymis;
}

const average = sum / marks1.length;

console.log(sum, '/', marks1.length, '=', average);   

console.log('--------------');

const sakinys = 'Labas rytas';

for (let i = 0; i < sakinys.length; i++) {
    const simbolis = sakinys[i];
    console.log(simbolis);
}



console.log('--------------');



