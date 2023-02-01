// список товаров

const goods = [
    {id: 1,
        name: 'Ботинки',
        description: 'ботинки осенние',
        sizes: [41, 42, 43, 44, 45],
        price: 3500,
        available: 1,
    },

    {id: 2,
        name: 'Кроссовки',
        description: 'кроссовки для бега',
        sizes: [41, 42, 43, 44, 45],
        price: 5500,
        available: 1,
    },

    {id: 3,
        name: 'Сапоги',
        description: 'Сапоги зимние',
        sizes: [41, 42, 43, 44, 45],
        price: 7500,
        available: 1,
    },

    {id: 4,
        name: 'Тапочки',
        description: 'Тапочки для ванной',
        sizes: [41, 42, 43, 44, 45],
        price: 500,
        available: 1,
    },

    {id: 5,
        name: 'Детские ботинки',
        description: 'Весенние ботинки для детей',
        sizes: [21, 22, 23, 24, 25],
        price: 4500,
        available: 1,
    }
]

let basket = [] // корзина изначально пустая

// добавление товара в корзину
function addToBasket(goods, amount, size) {
    /* создаем карточку товара, которая будет отображаться в корзине.
     ссылка на товар не подойдёт, т.к. по ссылке в goods мы видим массив размеров size, в корзине не должен быть массив.*/
    let purchase = {}      
    purchase.name = goods.name
    purchase.amount = Number(amount)
    purchase.size = Number(size)
    purchase.price = goods.price

    return basket.push(purchase)

    // попытка увеличения кол-ва товаров, если данный товар уже существует в корзине
   /* for (let i = 0; i < basket.length; i++) {
        if (purchase.name === basket[i].name && purchase.size === basket[i].size) {
            basket[i].amount++;            
            }
    } */    
}

addToBasket(goods[1], 1, 41)
addToBasket(goods[0], 1, 43)
addToBasket(goods[2], 1, 43)

console.log(basket)

//общая сумма покупок
function total() {
    let totalAmount = 0
    let totalSum = 0    
    for(let i=0; i<basket.length; i++) {
        totalAmount += basket[i].amount   
        totalSum += basket[i].price * basket[i].amount        
    }
    return {totalAmount:  totalAmount,
            totalSum: totalSum}
    

}

let amount = total()

console.log(`total Amount: ${amount.totalAmount}`)
console.log(`total Sum: ${amount.totalSum}`)

//удаление из корзины одного из товаров
function removeFromBasket(good) {    
    for(let i=0; i< basket.length; i++) {
        if (basket[i].name === good) {
            basket.splice(i, 1);
        }
    }
    return basket
}

removeFromBasket('Ботинки')
console.log(basket)
console.log(basket.length)

//очистка корзины
function cleanBasket() {
    return basket.splice(0, basket.length)
}

cleanBasket()
console.log(`Количество элементов в корзине после её очистки: ${basket.length}`)
