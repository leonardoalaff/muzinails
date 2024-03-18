const iconeMenu = document.querySelector('#icone-menu')
const listraMenu = document.querySelector('#listra-menu')
const menu = document.querySelector('#menu')

iconeMenu.addEventListener('click', () => {
    listraMenu.classList.toggle('active')
    menu.classList.toggle('active')
})