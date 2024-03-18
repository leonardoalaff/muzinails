const iconeMenu = document.querySelector('#icone-menu')
const listraMenu = document.querySelector('#listra-menu')
const menu = document.querySelector('#menu')
const msg = document.querySelector('.msg')
const home = document.querySelector('.home')
const calendario = document.querySelector('.calendario')

msg.addEventListener('click', () => {
    msg.classList.add('active')
    home.classList.remove('active')
    calendario.classList.remove('active')
})

home.addEventListener('click', () => {
    msg.classList.remove('active')
    home.classList.add('active')
    calendario.classList.remove('active')
})

calendario.addEventListener('click', () => {
    calendario.classList.add('active')
    msg.classList.remove('active')
    home.classList.remove('active')
})