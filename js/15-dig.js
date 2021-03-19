function digits(skaicius) {
    // input validation
    if (typeof skaicius !== 'number') {
        return 'ERROR: turi buti skaiciaus tipas';
    }
    if (!isFinite(skaicius)) {
        return `ERROR: ${skaicius} nera normalus skaicius`;
    }

    // logic
    const tekstinisSkaicius = '' + skaicius;
    let skaitmenuKiekis = tekstinisSkaicius.length;

    // jei skaicius yra neigiamas, tai sumaziname 1 vienetu
    if (skaicius < 0) {
        skaitmenuKiekis--;
    } 

    // return result
    return skaitmenuKiekis;
}

    console.log(digits(true));
    console.log(digits('asc'));
    console.log(digits(NaN));
    console.log(digits(Infinity));
    console.log(digits(-Infinity));
    console.log(digits());
    console.log(digits(undefined));
    console.log(digits(null));
    console.log(digits([]));
    console.log(digits(Infinity));
    console.log(digits(''));
    console.log(digits([5612]));
    console.log(digits(digits));

    console.log(digits(digits));
    console.log(digits(digits));
    console.log(digits(digits));
    console.log(digits(digits));