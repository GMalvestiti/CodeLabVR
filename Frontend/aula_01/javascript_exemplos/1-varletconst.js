// var, let e const

// var fica definida e acessível por todo o contexto/escopo que ela está inserida
function loopComVar() {
  console.log('\nLoop com var:')
  for (var i = 0; i < 5; i++) {
    console.log('dentro do loop:', i)
  }

  console.log('depois do loop:', i)
}
loopComVar()


// let fica definida e acessível apenas no bloco que ela foi inicializada
function ifComVarOuLet() {
  console.log('\nif com var ou let:')
  if (true) {
    var teste = 'teste'
    let teste2 = 'teste2'
  }

  console.log('teste depois do if: ', teste)
  console.log('teste2 depois do if:', teste2)
}
ifComVarOuLet()

function loopComLet() {
  console.log('\nloop com let:')
  for (let i = 0; i < 5; i++) {
    console.log(i)
  }

  console.log('depois do loop', i)
}
loopComLet()


// const tem o valor definido na declaração, não pode ser alterado e fica definida e acessível apenas no bloco que ela foi inicializada
function testeConst() {
  console.log('\nteste constante:')
  const naoMuda = 'eu não mudo'
  naoMuda = 'mudei'

  console.log('valor constante: ', naoMuda)
}
testeConst()