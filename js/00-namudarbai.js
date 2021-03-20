console.log('Kintamuju iniciavimas');
console.log('-----------1');

const pirmislaidos = 27;
const antrislaidos = 34;
const trecislaidos = 15;
const asuma = pirmislaidos + antrislaidos + trecislaidos;

console.log(pirmislaidos);
console.log(antrislaidos);
console.log(trecislaidos);
console.log(asuma);

console.log(pirmislaidos, '+', antrislaidos, '+', trecislaidos, '=', asuma);

const matTexts  = pirmislaidos + ' + ' + antrislaidos + ' + ' +  trecislaidos  + ' = ' + asuma;
console.log(matTexts);


console.log('-----------2');


const garment = 'Jacket';
const price = 50;

console.log(garment);
console.log(price);
console.log(garment + ' price ' + ' is ' +  price   + ' eur' + '.' );

console.log(`${garment} price is ${price} eur.`)


console.log('-----------3');


const svoris = [15, 21, 19, 18, 27]; 
console.log(svoris);

const svoriuSuma = svoris[0] + svoris[1] + svoris[2] + svoris[3] + svoris[4];
const vaikskaicius = svoris.length; 

console.log('Bendras svoris:', svoriuSuma);
console.log('Vaiku skaicius:', svoris.length);
console.log('Bendras svorio vidurkis:' , svoriuSuma / svoris.length);


console.log('-----------4');


const vardai = ['Vidas', 'Lina', 'Ieva', 'Tomas', 'Roma'];
const vardukiekis = vardai.length;
const vyrvardai = vardai[0, 3];

console.log(vardai);
console.log('Vardu kiekis:' + vardukiekis);
console.log('Vyriski vardai:', vardai[0] + ' ir ' + vardai[3] + '.');


console.log('----------------');



console.log('Veiksmai su kintamaisiais');
console.log('------------1');


const numbers = [25, 95, 79, 46, 17 ];
console.log(numbers);

let sum = 0;
let numbersIndex = 0; 

sum += numbers[numbersIndex++];
sum += numbers[numbersIndex++];
sum += numbers[numbersIndex++];
sum += numbers[numbersIndex++];
sum += numbers[numbersIndex++];

    console.log(sum);


console.log('-----');


const values = [ 20, 30, 50, 40, 60];
console.log(values);

let sum1 = 0; 
let valuesIndex = 0;

sum1 += values[valuesIndex++];
sum1 += values[valuesIndex++];
sum1 += values[valuesIndex++];
sum1 += values[valuesIndex++];
sum1 += values[valuesIndex++];


console.log(sum1);


console.log('-----');


const values1 = [15, 25, 60, 35, 10];
console.log(values1);

let sum2 = 0;
let values1Index = 0;

sum2 += values1[values1Index++];
sum2 += values1[values1Index++];
sum2 += values1[values1Index++];
sum2 += values1[values1Index++];
sum2 += values1[values1Index++];

console.log(sum2);



console.log('-----------2');


const salis = ['L', 'i', 'e', 't', 'u', 'v', 'a'];
let salisLt = '';
let salisRaide = 0;

salisLt += salis[salisRaide++];
salisLt += salis[salisRaide++];
salisLt += salis[salisRaide++];
salisLt += salis[salisRaide++];
salisLt += salis[salisRaide++];
salisLt += salis[salisRaide++];
salisLt += salis[salisRaide++];


console.log(salisLt);



const vaisiai = ['Apelsinai', 'obuoliai', 'kriauses', 'vynuoges', 'braskes'];

console.log(vaisiai);
console.log(`Perkamiausi vaisiai:  ${vaisiai}`);


console.log('-----------3');


const Number = [ 1, 2, 3, 4, 5];
console.log(Number);

console.log( `Sarasa sudaro: ${Number} skaiciai.`);



console.log('-----------4');


const vais = ['Apelsinai', 'obuoliai', 'kriauses', 'vynuoges', 'braskes'];

console.log(`Vaisiu sarasas: ${vais}.`);



console.log('---Kintamuju palyginimas---');
console.log('-----------------1');


const k = 15;
const m = 10;

if (k>m) { 
    console.log(k, ' yra daugiau uz ', m);
}
if (m<k) {
    console.log(m, ' yra ne daugiau uz ', k); 
}

if (k<m) {
    const kmDaugiau = `${k} yra daugiau ${m}`;
    console.log(kmDaugiau);
}
else {
    const kmNedaugiau = `${k} yra ne daugiau ${m}`;
    console.log(kmNedaugiau);
}

const q =12;
const z =27;

if (q == z) {
    console.log('Taip');
}
else {
    console.log('Ne');
}

if (q>=z ) {
    console.log('Taip');
}
else {
    console.log('Ne');

}
if (q<=z ) {
    console.log('Taip');
}
else {
    console.log('Ne');
}


console.log('-----------------2');


const salisA = 'Lietuva';
const sukis = 'Valio';
console.log(salisA);
console.log('Ilgis: '+ salisA.length);
console.log(sukis);
console.log('Ilgis: ' + sukis.length);


