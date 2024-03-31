// condicionais if else
const condicionais = (numero) => {
  if (numero > 10) {
    console.log('condição 1');
  } else if (numero < 0) {
    console.log('condição 2');
  } else {
    console.log('condição restante');
  }
}

console.log('\nCondicionais: ');
condicionais(100);
condicionais(1);
condicionais(5);

// condicionais switch case
const condicionaisSwitch = (numero) => {
  switch (numero) {
    case 10:
      console.log('é 10');
      break;
    case 100:
      console.log('é 100');
      break;
    default:
      console.log('nenhuma das alternativas');
      break;
  }
}

console.log('\nCondicionais Switch case: ');
condicionaisSwitch(10);
condicionaisSwitch(100);
condicionaisSwitch(23);

// Ternários
console.log('\nCondicional ternario: ');
console.log(10 > 5 ? 'verdadeiro' : 'falso');

// Operadores lógicos
console.log('\nOperadores');
console.log(true && false);
console.log(true || false);
console.log(1 === 1);
console.log(1 === '1');
console.log(1 == '1');
console.log(2 !== 2);
console.log(2 != '2');
console.log(2 !== '2');
console.log(1 > 2);
console.log(1 >= 2);
console.log(1 < 2);
console.log(1 <= 3);

// Operadores aritiméticos
console.log(10 + 10 * 10 / 20 % 2 ** 2)


