"use strict";

var _require = require("mongoose"),
    set = _require.set; //sync


console.log('I');
console.log("eat");
console.log('Ice cream');
console.log("-------------------"); //async
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

var stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  topping: ["chocolate", "peanuts"]
}; // let order = () =>{};
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

var production = function production() {
  setTimeout(function () {
    console.log("production has started");
    setTimeout(function () {
      console.log("the fruit has been chopped");
      setTimeout(function () {
        console.log("".concat(stocks.liquid[0], " and ").concat(stocks.liquid[1], " Added"));
        setTimeout(function () {
          console.log("start the machine");
          setTimeout(function () {
            console.log("Ice cream palced on ".concat(stocks.holder[1]));
            setTimeout(function () {
              console.log("".concat(stocks.topping[0], " as toppings"));
              setTimeout(function () {
                console.log("serve ice cream");
              }, 2000);
            }, 3000);
          }, 2000);
        });
      });
    });
  });
};