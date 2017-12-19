let concatParam = (x, y) => `${x} --- ${y}`;
let values = ["Estou", "com", "fome"];

let result = values.reduce((previous, next) => concatParam(previous, next));
console.log(result);