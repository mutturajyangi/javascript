function sample(name){
    console.log(`${name} invoked`);
}

//arrow function
const arrowFunc = (name)=>console.log(`${name} has invoked the function`);
console.log(arrowFunc("ram"));

//IIFE => immediately invoked function expression ()() => (function)(invoke)
((name) => (console.log(`${name} invoked`)))("krishna");

sample("mutthu")