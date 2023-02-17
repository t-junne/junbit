export const makeInterval = (callback: Function) => {
  const date = new Date()
  const hour = 60 * 60 * 1000
  const min = date.getMinutes()
  const sec = date.getSeconds()

  setTimeout(() => {
    console.log('Executing...')
    callback()
    setInterval(() => {
      callback()
    }, hour)
  }, (60 * (60 - min) + (61 - sec)) * 1000)
}
