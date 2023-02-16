export const makeInterval = (baseMinute: number, callback: Function) => {
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
  }, (baseMinute * (60 - min) + (60 - sec)) * 1000)
}
