// tabs & modal
let productImages = document.querySelectorAll('.product__image'),
productImages2 = document.querySelectorAll('.product__image2'),
    mainImage = document.querySelector('.main__image'),
    mainImage2 = document.querySelector('.main__image2'),
    modalMainImage = document.querySelector('.image__modal'),
    closeModal = document.querySelector('.close__modal')

function removeActive(product){
    product.forEach(item => {
        item.classList.remove('active')
    })
}
function addActive(item){
    item.classList.add('active')
}
    function setImage(element, element2){
        element.forEach((item, index) => {
            item.addEventListener('click', () => {
                removeActive(element)
                removeActive(element2)
                addActive(item)
                count = index
                mainImage.src = `img/image-product-${index + 1}.jpg`
                mainImage2.src = `img/image-product-${index + 1}.jpg`
                addActive(productImages[count])
                addActive(productImages2[count])
            })
        })
        element2.forEach((item, index) => {
            item.addEventListener('click', () => {
                removeActive(element)
                removeActive(element2)
                addActive(item)
                count = index
                mainImage.src = `img/image-product-${index + 1}.jpg`
                mainImage2.src = `img/image-product-${index + 1}.jpg`
                addActive(productImages[count])
                addActive(productImages2[count])
            })
        })
    }
    setImage(productImages, productImages2)

mainImage.addEventListener('click', () => {
    if(window.innerWidth > 600){
    addActive(modalMainImage)
    }
})
closeModal.addEventListener('click', () => {
    modalMainImage.classList.remove('active')
})

// Slider
let slide = document.querySelectorAll('.slider'),
    prev = slide[0],
    next = slide[1],
    slide2 = document.querySelectorAll('.slider2'),
    prev2 = slide2[0],
    next2 = slide2[1]
    count = 0
prev.addEventListener('click', () => {
    count--
    if(count === -1){
        count = 3
        mainImage.src = `img/image-product-${count + 1}.jpg`
        mainImage2.src = `img/image-product-${count + 1}.jpg`
        removeActive(productImages)
        removeActive(productImages2)
        addActive(productImages[count])
        addActive(productImages2[count])
    }
    if(count >= 0){
        mainImage.src = `img/image-product-${count + 1}.jpg`
        mainImage2.src = `img/image-product-${count + 1}.jpg`
        removeActive(productImages)
        removeActive(productImages2)
        addActive(productImages[count])
        addActive(productImages2[count])
    }
})
next.addEventListener('click', () => {
    count++
    if(count <= 3){
    mainImage.src = `img/image-product-${count + 1}.jpg`
    mainImage2.src = `img/image-product-${count + 1}.jpg`
    removeActive(productImages)
    removeActive(productImages2)
    addActive(productImages[count])
    addActive(productImages2[count])
    }
    if(count === 4){
        count = 0
        mainImage.src = `img/image-product-${count + 1}.jpg`
        mainImage2.src = `img/image-product-${count + 1}.jpg`
        removeActive(productImages)
        removeActive(productImages2)
        addActive(productImages[count])
        addActive(productImages2[count])
    }
})
prev2.addEventListener('click', () => {
    count--
    if(count === -1){
        count = 3
        mainImage.src = `img/image-product-${count + 1}.jpg`
        mainImage2.src = `img/image-product-${count + 1}.jpg`
        removeActive(productImages)
        removeActive(productImages2)
        addActive(productImages[count])
        addActive(productImages2[count])
    }
    if(count >= 0){
        mainImage.src = `img/image-product-${count + 1}.jpg`
        mainImage2.src = `img/image-product-${count + 1}.jpg`
        removeActive(productImages)
        removeActive(productImages2)
        addActive(productImages[count])
        addActive(productImages2[count])
    }
})
next2.addEventListener('click', () => {
    count++
    if(count <= 3){
    mainImage.src = `img/image-product-${count + 1}.jpg`
    mainImage2.src = `img/image-product-${count + 1}.jpg`
    removeActive(productImages)
    removeActive(productImages2)
    addActive(productImages[count])
    addActive(productImages2[count])
    }
    if(count === 4){
        count = 0
        mainImage.src = `img/image-product-${count + 1}.jpg`
        mainImage2.src = `img/image-product-${count + 1}.jpg`
        removeActive(productImages)
        removeActive(productImages2)
        addActive(productImages[count])
        addActive(productImages2[count])
    }
})

 