console.log('------');



const salis2 = 'Lietuva';
const miestas2 = 'Nida';

console.log(`Tekst "Lietuva" length is: ${salis2.length}`);
console.log(`Tekst "Nida length is: ${miestas2.length}`);



console.log('-----------------3');



const salis1 = ['L', 'i', 'e', 't', 'u', 'v', 'a'];
const miestas = ['N', 'i', 'd', 'a'];
console.log('Teksto tipo sarasas nr1: Lietuva');
console.log('Teksto tipo sarasas nr2: Nida');


if('salis1' > 'miestas') {
     console.log('Sarasas "Nr1" yra daugiau uz sarasa "Nr2"');
} else {
    console.log('Sarasas "Nr1" yra ne daugiau uz sarasa "Nr2"');
}


if(salis1 === miestas) {
    console.log('Sarasas "Nr1" yra lygus sarasui "Nr2"');
} else {
   console.log('Sarasas "Nr1" yra nelygus sarasui "Nr2"');
}


if(salis1 >= miestas) {
    console.log('Sarasas "Nr1" yra dydesnis arba lygus sarasui "Nr2"');
} else {
   console.log('Sarasas "Nr1" yra nedydesnis arba lygus sarasui "Nr2"');
}


console.log('----------------4');


console.log('Saraso "Nr1" kintamojo ilgis yra: ' + salis1.length );
console.log('Saraso "Nr2" kintamojo ilgis yra: ' + miestas.length );



console.log('----------------5');



const geles1 = ['rozes', 'tulpes', 'frezijos', 'narcizai'];
const geles2 = ['astros', 'pakalnutes', 'lelijos', 'bijunai', 'jurginai'];

console.log('Sarasas Nmr1: ' + [geles1]);
console.log('Sarasas Nmr2: ' + [geles2]);


if ([geles1.length] > [geles2.length]) {
    console.log('Saraso "geles1" ilgis yra didesnis uz Saraso "geles2" ilgi');
} else {
    console.log('Saraso "geles1" ilgis yra ne didesnis uz Saraso "geles2" ilgi');
}

if ([geles1.length] < [geles2.length]) {
    console.log('Saraso "geles1" ilgis yra ne didesnis uz Saraso "geles2" ilgi');
} else {
    console.log('Saraso "geles1" ilgis yra didesnis uz Saraso "geles2" ilgi.');
}

if ([geles1.length] === [geles2.length]) {
    console.log('Saraso "geles1" ilgis ir saraso "geles2" ilgis yra lygus.');
} else {
    console.log('Saraso "geles1" ilgis ir saraso "geles2" ilgis yra ne lygus.');
}
 
if ([geles1.length] <= [geles2.length]) {
    console.log('Saraso "geles1" ilgis yra ne lygus ir ne didesnis uz Saraso "geles2" ilgi');
} else {
    console.log('Saraso "geles1" ilgis yra lygus ir didesnis uz Saraso "geles2" ilgi.');




    console.log('-----------------5');
}

const incom1day = [12, 15, 11, 17, 12, 7];
const incom2day = [11, 17, 19, 15, 25, 15, 19, 14, 22 ];

console.log('Saraso incom1day ilgis: ' + incom1day.length);
console.log('Saraso incom2day ilgis: ' + incom2day.length);




console.log('----------------------');

console.log('CIKLO for PANAUDOJIMAS');
console.log('----------------------');


console.log('---------1');
console.log('---a');


const nuo6 = 0;
const iki6 = 0;
let sum6 = 0;

for(let i=0; i<=0; i++) {
    sum6+=i;
}
const ats6 =`Intervale nuo ${nuo6} iki ${iki6} suma yra ${sum6}.` ;

console.log( ats6 );


console.log('---b');

const nuo = 0;
const iki = 4;
let sum5 = 0;
 
for (let i=0; i <=4; i++) {
    console.log(i);
}
for (let i=0; i <=4; i++) {
    sum5 += i;
}
const ats = 'Intervale nuo ' + nuo + ' iki ' + iki + ' suma yra ' + sum5  + '.' ;

console.log( ats );


console.log('---c');


const nuo2 = 0;
const iki2 = 100;
let suma = 0;

for (let i=0; i<=100; i++) {
    suma+=i;
}
const ats2 = `Intervale nuo  ${nuo2}  iki   ${iki2}  suma yra  ${suma}.` ;

console.log( ats2 );


console.log('---d');


const nuo3 = 574;
const iki3 = 815;
let sum3 = 0;

for(let i=574; i<=815; i++) {
    sum3+=i;
}
const ats3 = `Intervale nuo ${nuo3} iki ${iki3} suma yra ${sum3}.`;

console.log( ats3 );



console.log('---e');


const nuo5 = -50;
const iki5 = 50;
let sum7 = 0;

for(let i=-50; i<=50; i++) {
    sum7+=i;
}
const ats5 =`Intervale nuo ${nuo5} iki ${iki5} suma yra ${sum7}`;

