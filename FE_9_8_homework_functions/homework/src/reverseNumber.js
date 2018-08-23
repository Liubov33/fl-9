function reverseNumber(value) {
    value += '';
    return parseInt(value.split('').reverse().join('')) * Math.sign(value);
}