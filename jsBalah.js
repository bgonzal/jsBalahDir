/**
**
* Here is SCOPE AND CLOSURE EXPLAINED
**
**/
// const scope = {
//   description: 'Im the context where everything is setup, variables, functions, constants, etc',
// }
// console.log(scope.description);
// const a = 1;
// function suma() {
//   const b = 2;
//   return suma2();
// }
// const b = 3;
// const c = 1;
// function suma2() {
//   const c = 3;
//   console.log('esto es 3', b)
//   return a + b + c;
// }
// console.log(suma());
// console.log('Sum is 7, concept here is closures, suma2 can access everything within his scope and everything where it was created, so every function will have access to the outer scope as well having access to B which is: 3');


/**
**
* Here: SCOPE AND CLOSURE Code Example
**
**/

// EXERCISE #2 QUESTION: THIS CODE WORKS ? IF NOT, WHY NOT AND FIX IT SOMEHOW...
// const bunnyA = {
//     name: 'Sami el conejo',
//     tasks: ['learn', 'speach', 'talk'],
//     doTask: function () {
//         this.tasks.forEach(function (task) {
//             console.log(this.name + "wants to : " + task);
//         });
//     }
// }
// bunnyA.doTask();


// IT does not work, name is undefined because "this" there does not have any property called "name", POSIBLE SOLUTION IN HERE
// const bunnyB = {
//     name: 'Sami el conejo',
//     tasks: ['learn', 'speach', 'talk'],
//     doTask: function (ele) {
//         const that = ele;
//         console.log(that);
//         this.tasks.forEach(function (task, index) {
//             console.log(that.name + "wants to : " + task);
//         });
//     }
// }
// bunnyB.doTask(bunnyB);

// GOING WILD
// THIS ONE IS UNDEFINED BECAUSE THE FUNCTION INSIDE FOREACH CREATES A NEW SCOPE
// const bunnyB = {
//     name: 'Sami el conejo',
//     tasks: ['learn', 'speach', 'talk'],
//     doTask: function () {
//         this.tasks.forEach(function (task) {
//             console.log(this.name + "wants to : " + task);
//         });
//     }
// }
// const bunnyB = {
//     name: 'Sami el Gato',
//     tasks: ['learn', 'speach', 'talk'],
//     doTask: function () {
//         this.tasks.forEach( (task) => {
//             console.log(this.name + "wants to : " + task);
//         });
//     }
// }
// bunnyB.doTask();
// HOWEVER IF ARROW FUNCTION IS USED, THEN NO NEW SCOPE IS CREATED AND THIS.NAME CAN BE ACCESSED.



/// IS == && === EQUAL ? ... IS NOT, == checks value and === checks value and type

/// const var let 

// const let are block scope.. const should be instaced within a value,
// var is function scope, is global , it gets undefined in hoisting if no value.

// function ejemplo() {
//     let b = 1;
//     function algoMas() {
//         console.log(b);
//     }
//     algoMas();
// }
// console.log(ejemplo() , 'ESTO DEBERIA SER UNDEFINED b');


// Here is I use var I will have only 10 printed... let allowed me to have secuence properly
// const datos = ['sandia','mango', 'mangoEstan'];
// const obj = {
//   name: 'Saguex',
//   age: 27,
// }

// for (const key in obj) {
//   console.log('PRI', key);
// }

// for (const dato of obj) {
//   console.log('SEC', dato);
// }


// for(let i=0; i<=9; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 5000);
// }

// for(var i=0; i<=9; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 5000);
// }
// Reason: for will iterate and over each will try to run setTimeout, however is waiting 5 seconds... var is global scope, which means at the end of the for loop
// will be 10, right after 5 seconds the consolelog prints "i" value 10 times, let has blockscope and literally 'let' me do this xD

// const persona = { name: '', lastname: ''}
// persona.name = 'jorge';
// console.log('THIS CAN MUTATE, OBJ Props can be updated', persona);

// MAP , FILTER , REDUCE

// const listOfHaloPlayers = [
//     'ZERO',
//     'SPLASH',
//     'CUBANEX',
//     'TITAN',
//     'YARI',
// ];

// const listOfActuallyGoodPlayers = listOfHaloPlayers.map((player, key, data) => { 
//     return player !== 'YARI' ? player : 'NOT YOU BRO, GO BACK TO COD';
// });

// const listOfPlayersTop = listOfHaloPlayers.filter((player, key, data)=>{
//     return player === 'kopsbalah' && player;
// });

// const allNamesForWhatButLackOfZero = listOfHaloPlayers.reduce((acumulator, player )=> {
//     if(acumulator && acumulator.includes('ZERO')){return ''}
//     return `${acumulator} ${player} --`;
// });

// const playersAsABetterDataStructure = listOfHaloPlayers.map((player, key)=> {
//     return {
//         id: key,
//         name: player,
//         mmr: '1500'
//     }
// });

