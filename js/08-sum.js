/* 
Suskaiciuoti imtinai intervale esancius skaicius:
*/

const nuo = 0;
const iki = 4;
let sum = 0;
 
for (let i=0; i < 5; i++) {
    console.log(i);
}
for (let i=0; i < 5; i++) {
    sum += i;
}
const ats = 'Intervale nuo ' + nuo + ' iki ' + iki + ' suma yra ' + sum  + '.' ;

console.log( ats );

console.log('--------');

const nuo1 = 10;
const iki1 = 14;
let sum1 = 10;

for (let i=10; i < 15; i++)
    sum1 +=i;
const ats1 = 'Intervale nuo ' + nuo1 + ' iki ' + iki1 + ' suma yra ' + sum1  + '.' ;

console.log( ats1 );

console.log('--------');


const nuo2 = 0;
const iki2 = 100;
let sum2 = 0;

for (let i=1; i<=100; i++) {
    sum2+=i;
}
const ats2 = 'Intervale nuo ' + nuo2 + ' iki ' + iki2 + ' suma yra ' + sum2  + '.' ;

console.log( ats2 );

console.log('--------');


const nuo3 = 574;
const iki3 = 815;
let sum3 = 574;

for(let i=574; i<=815; i++) {
    sum3+=i;
}
const ats3 = 'Intervale nuo ' + nuo3 + ' iki ' + iki3 + ' suma yra ' + sum3  + '.' ;

console.log( ats3 );

console.log('--------');


const nuo4 = -70;
const iki4 = -30;
let sum4 = -70;

for(let i=-70; i<=-30; i++) {
    sum4+=i;
}
const ats4 ='Intervale nuo ' + nuo4 + ' iki ' + iki4 + ' suma yra ' + sum4  + '.' ;

console.log( ats4 );

console.log('--------'); 

const nuo5 = -50;
const iki5 = -50;
let sum5 = -50;

for(let i=-50; i<=-50; i++) {
    sum5+=i;
}
const ats5 ='Intervale nuo ' + nuo5 + ' iki ' + iki5 + ' suma yra ' + sum5  + '.' ;

console.log( ats5 );

console.log('--------'); 


const nuo6 = 0;
const iki6 = 0;
let sum6 = 0;

for(let i=0; i<=0; i++) {
    sum6+=i;
}
const ats6 ='Intervale nuo ' + nuo6 + ' iki ' + iki6 + ' suma yra ' + sum6  + '.' ;

console.log( ats6 );

console.log('--------'); 
