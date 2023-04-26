const PizzaShop = require('./pizza-shop')
const DrinkMachine = require('./drink-machine')

const pizzaShop = new PizzaShop()
const drinkMachine = new DrinkMachine()

pizzaShop.on("order", (size, topping) => {
    console.log(`Order recieved! Baking ${size} pizza ${topping}`)
    drinkMachine.serveDrink(size)
})

pizzaShop.order("large", "mushrooms")
pizzaShop.displayOrderNumber()


/* ========================================================================== */

// const EventEmitter = require("node:events")

// const emitter = new EventEmitter()

// emitter.on('order-pizza', (size, topping) => {
//     console.log(`Order recieved! Baking ${size} pizza ${topping}`)
// })

// emitter.on('order-pizza', (size) => {
//     if(size == "large"){
//         console.log('serving complimentary drink')
//     }
// })

// console.log("Do somthing before event occurs in the system")

// emitter.emit('order-pizza', "large", "paneer")