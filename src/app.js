var scanf = require('scanf');

let numbers = [];
console.log('Almacene números. Escriba "cancelar" para detener y mostrar los datos capturados');
let writeNumber;
do {
  console.log('Digite su número: ')
  writeNumber = scanf('%S');
  if (!Number(writeNumber)) {
    console.log('Número inválido');
  } else {
    numbers.push(writeNumber);
    console.clear();
  }
  
} while (writeNumber != 'cancelar');

console.clear();
console.log('Número capturados');
numbers.forEach((number, index) => console.log(`${index + 1}. ${number}`));

console.log(numbers);