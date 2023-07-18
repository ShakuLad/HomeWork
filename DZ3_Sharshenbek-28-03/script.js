function dataType(variable) {
    var examination = typeof(variable);
    return console.log(examination);
}
dataType('ok');

function reverseStr(str) {
    return str.split('').reverse().join('');
}
console.log(reverseStr('genaaaaa'));