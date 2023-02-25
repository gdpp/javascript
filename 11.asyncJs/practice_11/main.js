//Syncronous

// console.log(' I ');

// console.log(' eat ');

// console.log(' with a ');

// console.log(' spoon ');

// // Asyncronous

// console.log(' I ');

// console.log(' eat ');

// setTimeout(() => {
//     console.log(' ice cream ');
// }, 4000);

// console.log(' with a ');

// console.log(' spoon ');

// Callbacks
// function one(call_two) {
//     console.log('Step one complete');
//     call_two();
// }

// function two() {
//     console.log('Step two');
// }

// one(two);

//Callbacks

// let stocks = {
//     fruits: ['strawberry', 'grapes', 'bananas', 'apple'],
//     liquid: ['water', 'ice'],
//     holder: ['cone', 'cup', 'stick'],
//     toppings: ['chocolate', 'peanuts'],
// };

// let order = (fruitName, callProduction) => {
//     setTimeout(() => {
//         console.log(`${stocks.fruits[fruitName]} was selected`);
//         callProduction();
//     }, 2000);
// };

// let production = () => {
//     setTimeout(() => {
//         console.log('production has started');
//         setTimeout(() => {
//             console.log('The fruit has been chopped');
//             setTimeout(() => {
//                 console.log(
//                     `${stocks.liquid[0]} and ${stocks.liquid[1]} Added`
//                 );
//                 setTimeout(() => {
//                     console.log('start the machine');
//                     setTimeout(() => {
//                         console.log(`Ice cream placed on ${stocks.holder[1]}`);
//                         setTimeout(() => {
//                             console.log(`${stocks.toppings[0]} as toppings`);
//                             setTimeout(() => {
//                                 console.log('serve Ice cream');
//                             }, 2000);
//                         }, 3000);
//                     }, 2000);
//                 }, 1000);
//             }, 1000);
//         }, 2000);
//     }, 0000);
//     //Callback Hell
// };

// order(0, production);

// Promises

// let stocks = {
//     Fruits: ['strawberry', 'grapes', 'bananas', 'apple'],
//     liquid: ['water', 'ice'],
//     holder: ['cone', 'cup', 'stick'],
//     toppings: ['chocolate', 'peanuts'],
// };

// let isShopOpen = true;

// let order = (time, work) => {
//     return new Promise((resolve, reject) => {
//         if (isShopOpen) {
//             setTimeout(() => {
//                 resolve(work());
//             }, time);
//         } else {
//             reject(console.log('Our shop is closed'));
//         }
//     });
// };

// // step 1
// order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
//     // step 2
//     .then(() => {
//         return order(0000, () => console.log('production has started'));
//     })

//     // step 3
//     .then(() => {
//         return order(2000, () => console.log('Fruit has been chopped'));
//     })

//     // step 4
//     .then(() => {
//         return order(1000, () =>
//             console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)
//         );
//     })

//     // step 5
//     .then(() => {
//         return order(1000, () => console.log('start the machine'));
//     })

//     // step 6
//     .then(() => {
//         return order(2000, () =>
//             console.log(`ice cream placed on ${stocks.holder[1]}`)
//         );
//     })

//     // step 7
//     .then(() => {
//         return order(3000, () =>
//             console.log(`${stocks.toppings[0]} as toppings`)
//         );
//     })

//     // Step 8
//     .then(() => {
//         return order(2000, () => console.log('Serve Ice Cream'));
//     })
//     .catch(() => {
//         console.log('Customer left');
//     })
//     .finally(() => {
//         console.log('Day ended shop is closed');
//     });

let stocks = {
    Fruits: ['strawberry', 'grapes', 'bananas', 'apple'],
    liquid: ['water', 'ice'],
    holder: ['cone', 'cup', 'stick'],
    toppings: ['chocolate', 'peanuts'],
};

let isShopOpen = true;

// async function order() {
//     try {
//         await abc;
//     } catch (error) {
//         console.log("abc doesn't exist", error);
//     } finally {
//         console.log('Runs code anyways');
//     }
// }

// order().then(() => {
//     console.log('ASDSDAGASDFHGASDFH');
// });

// let toppingsChoice = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(console.log('Which topping would you love?'));
//         }, 3000);
//     });
// };

// async function kitchen() {
//     console.log(' A ');
//     console.log(' B ');
//     console.log(' C ');

//     await toppingsChoice();

//     console.log(' D ');
//     console.log(' E ');
// }

// kitchen();

// console.log('doing the dishes');
// console.log('cleaning the tables');
// console.log('taking other orders');

function time(ms) {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(resolve, ms);
        } else {
            reject(console.log('Shop is closed'));
        }
    });
}

async function kitchen() {
    async function kitchen() {
        try {
            await time(2000);
            console.log(`${stocks.Fruits[0]} was selected`);

            await time(0000);
            console.log('production has started');

            await time(2000);
            console.log('fruit has been chopped');

            await time(1000);
            console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`);

            await time(1000);
            console.log('start the machine');

            await time(2000);
            console.log(`ice cream placed on ${stocks.holder[1]}`);

            await time(3000);
            console.log(`${stocks.toppings[0]} as toppings`);

            await time(2000);
            console.log('Serve Ice Cream');
        } catch (error) {
            console.log('customer left');
        }
    }
}
