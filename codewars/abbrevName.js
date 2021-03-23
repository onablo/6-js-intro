
function abbrevName(name) {

    const zodziai = name.split('')
    
    const abbr = zodziai[0][0] + '.' + zodziai[1][0];

    return abbr.toUpperCase();
}
console.log(abbrevName('Sam Harris'))
console.log(abbrevName('Patric Feenan'))
console.log(abbrevName('Evan Cole'))
console.log(abbrevName('P Favuzzi'))
console.log(abbrevName('David Mendiet'))


/*
Kitas variantas
function abbrevName(name) {
return name.split('').map(x=>x.substr(0, 1).toUpperCase()).join('.');
}


Kitas variantas
function abbrevName(name) {
return name[0]toUpperCase() + "." + name[name.indexOF("")+1]. toUpperCase();
}


Kitas variantas
function abbrevName(name) {
name = name.toUpperCase(). split("");
return name [0][0] + "." + name[1][0];
}
*/