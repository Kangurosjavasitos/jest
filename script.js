function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error('No se puede dividir entre 0');
    }
    return a / b;
}

module.exports = {
    sum,
    subtract,
    multiply,
    divide
};