// const AllMMRBroth = playersAsABetterDataStructure.reduce((acummulator, player)=>{
//     if(typeof acummulator === 'object') {
//         console.log('GGGG');
//         return parseInt(acummulator.mmr) +  parseInt(player.mmr);
//     } else {
//         return acummulator +  parseInt(player.mmr);
//     }

// })

// setTimeout(()=>{
//     listOfPlayersTop.push('kopsbalah');
// }, 5000);

//console.log('Here is a list of Halo Players:', listOfHaloPlayers);
// console.log('Here is a List of good players:', listOfActuallyGoodPlayers);
// console.log('Here is a List of TOP players in CR', listOfPlayersTop);
// console.log('WHAT:', allNamesForWhatButLackOfZero);
// console.log('OJO OJO:', playersAsABetterDataStructure);
//console.log('VAMOS A RRIBA', AllMMRBroth);


// const bestPlayer = {
//   name: 'obvioNo',
//   gt: 'zero',
//   score: 0,
// }

// const n = 10;

// function changeScore() {
  
// }



// console.log(bestPlayer);

/**
 * 
 * About functional programming
 * 
 * This way of coding is based on functions that follow some rules like:
 * 
 * Always returns the same
 * Does not have updates on props or external values, so no side effects
 * 
 * 
 * Inmutability: We do not modify, we replace
 * MAP REDUCE FILTER, ETC 
 * 
 */

// let algoAca;
// let tonto = null;
// console.log(algoAca, algoAlla, tonto); '--> algoAlla is not defined'
// console.log(algoAca, tonto); '--> null can be assined, and algoAca is undefined'



// SCOPE
// First fullName variable defined in the global scope:
// const fullName = "Oluwatobi Sofela";

// // Nested functions containing two more fullName variables:
// function profile() {
//   const fullName = "Tobi Sho";
//   function sayName() {
//     const fullName = "Oluwa Sofe";
//     function writeName() {
//       return fullName;
//     }
//     return writeName();
//   }
//   return sayName();
// }

// console.log(profile()); // Result is the const set in sayName() scope...

// const data = [12, 3, 50];

// const methods = {
//     sum: (element, n) => {
//         return element + n
//     },
//     min: (element, n) => {
//         return element + n
//     }
// }

// Create a function to iterate this array: [12, 3, 50, 'Burex', {}, [1,2,3,{}], true, false] 
// It should return all elements sumed
// Rules: 
// number: greates than 10 should be divided by 2 before is sumed, equal 3 should be replaced by 6 before is sumed
// strings should count as '2'
// objects should be ignored
// arrays should apply the same approach of the main array, means should return all elements summed
// booleans should count as 1 or 0
// Use any approach to acomplish this function.

// const data = [12, 3, 50, 'Burex', {}, [1, 2, 3, {}], true, false];
// const rules = {
//     isGreaterThanTen: (n) => { return n > 10 ? n / 2 : n },
//     isEqualThree: (n) => n === 3 ? 6 : n,
// }
// const { isGreaterThanTen, isEqualThree } = rules;



// const reducer = (acummulator, element) => {
//     let currentNumber = 0;
//     const type = typeof element;
//     // console.log(type);
//     switch (type) {
//         case ('string'):
//             currentNumber = 2;
//             break; 
//         case ('object'):
//             console.log('REVISANDO EL object', element)
//             currentNumber = Array.isArray(type) ? getSumedDataFromArray(element, reducer) : 0;
//             console.log('RESULTADO EL object', currentNumber)
//             break;
//         case ('boolean'):
//             // console.log('REVISANDO EL Boolean', element)
//             currentNumber = element ? 1 : 0;
//             break;
//         default:
//             console.log('default case:', element);
//             currentNumber = element;
//             break;
//     }

//     // console.log('REVISANDO EL ' + type, element, currentNumber);
//     currentNumber = currentNumber === 3 ? 6 : currentNumber;
//     currentNumber = (currentNumber > 10) ? (currentNumber / 2) : currentNumber;  
//     console.log('END', currentNumber );

//     return typeof acummulator === 'number' ? acummulator  + currentNumber : currentNumber;
// };
// const getSumedDataFromArray = (data, reducer) => { return data.reduce(reducer, 0) }

// console.log(getSumedDataFromArray(data, reducer));

// console.log(rules.isType('ALGO', 'string'));


// function smarthMathHOF(data, mathKey, method) {
//     let result = [];
//     for (const elem of data) {
//         result.push(method(elem, mathKey));
//     }

//     return result;
// }

// console.log(smarthMathHOF(data, 2, methods.min));


// fetch(url)
//     .then(response => {
//         // handle the response
//     })
//     .catch(error => {
//         // handle the error
//     });

// async function fetchText() {
//     let response = await fetch('/readme.txt');
//     let data = await response.text();
//     console.log(data);
// }


// const getHaloPlayersFromHaloApi = async function () {

// }


// Using Node.js 14.x +
// use "lib" package from npm
// const lib = require('lib')({token: 'tok_dev_hVHxs8C3748kTpvyEiyBK6reD9x5eiXwYnsEKVBYF1WRxg4NJRXHDaQL2YtfC6HU'/* link an account to create an auth token */});


