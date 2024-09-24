// for tradicional
console.log("\nfor tradicional: ");
for (let index = 0; index < 5; index++) {
  console.log(index);
}


// while
console.log("\nwhile: ");
let i = 0;
while (i < 5) {
  console.log(i++);
}

// do while
console.log("\ndo while: ");
let y = 0;
do {
  console.log(y++);
} while (y < 5);


// for of (iterar arrays ou objetos iteráveis);
console.log("\nfor of: ");
const frutas = ["maça", "banana", "pera"]
for (const fruta of frutas) {
  console.log(fruta);
}


// for in (iterar sobre as propriedades enumeráveis de um objeto)
console.log("\nfor in: ");
const pessoa = {
  nome: "Henrique",
  sobrenome: "Melo",
}
for (const key in pessoa) {
  if (Object.hasOwnProperty.call(pessoa, key)) {
    const element = pessoa[key];
    console.log('chave: ', key);
    console.log('valor: ', element);
  }
}