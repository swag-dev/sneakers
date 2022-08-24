// cart adder
let modal = document.querySelector('.cart__modal'),
    cartImg = document.querySelectorAll('.cart__img'),
    container = document.querySelector('.products2 .container'),
    containerChild = document.querySelectorAll('.container .container__child'),
    productsEmpty = document.querySelector('.products'),
    products = document.querySelector('.products2'),
    cart = document.querySelector('.cart'),
    removeOrder = document.querySelectorAll('.remove__order'),
    plus = document.querySelectorAll('.plus')
    minus = document.querySelector('.minus'),
    cartAdder = document.querySelector('.cart__adder'),
    productAmount = document.querySelector('.product__amount'),
    arithOp = document.querySelector('.arith__op'),
    orderSum = document.querySelector('.order__sum'),
    productAmount2 = [0, 0, 0, 0],
    previousOrders = [0, 0, 0, 0],
    previousOrdersSum = 0


    function displayFlex(item){
        item.style.display = "flex"
    }
    function displayNone(item){
        item.style.display = "none"
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
        if(productAmount2[count] > 0){
        if(!container.classList.contains(count + 1)){
            container.classList.add(count + 1)
            container.innerHTML += `
            <div class="container__child">
                    <img class="cart__img" src="img/image-product-${count + 1}.jpg" alt="product image">
                    <div class="container__details">
                        <p>Fall Limited Edition Sneakers</p>
                        <span class="arith__op">$125.00 x 0</span>
                        <span class="order__sum">$0.00</span>
                    </div>
                    <img class="remove__order" src="/img/bin.svg" alt="remove order">
                </div>
            `
            modal.classList.remove('hidden')
            displayFlex(products)
            displayNone(productsEmpty)
            arithOp[count].innerHTML = `$125.00 x ${(previousOrders[count] + productAmount2[count])}`
            orderSum[count].innerHTML = `$${125 * (previousOrders[count] + productAmount2[count])}.00`
            previousOrders[count] += productAmount2[count]
            productAmount.textContent = 0
            productAmount2[count] = 0
            console.log(productAmount2)
            console.log(arithOp)
            }
            modal.classList.remove('hidden')
            displayFlex(products)
            displayNone(productsEmpty)
            arithOp[count].innerHTML = `$125.00 x ${(previousOrders[count] + productAmount2[count])}`
            orderSum[count].innerHTML = `$${125 * (previousOrders[count] + productAmount2[count])}.00`
            previousOrders[count] += productAmount2[count]
            productAmount.textContent = 0
            productAmount2[count] = 0
            console.log(productAmount2)
            console.log(arithOp)
        }
    })


    for(let i = 0; i < previousOrders.length; i++){
            previousOrdersSum += previousOrders[i]
    }

    cart.addEventListener('click', () => {
        modal.classList.toggle('hidden')
        if(container.children.length > 0){
            displayFlex(products)
            displayNone(productsEmpty)
        }else{
            displayFlex(productsEmpty)
            displayNone(products)
        }
    })


removeOrder.forEach((item) => {
    item.addEventListener('click', () => {
        if(container.children.length != 1){
            containerChild[count].innerHTML = ``
            containerChild[count].style = ``
        }

        container.innerHTML = ``
        productAmount2[count] = 0
        productAmount.textContent = 0
        previousOrders[count] = 0
        displayFlex(productsEmpty)
        displayNone(products)
})
})
