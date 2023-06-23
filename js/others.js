let hamburger = document.querySelector('.hamburger'),
    navLinks = document.querySelector('.nav__links'),
    closeNav = document.querySelector('.close__nav')

    function styleLeft(value){
        navLinks.style.left = value
    }
    function changeOpacity(value){
        navLinks.style.opacity = value
    }
hamburger.addEventListener('click', () => {
    styleLeft(`0`)
    changeOpacity(`1`)
})

closeNav.addEventListener('click', () => {
    styleLeft(`-250px`)
    changeOpacity(`0`)
})
window.addEventListener('scroll', () => {
    styleLeft(`-250px`)
    changeOpacity(`0`)
})
