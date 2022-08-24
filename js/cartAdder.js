// cart adder
let modal = document.querySelector('.cart__modal'),
    cartImg = document.querySelectorAll('.cart__img'),
    container = document.querySelector('.products2 .container'),
    containerChild = document.querySelectorAll('.container__child'),
    productsEmpty = document.querySelector('.products'),
    products = document.querySelector('.products2'),
    cart = document.querySelector('.cart'),
    removeOrder = document.querySelectorAll('.remove__order'),
    plus = document.querySelectorAll('.plus')
    minus = document.querySelector('.minus'),
    cartAdder = document.querySelector('.cart__adder'),
    productAmount = document.querySelector('.product__amount'),
    arithOp = document.querySelectorAll('.arith__op'),
    orderSum = document.querySelectorAll('.order__sum'),
    productAmount2 = [0, 0, 0, 0],
    prevOrders = [0, 0, 0, 0],
    prevOrdersSum = 0

    function displayFlex(element){
        element.style.display = `flex`
    }
    function displayNone(element){
        element.style.display = `none`
    }
    plus[0].addEventListener('click', () => {
        productAmount2[count] += 1
        productAmount.textContent = productAmount2[count]
    })
    plus[1].addEventListener('click', () => {
        productAmount2[count] += 1
        productAmount.textContent = productAmount2[count]
    })
    minus.addEventListener('click', () => {
        if(productAmount.textContent == 0){
            productAmount.textContent = 0
        }
        else{
            productAmount2[count] -= 1
            productAmount.textContent = productAmount2[count]
        }
    })


    cartAdder.addEventListener('click', () => {
            displayFlex(modal)
            displayFlex(products)
            displayNone(productsEmpty)
            arithOp[count].innerHTML = `$125.00 x ${(prevOrders[count] + productAmount2[count])}`
            orderSum[count].innerHTML = `$${125 * (prevOrders[count] + productAmount2[count])}.00`
            prevOrders[count] += productAmount2[count]
            productAmount.textContent = 0
            productAmount2[count] = 0
            prevOrdersSum = 0
            for(let i = 0; i < prevOrders.length; i++){
                prevOrdersSum += prevOrders[i]
            }
            console.log(prevOrders)
            console.log(prevOrdersSum)
    })

    cart.addEventListener('click', () => {
        modal.classList.toggle('hidden')
        if(prevOrdersSum > 0){
            displayFlex(products)
            displayNone(productsEmpty)
        }else{
            displayFlex(productsEmpty)
            displayNone(products)
        }
    })
