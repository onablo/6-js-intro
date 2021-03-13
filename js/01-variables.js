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

const abcd = ['a', 'b', 'c', 'd', 'f', 'g'];
console.log(abcd);

//Is mums zinomos 6 raidziu abeceles paskutine yra "g".
const abcdilgis = abcd.length;

console.log(abcdilgis);

const PaskutinesRaidesPozicija = abcdilgis -1;
const PaskutineRaide = abcd[PaskutinesRaidesPozicija];
console.log(PaskutineRaide);
const abcdAtsakymas = 'Is mums zinomos ' + abcdilgis + ' raidziu abeceles paskutine yra "' + PaskutineRaide + '".';
console.log(abcdAtsakymas);


