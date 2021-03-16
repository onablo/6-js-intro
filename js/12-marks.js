console.log('--------------------------');

function pazymiuVidurkis(vardas, pazymiai) {
    let suma = 0;

    for (let i = 0; i < pazymiai.length; i++) {
        suma += pazymiai[i];
    }
    const average = suma / pazymiai.length;

    console.log(`${vardas}: pazymiu vidurkis yra ${average}.`);
}

pazymiuVidurkis('Petriukas', [10, 4, 6, 7]);
pazymiuVidurkis('Maryte', [10, 8, 6, 9]);
pazymiuVidurkis('Lukas', [8, 6, 9, 7]);


console.log('--------------------------');

const mokykla = [
    ['Petriukas', [10, 4, 6, 7]],
    ['Maryte', [10, 8, 6, 9]],
    ['Lukas', [8, 6, 9, 7]]
];
console.log(mokykla);

for (let i = 0; i < mokykla.length; i++) {
   
    console.log('------------');
    const mokinys = mokykla[i];  // console.log(mokykla[i]);
    const name = mokinys[0];   //console.log(mokykla[i][0]);
    const marks = mokinys[1];  // console.log(mokykla[i][1]); 
    pazymiuVidurkis(name, marks);
}

console.log('--------------------------');