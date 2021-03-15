const pazymiai = [7, 10, 7];

const suma = pazymiai[0] + pazymiai[1] + pazymiai[2];

const vidurkis = suma / pazymiai.length;
console.log(vidurkis);


console.log('---------------');  

const marks = [10, 8, 6, 4];

const count = marks.length;
let sum = 0;
console.log('sum:', sum);

sum = sum + marks[0];        // 0+10
console.log('sum:', sum);

sum = sum + marks[1];       // 10+8
console.log('sum:', sum);

sum = sum + marks[2];       // 18+6
console.log('sum:', sum);

sum = sum + marks[3];       // 24+4
console.log('sum:', sum);

const average = sum / count;
console.log(average);


console.log('---------------');


const marks2 = [2, 4, 6, 8];

let sum2 =0;
console.log(sum2);

sum2 = sum2 + marks2[0];
console.log(sum2);

sum2 = sum2 + marks2[1];
console.log(sum2);

sum2 = sum2 + marks2[2];
console.log(sum2);

sum2 = sum2 + marks2[3];
console.log(sum2);


console.log('----');  


const marks3 = [2, 4, 6, 8];

let sum3 = 0;
console.log(sum3);      // sutrumpinta versija ankstesnio varianto

sum3 += marks3[0];
console.log(sum3);

sum3 += marks3[1];
console.log(sum3);

sum3 += marks3[2];
console.log(sum3);

sum3 += marks3[3];
console.log(sum3);

console.log('-------');


const marks4 = [2, 4, 6, 8];
                    
let sum4 = 0;           // kitas variantas
let markIndex4=0
console.log(sum4);   
                          
sum4 += marks4[markIndex4];
console.log(sum4);

// markIndex4 += 1;
sum4+=marks4[markIndex4];
console.log(sum4);

markIndex4 += 1;
sum4+=marks4[markIndex4];
console.log(sum4);

markIndex4 += 1;
sum4+=marks4[markIndex4];
console.log(sum4);


console.log('-------');
  

const abc = ['r', 'y', 't', 'a', 's'];

let zodis = '';
let abcIndex =0;

zodis += abc[abcIndex];
console.log(zodis);

abcIndex += 1;
zodis += abc[abcIndex];
console.log(zodis);

abcIndex += 1;
zodis += abc[abcIndex];
console.log(zodis);

abcIndex += 1;
zodis += abc[abcIndex];
console.log(zodis);

abcIndex += 1;
zodis += abc[abcIndex];
console.log(zodis);


console.log('-------');


const abd = ['r', 'y', 't', 'a', 's'];

let zodis2 = '';
let abdIndex =0;

zodis2 += abd[abdIndex++];
console.log(zodis);

zodis2 += abd[abdIndex++];
console.log(zodis);

zodis2 += abd[abdIndex++];
console.log(zodis);

zodis2 += abd[abdIndex++];
console.log(zodis);

zodis2 += abc[abdIndex++];
console.log(zodis);


console.log('-------');


const abe = ['r', 'y', 't', 'a', 's'];

let zodis3 = '';
let abeIndex =0;

zodis3 += abe[abeIndex++];
zodis3 += abe[abeIndex++];
zodis3 += abe[abeIndex++];
zodis3 += abe[abeIndex++];
zodis3 += abe[abeIndex++];

console.log(zodis3);


console.log('-------');


let a = 5;

console.log(++a);
console.log(++a);
console.log(++a);
console.log(++a);
console.log(++a);
console.log(++a);
console.log(++a);