/*
SWITCH STATEMENT :

switch () { case, break, default }
*/

const animal = 'cow';

switch (animal) {
    case 'dog':
        console.log('Bark bark');
        break;
    case 'cat':
        console.log('Meow meow');
        break;
    default:
        console.log('Uknown animal');
        break;
}

if (animal === 'dog') {
    console.log('Bark bark');    
}
else if (animal === 'cat') {
    console.log('Meow meow');
}
else {
    console.log('Uknown animal');
}

console.log('---------------');



const day =6;

switch (day) {
    case 1:
        console.log('pirm');
        break;
    case 2:
        console.log('antrad');
        break;
    case 3:
        console.log('trec');
        break;
    defoult:
        console.log('tTokia diena savaiteja neegzistuoja');
}

console.log('---------------');


const days = 6;

switch (days) {
    case 1:
        console.log('pirm');
        break;
    case 2:
        console.log('antrad');
        break;
    case 3:
        console.log('trec');
        break;
    case 4:
        console.log('ketv');
            break;
    case 5:
        console.log('penkt');
            break;
    case 6:
        console.log('savaitgalio diena');
        break;
    case 6:
        console.log('savaitgalio diena');
        break;
    defoult:
        console.log('Tokia diena savaiteje neegzistuoja');
}

console.log('---------------');

switch (days) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('darbo diena');
        break;

    default:
        console.log('Tokia diena savaiteje neegzistuoja');            
}

switch (days) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('Darbo diena');
        break;
    case 6:
    case 7:
        console.log('Savaitgalio diena');
        break;
    default:
        console.log('Tokia diena savaiteje neegzistuoja'); 
}

if (day===1 || day===2 || day===3 || day===4 || day===5) {
    console.log('darbo diena');
}
if (day===6 || day===7) {
    console.log('Savaitgalio diena');
}
else {
    console.log('Tokia diena savaiteje neegzistuoja'); 
}



switch (days) {
    case 1:
    case 3:
    case 5:
    case 7:    
        console.log('Nelygine diena');
        break;
    case 2:
    case 4:
    case 6:
        console.log('Lygine diena');
        break;

    default:
        console.log('Tokia diena savaiteje neegzistuoja');            
}

console.log('---------------');


const process = 1;

if (process ===1) {
    console.log('paimti puodeli');
} else if (process ===2) {
    console.log('isideti arbatos');
} else if (process ===3) {
    console.log('isideti cukraus');
} else if (process ===4) {
    console.log('isipilti vandens');
} else if (process ===5) {
    console.log('ismaisyti');
} else if (process ===6) {
    console.log('gerti');
}

console.log('---');

switch (process) {
    case 1:
        console.log('paimti puodeli');
        break;
    case 2:
        console.log('isideti arbatos');
        break;
    case 3:
        console.log('isideti cukraus');
        break;
    case 4:
        console.log('isipilti vandens');
        break;
    case 5:
        console.log('ismaisyti');
        break;
    case 6:
        console.log('gerti');
        break;
    default:
        console.log('Tai jau viska sekmingai atlikai');
}

console.log('---');

switch (process) {
    case 1:
        console.log('paimti puodeli');
    case 2:        
        console.log('isideti arbatos');     
    case 3:
        console.log('isideti cukraus');     
    case 4:
        console.log('isipilti vandens');     
    case 5:
        console.log('ismaisyti');   
    case 6:
        console.log('gerti');
        break;
    default:
        console.log('Tai jau viska sekmingai atlikai');
}


