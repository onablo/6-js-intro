  //const mokinys = [
   //  ['Petras', [10, 2]],
   // ['Maryte', [8, 8]],
   //];
// console.log(vardas);
// console.log(pazymiai);

// [vardas, pazymiai, megstamos raides, kiek dienu gyvena, ar nori i PC, ar siemet maudesi]

const mokinys = ['Petras', [10, 2], 'asf', 5485, true, false];
const vardas = mokinys [0];
const pazymiai = mokinys[1];

const student = {
    vardas: 'Petras',
    pazymiai: [10, 2],
    megstamosRaides: 'asf',
    kiekDienuGyvas: 5485,
    arNoriIPC: true,
    arSiemetMaudesi: false,
    tevai: {
        motina: {
            vardas: 'Laimute',
            telNr: 4255895,
            amzius: 55
        },
        tevas: {
            vardas: 'Tomas',
            telNr: 4165511,
            amzius: 55
        }
    },
    aplankytosVietos: [
        {
            adresas: '',
            pavadinimas: '',
            lankymoData: '',
            suGigu: true
        },
        {
            adresas: '',
            pavadinimas: '',
            lankymoData: '',
            suGigu: false
        },
        {
            adresas: '',
            pavadinimas: '',
            lankymoData: '',
            suGigu: true
        }
    ]

}

console.log(student);

console.log('----------');

// Universalus info istraukimas is objekto
console.log(student['vardas']);
console.log(student['megstamosRaides']);
console.log(student['arNoriIPC']);
console.log(student['arSiemetMaudesi']);
console.log(student['pazymiai']);
console.log(student['pazymiai'][0]);
console.log(student['pazymiai'][1]);
console.log(student['tevai']);
console.log(student['tevai']['motina']);
console.log(student['tevai']['motina']['vardas']);

console.log('----------');

// Supaprastintas info istraukimas is objekto
console.log(student.vardas);
console.log(student.megstamosRaides);
console.log(student.arNoriIPC);
console.log(student.arSiemetMaudesi);
console.log(student.pazymiai);
console.log(student.pazymiai[0]);
console.log(student.pazymiai[1]);
console.log(student.tevai);
console.log(student.tevai.motina);
console.log(student.tevai.motina.vardas);
