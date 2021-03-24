const spread1 = ([5, 9, 3, -14]);
console.log(spread1);

// const spread2 = [5, 9, 7];
const spread2 = [...spread1, 7, 77, 777];
console.log(spread2);

//  const spread3 = [7, 5, 9];
const spread3 = [7, 77, 777, ...spread1];
console.log(spread3);




console.log('----------------');


const spread4 = ['agd', 'gky', 951, true];
console.log(spread4);

const spread5 = [...spread4, ...spread1];
console.log(spread5);

const spread6 = [...spread1, ...spread4];
console.log(spread6);

console.log('----------------');


// rest operatorius

const average = (...list) => {
    const sum = list.reduce((total, num) => total + num, 0);
    return sum /  list.length;
}

const ave = average(10, 2, 8, 4, 6);
console.log(ave);


const apieMane = (name, age, ...list) => {
    return `Sveiki, as esu ${name}, man yra ${age} metu ir as megstu: ${list.join(', ')}..`;
}

const jonas = apieMane('Jonas', 55, 'pyragus', 'slyvas', 'kola');
console.log(jonas);



console.log('----------------');

// kompleksines reiksmes

const cc = [4, 44];
const dd = [8, 88];

console.log(cc);
console.log(dd);

dd = cc;

console.log(cc);
console.log(dd);

cc[0] = 11111;

console.log(cc);
console.log(dd);

console.log('----------------');
