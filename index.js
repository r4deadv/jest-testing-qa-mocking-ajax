function giveMePromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("I am done"), 200)
  })
}

module.exports = giveMePromise