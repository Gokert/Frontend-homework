const romanToNumber = (romanNumeral) => {
    const romanValues = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let result = 0;
    let prevValue = 0;

    [...romanNumeral].reverse().forEach(currentChar => {
        const currentValue = romanValues[currentChar];
        result += (currentValue >= prevValue) ? currentValue : -currentValue;
        prevValue = currentValue;
    });

    return result;
}

const numberToRoman = (number) => {
    const romanValues = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    let result = '';

    Object.keys(romanValues).forEach(key => {
        while (number >= romanValues[key]) {
            result += key;
            number -= romanValues[key];
        }
    })

    return result;
}

Object.setPrototypeOf(Number.prototype, new Proxy({}, {
    get(target, prop, receiver) {
        const roman = romanToNumber(`${prop.toString()}`);
        let array = []

        let i = receiver;
        while (i < roman) {
            array.push(i);
            i++;
        }

        return array
    }
}));


console.log(0..V);
console.log(0..IV);
console.log(0..XI);

