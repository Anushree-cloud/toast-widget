const buttonHi = document.getElementById('btn1')
const buttonHello = document.getElementById('btn2')
const buttonHelloError = document.getElementById('btn3')

buttonHi.addEventListener('click', ()=>{ toast('Hi') })
buttonHello.addEventListener('click', ()=>{ toast({ message: 'hello', delay: 5000, type: 'success' }) })
buttonHelloError.addEventListener('click', ()=>{ toast({ message: 'hello', delay: 5000, type: 'error' }) })

