// Siandien yra kovo desimta.
const menuo = 'Kovo';
const diena = 'desimta';

const daystring = 'Siandien yra: ' + menuo + ' ' + diena + '.';
console.log(daystring);

//Cia yra dviguba (") kabute.
const dvigubaKabute = 'Cia yra dviguba (") kabute.'
console.log(dvigubaKabute);


//Cia yra vienguba (') kabute.
const viengubaKabute = "Cia yra vienguba (') kabute.";
console.log(viengubaKabute);

//Turiu vienguba (') ir dviguba (") kabutes.
const viengubaDviguba = "Turiu vienguba (') ir dviguba (\") kabutes.";
console.log(viengubaDviguba);

const dvigubaVienguba = 'Turiu vienguba (\') ir dviguba (") kabutes.';
console.log(dvigubaVienguba);

// Max saugumas dviguba (") ir vienguba (') kabutes.
const maxKabutes1 = 'Max saugumas dviguba (\") ir vienguba (\') kabutes.'
console.log(maxKabutes1);
const maxKabutes2 = "Max saugumas dviguba (\") ir vienguba (\') kabutes."
console.log(maxKabutes2);

console.log('-------------');

const navHTML = '<nav>\
                    <a href ="#">Link</a>\
                    <a href ="#">Link</a>\
                    <a href ="#">Link</a>\
                    <a href ="#">Link</a>\
                </nav> ';
console.log(navHTML);

console.log('-------------');

// Mano vardas: Petras.
const vardas = 'Petras';
const petrasIntro = 'Mano vardas: '
+ vardas + '.';
console.log(petrasIntro);

const petrasBacktick = `Mano vardas: ${vardas}.`;
console.log(petrasBacktick);

// Naujausias pazymys: 2.
const marks = [10, 5, 8, 7, 6];
const markSentence = `Naujausias pazymys: ${marks[marks.length -1]}.`;
console.log(markSentence);
const markSentence1 = `Pirmas pazymys: ${marks[0]}.`;
console.log(markSentence1);
const markSentence2 = `Antras pazymys: ${marks[1]}.`;
console.log(markSentence2);

const navHTML2 = `<nav>
                    <a href ="#">Link</a>
                    <a href ="#">Link</a>
                    <a href ="#">Link</a>
                    <a href ="#">Link</a>
                </nav> `;
console.log(navHTML2);

