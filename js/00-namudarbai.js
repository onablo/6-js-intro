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

console.log('-----------3');

const svoris = [15, 21, 19, 18, 27]; 
console.log(svoris);

const pirmosvoris = svoris[0];
const antrosvoris = svoris[1];
const treciosvoris = svoris[2];
const ketvirtosvoris = svoris[3];
const penktosvoris = svoris[4];

const svoriuSuma = svoris[0] + svoris[1] + svoris[2] + svoris[3] + svoris[4];
const vaikskaicius = svoris.length; 

console.log('Bendras svoris:', svoriuSuma);
console.log('Vaiku skaicius:', svoris.length);
console.log('Bendras svorio vidurkis:' , svoriuSuma / svoris.length);

console.log('-----------4');

const vardai = ['Vidas', 'Lina', 'Ieva', 'Tomas', 'Roma'];
const vardukiekis = vardai.length;
const vyrvardai = vardai[0];
const vyrvarda = vardai[3];

console.log(vardai);
console.log('Vardu kiekis:' + vardukiekis);
console.log('Vyriski vardai:', vyrvardai + ' ir ' + vyrvarda + '.');

console.log('----------------');

console.log('Veiksmai su kintamaisiais');
console.log('------------1');

const numbers = [25, 95, 79, 46, 17 ];
console.log(numbers);
const firstNumber = numbers[0];
const secondNumber = numbers[1];
const thirdNumber = numbers[2];
const fourthNumber = numbers[3];
const fifthNumber = numbers[4];
const NumbersSum = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4];
const numberKiekis = numbers.length;

console.log('Skaiciu kiekis:' , numberKiekis);
console.log('Skaiciu suma:', NumbersSum);
console.log('Vidurkis:', NumbersSum / numberKiekis);

console.log('-----------1');

const values = [ 245, 306, 501, 234, 655, 149];
const firstValue = values[0];
const secondValue = values[1];
const thirdValue = values[2];
const fourthValue = values[3];
const fifthValue = values[4];
const sixthValue = values[5];
const ValuesSum = values[0] + values[1] + values[2] + values[3] + values[4] + values[5];

console.log(values);
console.log('Suma:', + ValuesSum);

console.log('-----------2');

const vaisiai = ['Apelsinai', 'obuoliai', 'kriauses', 'vynuoges', 'braskes'];

console.log(vaisiai);
console.log('Perkamiausi vaisiai: ' + vaisiai);
console.log('Perkamiausi vaisiai: ' + ' Apelsinai, ' + 'obuoliai, ' + 'kriauses, ' + 'vynuoges, ' + 'braskes.');

console.log('-----------3');

const Number = [ 1, 2, 3, 4, 5];
console.log(Number);

const firstNum = Number[0];
const secondNum = Number[1];
const thirdNum = Number[2];
const fourthNum = Number[3];
const fifthNum = Number[4];
const NumSum = Number[0] - Number[1] + Number[2] - Number[3] + Number[4];

console.log('Rezultatas:', NumSum);

console.log('-----------4');

const vais = ['Apelsinai', 'obuoliai', 'kriauses', 'vynuoges', 'braskes'];

console.log('Vaisiai: ' + 'braskes, ' + 'vynuoges, ' + 'kriauses, ' + 'obuoliai, ' + 'apelsinai.');



console.log('---Kintamuju palyginimas---');
console.log('-----------------1');

const k = 15;
const m = 10;

if (k>m) { 
    console.log(k, ' yra daugiau uz ', m);
}
if (m<k) {
    console.log(m, ' yra maziau uz ', k); 
}

if (k<m) {
    const kmDaugiau = `${k} yra daugiau ${m}`;
    console.log(kmDaugiau);
}
else {
    const kmMaziau = `${k} yra maziau ${m}`;
    console.log(kmMaziau);
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


console.log('-----------------3');

const OroTemperatura =  [6, 12, 2, 5, 9, 11];
const OroMatavimokiekis = OroTemperatura.length;
console.log(OroMatavimokiekis);

const OroTemperatura1 =  [5, 25, 17, 19, 11];
const OroMatavimokiekis1 = OroTemperatura1.length;
console.log(OroMatavimokiekis1); 

console.log('----------------4');

const tekstas1 =  'Saule sviecia';
const tekstas2 =  'Lietus lyja visa diena';
const Tekstas1ilgis = tekstas1.length;
const Tekstas2ilgis = tekstas2.length;
console.log(Tekstas1ilgis);
console.log(Tekstas2ilgis);

if (Tekstas1ilgis>Tekstas2ilgis) {
    console.log('Taip')
}
else {
    console.log('Ne')
}


if (Tekstas1ilgis<Tekstas2ilgis) {
    console.log('Taip')
}
else {
    console.log('Ne')
}


if (Tekstas1ilgis === Tekstas2ilgis) {
    console.log('Taip')
}
else {
    console.log('Ne')
}

if (Tekstas1ilgis !== Tekstas2ilgis) {
    console.log('Taip')
}
else {
    console.log('Ne')
}

if (Tekstas1ilgis >= Tekstas2ilgis) {
    const Tekstas1ilgismazly = `${Tekstas1ilgis} yra didesnis arba lygus ${Tekstas2ilgis}`
    console.log(Tekstas1ilgismazly);
} else {
    const Tekstas2ilgisdydly = `${Tekstas1ilgis} yra mazesnis arba lygus ${Tekstas2ilgis}`
    console.log(Tekstas2ilgisdydly);

    console.log('-----------------5');
}

const incom1day = [12, 15, 11, 17, 12, 7];
const incom1daysum = incom1day.length;
console.log(incom1daysum);

const incom2day = [11, 17, 19, 15, 25, 15, 19, 14, 22 ];
const incom2daysum = incom2day.length;
console.log(incom2daysum);

if (incom1daysum > incom2daysum) {
    const incom1daysumdaugiau = `${incom1daysum} yra daugiau uz ${incom2daysum} `
    console.log(incom1daysumdaugiau);
} else {
    const incom2daysummaziau = `${incom1daysum} yra maziau uz ${incom2daysum} `
    console.log(incom2daysummaziau);
}


if (incom1daysum === incom2daysum) {
    const incom1daysumlygu = `${incom1daysum} yra lygu ${incom2daysum} `
    console.log(incom1daysumlygu);
} else {
    const incom2daysumnelygu = `${incom1daysum} yra nelygu ${incom2daysum} `
    console.log(incom2daysumnelygu);
}


if (incom1daysum >= incom2daysum) {
    const incom1daysumdaugly = `${incom1daysum} yra daugiau arba lygu ${incom2daysum} `
    console.log(incom1daysumdaugly);
} else {
    const incom2daysummazly = `${incom1daysum} yra maziau arba lygu ${incom2daysum} `
    console.log(incom2daysummazly);
}


console.log('------------------');

console.log('CIKLO for PANAUDOJIMAS');
console.log('----------------------');



console.log('---b');


const numb = [0, 1, 2, 3, 4];
let sums = 0;

for (let i = 0; i < numb.length; i++) {
    const numbers = numb[i];
    sums += numbers;
    console.log(sums);
}

console.log('---c');


const title = 'Best friend';

for (let i = 0; i < title.length; ++i) {
    const letter = title[i];
    console.log(letter);
}
