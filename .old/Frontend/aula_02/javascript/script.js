function pai() {

  function filho() {
    let x = 1;
    x++;
    console.log('x:', x);
  }

  return filho;
}

const closure = pai();
console.log('\nClosure: ');
closure();
closure();
closure();