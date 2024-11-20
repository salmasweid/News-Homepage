const navbar = document.querySelector('nav')
const menuBtn = document.getElementById('menu-btn')
const closeBtn = document.getElementById('close-btn')

menuBtn.addEventListener('click', () => {
    navbar.classList.add('open')
})

closeBtn.addEventListener('click', () => {
    navbar.classList.remove('open')
})