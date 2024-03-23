// Try catch
function trycatch(condition) {
  try {
    if (condition) {
      console.log('Deu certo!')
    } else {
      throw new Error('mensagem de erro!')
    }
  } catch (error) {
    console.log('Deu erro!', error)
  } finally {
    console.log('finalmente!')
  }
}

trycatch(false)


// Promises
function promiseSimples() {
  console.log("\n\nPromise simples: ")
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(true), 1000)
  })

  const success = (res) => console.log("Deu certo!", res)
  const error = (err) => console.log("Deu errado!", err)
  const finalmente = () => console.log("Finalmente!")

  promise.then(success).catch(error).finally(finalmente)
  console.log('Console normal')
}
promiseSimples()

function callbackHell() {
  console.log("\n\nCallback hell: ")
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(true), 1000)
  })

  promise.then(() => {
    const promise2 = new Promise((resolve, reject) => {
      setTimeout(() => resolve(true), 1000)
    })

    promise2.then(() => {
      const promise3 = new Promise((resolve, reject) => {
        setTimeout(() => resolve(true), 1000)
      })

      promise3.then(() => {
        console.log('terminei')
      }).catch((err) => console.log(err))
    }).catch((err) => console.log(err))
  }).catch((err) => console.log(err))
}
callbackHell()

async function asyncAwait() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("resolve!")
      resolve(true)
    }, 1000)
  })

  const result = await promise
  console.log("result", result)
}

async function teste() {
  await asyncAwait()
  console.log('aqui')
}
teste()
console.log('aqui 2')

