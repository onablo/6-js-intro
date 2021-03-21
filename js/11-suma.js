console.log('------------------------');

const a = 8;
const b = 5;
const c = 99;
const d = 88;
const e = 54155;
const f = 89514;


function desimteriopaSuma(pirmas, antras) {
    const s = (pirmas + antras) * 10;
    console.log(s);
}

desimteriopaSuma(a, b);
console.log('---------');
desimteriopaSuma(e, f);
console.log('---------');
desimteriopaSuma(c, d);

console.log('-------------');

function labas(vardas, amzius, miestas) {
    console.log(`Labas, as esu ${vardas}, man ${amzius} ir as gyvenu ${miestas}.`);     
}

labas('Petras', 88, 'Vilniuje');
labas('Maryte', 66, 'Alytuje');
labas('Vanda', 52, 'Varenoje');

