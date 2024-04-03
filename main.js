const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (startIndex, mainIndex) {
    return [this.startMenu[startIndex], this.mainMneu[mainIndex]];
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here's your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};
// The Spread Operator
// Why we use spread operator ?
/* allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In an object literal
 */
// What is Iterable ?
// Array , String , Maps , Sets , Not Objects
/////////////////////////////////////////////
////////////////////////////////////////////
// Example using spread operator with array :
let arr = [1, 2, 3, 4];
let newArr = [...arr, 5, 6, 7];
console.log(newArr);
console.log(...arr);
const newMneu = [...restaurant.mainMenu, "Parmigiana", "Minestrone"];
console.log(newMneu);
console.log(`Welcome The mneu ${newMneu.join(" || ")}`);
// Copy array
let mainMneuCopy = [...restaurant.mainMenu];
// join 2 array
let mneu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(mneu);
////////////////////////////////////////////
////////////////////////////////////////////
// Example using spread operator with String :
let str = "Khaled";
let letters = [...str, "", "S."];
console.log(letters);
////////////////////////////////////////////
////////////////////////////////////////////
// Example using spread operator with Function :
// Syntax : myFunction(a, ...iterableObj, b)
/*let ingredients = [
    prompt("Let's make pasta! Ingredient 1?"),
    prompt("Ingredient 2? "),
    prompt("Ingredient 1? "),
];
console.log(ingredients);
restaurant.orderPasta(...ingredients);*/

////////////////////////////////////////////
////////////////////////////////////////////
// Example using spread operator with objects :
// Cogy objects and add properties: 
const newRestrunt ={...restaurant , founder : 'Khaled' ,founderPhone : '0505939684'};
console.log(newRestrunt);