console.log( ats5 );


console.log('---f');

const nuo4 = -70;
const iki4 = 30;
let sum4 = 0;

for(let i=-70; i<=30; i++) {
    sum4+=i;
}
const ats4 =`Intervale nuo ${nuo4} iki ${iki4} suma yra ${sum4}` ;

console.log( ats4 );


console.log('---------2');

const text = 'abcdef';
let reverse = '';

for (let i = 0; i < text.length;  i++ ) {
    console.log(i, text[i]);
    reverse = text [i] + reverse;
}
//for (let i = text.length; i > 0; i--) {
 //   console.log(i, text[i - 1]);
 //   reverse += text [i - 1];
//}   
console.log(text, '->', reverse);


console.log('----------3');

console.log('---a');

const nuo1 = 0;
const iki1 = 11;
const daliklis1 = 3;
let kiekis1 = 0;

for (let i = nuo1; i <= iki1; i++) {
    if (i % daliklis1 === 0) {
        kiekis1++;
    }
}
const atsak =`Skaiciu intervale tarp ${nuo1} ir ${iki1}, besidalinanciu be liekanos is ${daliklis1} yra ${kiekis1} vienetai.`;
console.log(atsak);


console.log('----');


const nuo04 = 0;
const iki04 = 11;
const daliklis4 = 5;
let kiekis4 = 0;

for (let i = nuo04; i <= iki04; i++) {
    if (i % daliklis4 === 0) {
        kiekis4++;
    }
}
const atsak4 =`Skaiciu intervale tarp ${nuo04} ir ${iki04}, besidalinanciu be liekanos is ${daliklis4} yra ${kiekis4} vienetai.`;
console.log(atsak4);
 

console.log('----');


const nuo05 = 0;
const iki05 = 11;
const daliklis5 = 7;
let kiekis5 = 0;

for (let i = nuo05; i <= iki05; i++) {
    if (i % daliklis5 === 0) {
        kiekis5++;
    }
}
const atsak5 =`Skaiciu intervale tarp ${nuo05} ir ${iki05}, besidalinanciu be liekanos is ${daliklis5} yra ${kiekis5} vienetai.`;
console.log(atsak5);


console.log('---b');

const nuo02 = 8;
const iki02 = 31;
const daliklis2 = 3;
let kiekis2 = 0;

for (let i = nuo02; i <= iki02; i++) {
    if (i % daliklis2 === 0) {
        kiekis2++;
    }
}
const atsak2 =`Skaiciu intervale tarp ${nuo02} ir ${iki02}, besidalinanciu be liekanos is ${daliklis2} yra ${kiekis2} vienetai.`;
console.log(atsak2);


console.log('----');

const nuo06 = 8;
const iki06 = 31;
const daliklis6 = 5;
let kiekis6 = 0;

for (let i = nuo06; i <= iki06; i++) {
    if (i % daliklis6 === 0) {
        kiekis6++;
    }
}
const atsak6 =`Skaiciu intervale tarp ${nuo06} ir ${iki06}, besidalinanciu be liekanos is ${daliklis6} yra ${kiekis6} vienetai.`;
console.log(atsak6);


console.log('----');

const nuo07 = 8;
const iki07 = 31;
const daliklis7 = 7;
let kiekis7 = 0;

for (let i = nuo07; i <= iki07; i++) {
    if (i % daliklis7 === 0) {
        kiekis7++;
    }
}
const atsak7 =`Skaiciu intervale tarp ${nuo07} ir ${iki07}, besidalinanciu be liekanos is ${daliklis7} yra ${kiekis7} vienetai.`;
console.log(atsak7);


console.log('---c');

const nuo08 = -18;
const iki08 = 18;
const daliklis8 = 3;
let kiekis8 = 0;

for (let i = nuo08; i <= iki08; i++) {
    if (i % daliklis8 === 0) {
        kiekis8++;
    }
}
const atsak8 =`Skaiciu intervale tarp ${nuo08} ir ${iki08}, besidalinanciu be liekanos is ${daliklis8} yra ${kiekis8} vienetai.`;
console.log(atsak8);


console.log('----');

const nuo03 = -18;
const iki03 = 18;
const daliklis3 = 5;
let kiekis3 = 0;

for (let i = nuo03; i <= iki03; i++) {
    if (i % daliklis3 === 0) {
        kiekis3++;
    }
}
const atsak3 =`Skaiciu intervale tarp ${nuo03} ir ${iki03}, besidalinanciu be liekanos is ${daliklis3} yra ${kiekis3} vienetai.`;
console.log(atsak3);


console.log('----');

const nuo09 = -18;
const iki09 = 18;
const daliklis9 = 7;
let kiekis9 = 0;

for (let i = nuo09; i <= iki09; i++) {
    if (i % daliklis9 === 0) {
        kiekis9++;
    }
}
const atsak9 =`Skaiciu intervale tarp ${nuo09} ir ${iki09}, besidalinanciu be liekanos is ${daliklis9} yra ${kiekis9} vienetai.`;
console.log(atsak9);