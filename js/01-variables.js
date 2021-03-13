console.log(85555);
console.log(3.1234)
console.log(3, 1234)
console.log('Labas');
console.log('rytas');
console.log('Lietuva');
console.log('Mano', 'vardas', 'yra');
console.log('Mano vardas yra');
console.log('Man yra 5 metai');

console.log('------------------');

const vardas = 'Ana';
console.log(vardas);

const pasisveikinimas = 'Labas rytas, Lietuva!';
console.log(pasisveikinimas);

const pirmasSkaicius = 17;
const antrasSkaicius =77;
const suma = pirmasSkaicius + antrasSkaicius;

console.log(pirmasSkaicius);
console.log(antrasSkaicius);
console.log(suma);

console.log(pirmasSkaicius, '+', antrasSkaicius, '=', suma);

const mathText =pirmasSkaicius + '+' + antrasSkaicius + '=' + suma; 

console.log('------------');

const petrasName = 'Petras';
const age = 99; 

// Petras age is 99.
const petrasAge = petrasName + ' age is ' + age +  '.';
console.log(petrasAge);

console.log('------------');

//sarasas (array)
const pazymiai = [5, 7, 8, 3, 10, 7];
console.log(pazymiai);

const abc = ['a', 'b', 'c', 'd', 'f'];
console.log(abc);

const pirmasPazymis = pazymiai[0];
console.log(pirmasPazymis);

const antrasPazymis = pazymiai[1];
console.log(antrasPazymis);

const pazymiuSuma = pazymiai[0] + pazymiai[1] + pazymiai[2] + pazymiai[3] + pazymiai[4] + pazymiai[5];

console.log('Pazymiu suma:', pazymiuSuma);

const pazymiuKiekis = pazymiai.length;

const pazymiuVidurkis = pazymiuSuma / pazymiuKiekis;

console.log('PazymiuSuma:' , pazymiuSuma);
console.log('Pazymiu kiekis:' , pazymiuKiekis);
console.log('Pazymiu vidurkis:' , pazymiuVidurkis);

console.log('------------');

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
