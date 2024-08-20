//28. implement clearAllTimeout()

const originalSetTimeout = window.setTimeout ;
const timerIds = []


window.setTimeout = (callback,delay) => {

  const timerId = originalSetTimeout.call(this,callback,delay)
  timerIds.push(timerId)

  return timerId
}

function clearAllTimeout() {
  for(let i=0;i< timerIds.length;i++){
    clearTimeout(timerIds[i])
  }
}