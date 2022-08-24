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
    orders = document.querySelector('.orders'),
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
        if(productAmount.textContent != 0){
            modal.classList.remove('hidden')
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
            containerChild.forEach((item, index, array) => {
                if(prevOrders[index] === 0){
                    displayNone(array[index])
                }else if(prevOrders[index] > 0){
                    displayFlex(array[index])
                }
            })
            changeOrders()
        }
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
    removeOrder.forEach((item, index, array) => {
        item.addEventListener('click', () => {
            productAmount2[index] = 0
            prevOrdersSum = prevOrdersSum - prevOrders[index]
            prevOrders[index] = 0
            if(prevOrdersSum > 0){
            displayNone(containerChild[index])
            }
            else{
                displayFlex(productsEmpty)
                displayNone(products)
            }
            changeOrders()
        })
    })

    function changeOrders(){
        displayFlex(orders)
        orders.innerText = prevOrdersSum
        if(orders.innerText == '0'){
            displayNone(orders)
        }
    }
    orders.textContent = prevOrdersSum
    console.log(orders.innerText)