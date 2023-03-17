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
<<<<<<< HEAD
})
=======
}) 
>>>>>>> 6cf1c7277996f525977d14f62e8bf1348fc55018
