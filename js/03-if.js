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




