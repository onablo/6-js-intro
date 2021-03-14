/*
IF STATEMENT:

logikos sablonai
if () {}

palyginimo operatoriai: 
- visi:
- naudotini:
- nenaudotini:
*/

const a = 7;
const b = 4;

if (a>b) {
    const ats = `${a} yra daugiau uz ${b}`;
    console.log(ats);
}

console.log('------------');

const c = 7;
const d = 4;

if (c<d) {
    const cdmaziau = `${c} yra maziau uz ${d}`;
    console.log(cdmaziau);    
} else {
    const cdNemaziau = `${c} yra nemaziau uz ${d}`;
    console.log(cdNemaziau);   
}

console.log('------------');

const e =8;
const f = 9;

if (e>f) {
    console.log('TAIP'); 
} else {
    console.log('NE');
}

console.log('------------');

const cookiesAgreed = false;

if (cookiesAgreed === false) {
    console.log('Ismetame cookies sutikimo bloka...1');
}
if (!cookiesAgreed) {
    console.log('Ismetame cookies sutikimo bloka...2');
}

console.log('------------');


const userLoggedIn = false;

if (userLoggedIn) {
    console.log('Log out');
}  else {
    console.log('Log In'); 
}

console.log('------------');

const akys = 'Melynos';

if (akys === 'Melynos') {
    console.log('Oj kokios fainulkos!!!');
} else if (akys === 'Zalios') {
    console.log('Sexy')    
} else if (akys === 'Rudos') {
    console.log('Pikciurna');
} else if (akys === 'Pilkos') {
    console.log('Geruliai');
} else if (akys === 'Raudonos') {
    console.log('Atkaklus');
} else {
    console.log('A tu turi akis?');
}

console.log('------------');

if (akys === 'Melynos') {
    console.log('Oj kokios fainulkos!!!');
} else {
    if (akys === 'Zalios') {
    console.log('Sexy');
    } else {  
    if (akys === 'Rudos') {
        console.log('Pikciurna');
        } else {
            if (akys === 'Pilkos') {
                console.log('Geruliai');
            } else {  
                if (akys === 'Raudonos') {
                    console.log('Atkaklus');
                } else {
                    console.log('A tu turi akis?');
                }
            }
        }
    }
}

console.log('-------');

if (akys === 'Melynos') {
    console.log('Oj kokios fainulkos!!!');
} 

if (akys === 'Zalios') {
    console.log('Sexy');    
}

if (akys === 'Rudos') {
    console.log('Pikciurna');
}

if (akys === 'Pilkos') {
    console.log('Geruliai');
}

if (akys === 'Raudonos') {
    console.log('Atkaklus');
}

if (akys !== 'Melynos' && 
    akys !== 'Zalios' && 
    akys !== 'Rudos' &&  
    akys !== 'Pilkos' && 
    akys === 'Raudonos') {
    console.log('A tu turi akis?');
}

if (akys === 'Melynos' ||
    akys === 'Zalios' || 
    akys === 'Rudos' ||  
    akys === 'Pilkos' || 
    akys === 'Raudonos') {
    console.log('Tu turi vienas is man zinomu akiu spalvu');
}



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