// const getMMR = async () => {
//     let result = await lib.halo.infinite['@1.4.2'].stats.players.mmr({
//         gamertag: `kopsbalah`
//       });
// }

// console.log(getMMR());

// make API request




// const firstObject = {
//   name: 'Bryan',
//   hello: () => {
//     console.log(`Hello ${firstObject.name}`);
//   }
// }

// firstObject.hello();

// const makeObjInmutable = (obj) => {
//   Object.freeze(obj);
// }

// makeObjInmutable(firstObject);

// firstObject.hello = () => {
//   console.log('UYUYUIBAJURA');
// }

// console.log(firstObject.hello());



// const data = [
//   'nashville',
//   'nashville',
//   'los angeles',
//   'nashville',
//   'memphis',
//   'barcelona',
//   'los angeles',
//   'sevilla',
//   'madrid',
//   'canary islands',
//   'barcelona',
//   'madrid',
//   'nashville',
//   'barcelona',
//   'london',
//   'berlin',
//   'madrid',
//   'nashville',
//   'london',
//   'madrid',
// ];

// const orderedCities = (data, firstN) => {
//   let citiesOrdered = {};
//   data.forEach(city => {
//       citiesOrdered[city] = !citiesOrdered[city] ? 1 : citiesOrdered[city] +=1;
//   });

//   return Object.keys(citiesOrdered)
//     .map((city, key)=> { return { name: city, times: citiesOrdered[city] } } )
//     .sort((cityA, cityB) => cityB.times - cityA.times)
//     .slice(0, firstN - 1);
// }

// console.log(orderedCities(data, 5));



// const lista = ['z', 'z', 'z'];
// const ojoLoco = {
//   name: 'fff',
//   otro: 'tttt'
// };
// // Array.prototype.toObject = function () {
// //   const obj = {};
// //   for(let i=0; i< this.length; i++) {
// //     obj[i] = this[i]
// //   }
// //   return obj;
// // }

// // const listaObj = lista.toObject();
// const listaObj = {...lista};
// const asArrayOjoLoco = Object.keys(ojoLoco).map((element)=> element);

// console.log('Es enserio', asArrayOjoLoco);

// class regularHaloPlayer {
//   constructor() {
//     this.gt;
//     this.mmr = '-1500';
//   }
// }

// class GoodhaloPlayer {
//   constructor() {
//     this.gt;
//     this.mmr = '+1500';
//   }
// }

/**
 * FACTORY DESIGN PATTERN
 */
// class regularHaloPlayer {
//   constructor() {
//     this.gt;
//     this.mmr = '-1500';
//   }
// }
// class GoodhaloPlayer {
//   constructor() {
//     this.gt;
//     this.mmr = '+1500';
//   }
// }
// class haloFactory {
//   constructor() {
//     this.createHaloPlayer = (type) => {
//       console.log('what', type);
//       return type === '+' ? new GoodhaloPlayer() : new regularHaloPlayer();
//     };
//   }
// }
// const halo = new haloFactory();
// console.log(halo.createHaloPlayer('+'));


// DESIGN PATTERN SINGLETON
// class HaloPlayer {
//   constructor(gt, mmr) {
//     this.gt = gt;
//     this.mmr = mmr;
//   }
// }
// const singleTonBoomProcessHaloPlayers = (()=>{
//   function PlayersManager() {
//     this.a;
//     this.b;
//     this.createHaloPlayer = (gt, mmr) => {
//       return new HaloPlayer(gt, mmr);
//     }
//   }
//   return new PlayersManager();
// })();

// console.log(singleTonBoomProcessHaloPlayers.createHaloPlayer('KopsBalah', '1600'));
// console.log(singleTonBoomProcessHaloPlayers.createHaloPlayer('Zero', '1640'));


// DESIGN PATTERN STRATEGY 

// class HaloCalculator {
//   constructor() {
//     this.calculate = (n) => {return n + 11}
//   }
// }

// class CodCalculator {
//   constructor() {
//     this.calculate = (n) => {return n + 22}
//   }
// }

// class LoLCalculator {
//   constructor() {
//     this.calculate = (n) => {return n + 12}
//   }
// }

// const haloCalcObj = new HaloCalculator();
// const codCalcObj = new CodCalculator();
// const lolCalcObj = new LoLCalculator();



// class GlobalCalculator {
//   constructor(strategy) {
//     this.calculator = strategy.calculate;
//   }
// }

// const calculator = new GlobalCalculator(lolCalcObj);
// console.log(calculator.calculator(10));


// ECMASCRIPT 11
// English Counseil 

// const saguex = Math.random();
// let x = 'tomela que es tuya';
// if(saguex === 1) {
//   x = null;
// }

// const result = x ?? 'ERA NULL';

// console.log('QUIERO VER:', result);




const fourPlayers = [...Array(5).keys()];

const maxValue = fourPlayers.sort(( a, b ) => b - a).slice(0, 1);




console.log(maxValue);