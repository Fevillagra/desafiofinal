//Variables

const prods = [
    {
        id: 1,
        name: 'Almods',
        img: '../img/prod_almond.jpg',
        price: 19.99

    },
    {
        id: 2,
        name: 'Cheese',
        img: '../img/prod_cheese.jpg',
        price: 15.99

    },
    {
        id: 3,
        name: 'Chocolate',
        img: '../img/prod_choco.jpg',
        price: 5.99

    },
    {
        id: 4,
        name: 'Churros',
        img: '../img/prod_churros.jpg',
        price: 9.99
    },
    {
        id: 5,
        name: 'Donuts',
        img: '../img/prod_donuts.jpg',
        price: 13.99

    },
    {
        id: 6,
        name: 'Coffe',
        img: '../img/prod_coffe.jpg',
        price: 4.99

    },
    {
        id: 7,
        name: 'Jam',
        img: '../img/prod_jam.jpg',
        price: 9.99

    },
    {
        id: 8,
        name: 'Juice',
        img: '../img/prod_juice.jpg',
        price: 6.99

    },
    {
        id: 9,
        name: 'Shrimps',
        img: '../img/prod_shrimp.jpg',
        price: 14.99

    },
    {
        id: 10,
        name: 'Toasts',
        img: '../img/prod_toast.jpg',
        price: 9.99

    },
    {
        id: 11,
        name: 'Walnuts',
        img: '../img/prod_walnuts.jpg',
        price: 14.99

    },
    {
        id: 12,
        name: 'Yogurt',
        img: '../img/prod_yogurt.jpg',
        price: 9.99

    },
    

]

const cpus = document.querySelector('.container-prods__units')
const cartUs = document.querySelector('.cart-units')
let cartProducts = []
const containerTitleCart = document.querySelector('.container-cart-title')
const buyContainer = document.querySelector('.buy-container')
const btnCancel = document.querySelector('.cancel-btn')
const btnBuy = document.querySelector('.buy-btn')
const bought = []
const kartNumber = document.querySelector('.container-mid__span2')
const kartTotal = document.querySelector('.total')



//Eventos
document.addEventListener('DOMContentLoaded', () => {
    showProds()
})

//Funciones

function showProds() {
    prods.forEach(prod => {
        //Scripting
        const prodBox = document.createElement('div')
        prodBox.classList.add('prod-box')
        
        const imgProd = document.createElement('img')
        imgProd.classList.add('p-img')
        imgProd.src = prod.img
        imgProd.alt = prod.name

        const prodName = document.createElement('h3')
        prodName.textContent = prod.name
        prodName.classList.add('prod-title')

        const prodStock = document.createElement('p')
        prodStock.textContent = 'In stock'
        prodStock.classList.add('prod-stock')

        const priceNum = document.createElement('span')
        priceNum.textContent = prod.price
        priceNum.classList.add('price')

        const pricep = document.createElement('p')
        pricep.textContent = '$'
        pricep.classList.add('prod-price')

        const quantityProd = document.createElement('input')
        quantityProd.type = 'number'
        quantityProd.value = '1' 
        quantityProd.classList.add('prod-quantity')
        
        const btnKart = document.createElement('input')
        btnKart.type = 'button'
        btnKart.value = 'ADD TO CART'
        btnKart.classList.add('prod-addkart')
        btnKart.onclick = () => {
            addCart(quantityProd.value, prod.id)
        }

        pricep.append(priceNum)
        prodBox.appendChild(imgProd)
        prodBox.appendChild(prodName)
        prodBox.appendChild(prodStock)
        prodBox.appendChild(pricep)
        prodBox.appendChild(quantityProd)
        prodBox.appendChild(btnKart)

        cpus.appendChild(prodBox)

    })
}


function addCart(value,id) {
    class prodCartAdd {
        constructor(a) {
            this.id = a.id
            this.name = a.name
            this.img = a.img
            this.price = a.price
            this.quant = a.quant
            this.totalPrice = parseInt(a.quant) * a.price
        }
    }
    const prodSelect = new prodCartAdd(prods.find( prods => prods.id === id))
    let total =  value
    prodSelect.quant = parseInt(total)
    prodSelect.totalPrice = total * prodSelect.price
    cartProducts.push(prodSelect)
    showCartProds(cartProducts)
    
}

function showCartProds(selects) {
    
    cartUs.innerHTML = ''
    selects.forEach(prod => {
        //Scripting
        const prodBox = document.createElement('div')
        prodBox.classList.add('prod-box')
        
        

        const imgProd = document.createElement('img')
        imgProd.classList.add('p-img')
        imgProd.src = prod.img
        imgProd.alt = prod.name

        const prodName = document.createElement('h3')
        prodName.textContent = prod.name
        prodName.classList.add('prod-title')

        const prodStock = document.createElement('p')
        prodStock.textContent = 'In stock'
        prodStock.classList.add('prod-stock')

        const priceNum = document.createElement('span')
        priceNum.textContent = prod.price
        priceNum.classList.add('price')

        const pricep = document.createElement('p')
        pricep.textContent = 'Unit Price: $'
        pricep.classList.add('prod-price')

        const quantityProd = document.createElement('input')
        quantityProd.type = 'number'
        quantityProd.value = '1' 
        quantityProd.classList.add('prod-quantity')
        
        const btnKart = document.createElement('input')
        btnKart.type = 'button'
        btnKart.value = 'ADD TO CART'
        btnKart.classList.add('prod-addkart')
        btnKart.onclick = () => {
            addCart(quantityProd.value, prod.id)
        }

        const quanti = document.createElement('p')
        quanti.classList.add('quanty-text')
        quanti.textContent = `Quantity:  x${prod.quant}`

        const subT = document.createElement('p')
        subT.classList.add('subtotal-style')
        subT.textContent = `SUBTOTAL: $${prod.totalPrice}`

        pricep.append(priceNum)
        prodBox.appendChild(imgProd)
        prodBox.appendChild(prodName)
        prodBox.appendChild(pricep)
        prodBox.appendChild(quanti)
        prodBox.appendChild(subT)

        
        cartUs.appendChild(prodBox)

        containerTitleCart.className = 'container-cart-title2'
        buyContainer.className = 'buy-container2'

        kartTotal.className = 'total2'

        
        btnCancel.onclick = () => {
            selects.splice(0,selects.length + 1)
            cartUs.innerHTML = ''
            buyContainer.className = 'buy-container'
            containerTitleCart.className = 'container-cart-title'
            kartNumber.innerText = '0.00'
            kartTotal.innerText = '0.00'
            kartTotal.className = 'total'
            swal({
                title: "Cart",
                text: "Your purchase was canceled",
                icon: "warning",
                button: "ok",
              });
        }
        btnBuy.onclick = () => {
            for(const element of selects) {
                bought.push(element)
            }
            console.log(bought)
            selects.splice(0,selects.length + 1)
            cartUs.innerHTML = ''
            buyContainer.className = 'buy-container'
            containerTitleCart.className = 'container-cart-title'
            kartNumber.innerText = '0.00'
            kartTotal.innerText = '0.00'
            kartTotal.className = 'total'
            swal({
                title: "Cart",
                text: "Your purchase has been completed successfully",
                icon: "success",
                button: "ok",
              });
        }
        
        kartNumber.innerText = selects.reduce(( acum, el) => acum + el.totalPrice, 0)
        kartTotal.innerText = `TOTAL: $${kartNumber.innerText}`

        
        
    })

    
}





