// started operating system process
console.log('first')
setTimeout(() => {
  console.log('second')
}, 0) //Despite that time is set to 0, anyway setTimeout is an Asynchronous process who executes later
console.log('third')
// completed and exited operating system process