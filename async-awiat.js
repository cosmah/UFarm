const { set } = require("mongoose");

//sync
console.log('I');
console.log("eat");
console.log('Ice cream');

console.log("-------------------");

//async
// console.log("I");
// //This will be shown fter 2 seconds
// setTimeout(()=>{
//     console.log("eat");
// },2000)

// console.log("Ice cream");

// //callback
// function One(){
//     //do something
// }

// function Two(call_one){
//     //code
// }
// //function One() is a callback function
// Two(one)

//steps

//1 place order
//2 cut fruit
//3 Add water
//4 Start machine
//5 Select container
//6 select toppings
//7 serve ice cream

let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone","cup","stick"],
    topping : ["chocolate","peanuts"]
};

// let order = () =>{};

// let production = () => {
//     console.log("Production has started");
// };

// let order = (call_production) => {
//     console.log("Order placed. Please call production");

//     call_production();
// };

// order(production) 
// let order = (fruit_name, call_production) =>{
//     setTimeout(function(){
//         console.log(`${stocks.Fruits[fruit_name]} was selected`)

//         //order placed. call production to start
//         call_production();
//     },2000)
// };

// //2nd Function
// let production = () =>{
//     //blank for now
// };

// //Trigger 
// order(0, production);


let production = () =>{
    
    setTimeout(()=>{
        console.log("production has started")
        setTimeout(()=>{
            console.log("the fruit has been chopped")
            setTimeout(()=>{
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`)
                setTimeout(()=>{
                    console.log("start the machine")
                    setTimeout(()=>{
                        console.log(`Ice cream palced on ${stocks.holder[1]}`)
                        setTimeout(()=>{
                            console.log(`${stocks.topping[0]} as toppings`)
                            setTimeout(()=>{
                                console.log("serve ice cream")
                            },2000)
                        },3000)
                    },2000)
                },1000)
            },1000)
        },2000)
    },0000)
};


production()
console.log("======================");
//pending
//resolved
//rejected

let is_shop_open = true;
//let order = (time, work) =>{}


let order = (time,work) => {
    return new Promise((resolve, reject)=>{
        if(is_shop_open){
            resolve()
        }
        else{
            reject(console.log("our shop is closed"))
        }
    })
}

//step 1
order(2000,()=>console.log(`${stocks.Fruits[0]} was selected`))

//step 2
.then(()=>{
    return order(0000,()=>console.log('production has started'))
})

//step 3
.then(()=>{
    return order(2000, ()=>console.log("Fruit has been chopped"))
})

//step 4
.then(()=>{
    return order(1000, ()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]}`))
})

//step 5
.then(()=>{
    return order(1000, ()=>console.log("start machine"))
})

//step 6
.then(()=>{
    return order(2000, ()=>console.log(`${stocks.toppings[0]} as toppings`))
})

// step 7
.then(()=>{
    return order(3000, ()=>console.log(`${stocks.topping[0]} as toppings`))
})

//step 8
.then(()=>{
    return order(2000, ()=>console.log("serve ice cream"))
})