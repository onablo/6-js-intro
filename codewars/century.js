function century(year) {

      return Math.ceil(year/100);
}

console.log(century(1705), '->', 18);
console.log(century(1900), '->', 19);
console.log(century(1601), '->', 17);
console.log(century(2000), '->', 20);
console.log(century(89), '->', 1);

/*   
function century(year) {

    let amzius = year / 100;
   
    amzius = Math.floor(amzius);

    if (year % 100 > 0) {
        amzius++;
    }
     return amzius; */