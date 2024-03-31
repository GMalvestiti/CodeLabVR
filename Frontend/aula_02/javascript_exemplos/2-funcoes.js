// Function declarations
// forma mais simples e tradicional de declarar funções
function soma(a, b) {
  return a + b;
}
console.log('\nSoma: ');
console.log(soma(2, 3));

// Function expressions
// Atribuem uma função (anônima ou não) a uma variável
// Úteis para serem usadas como callbacks e métodos de objetos
const subtrair = function subtracao(a, b) {
  return a - b;
}

const subtrairAnonima = function (a, b) {
  return a - b;
}

console.log('\nSubtrair: ');
console.log(subtrair);
console.log(subtrair(5, 3));
console.log('\n Subtrair Anonima: ');
console.log(subtrairAnonima);
console.log(subtrairAnonima(5, 3));

// Arrow functions
// São functions expressions anônimas com uma sintaxe diferente (troca a palavra function por =>)
const multiplicar = (a, b) => {
  return a * b;
}

console.log('\nMultiplicar: ');
console.log(multiplicar);
console.log(multiplicar(2, 3));

// Normalmente são usadas como callback de outras funções
// se atentar para não chamar a função, mas sim passa-la como referência
const printar = () => console.log('Olá');
const interval = setInterval(printar, 1000);
// setInterval(printar(), 100);

// Usada direto como callback
setTimeout(() => {
  console.log('limpando intervalo...');
  clearInterval(interval);
}, 5500);


// Closure
// A função filho possui uma referência ao escopo da função pai, e a essa referência nós damos o nome de closure.
function pai() {
  let x = 1;

  function filho() {
    console.log('x:', x);
    x++;
  }

  return filho;
}

const closure = pai();
console.log('\nClosure: ');
closure();
closure();
closure();
