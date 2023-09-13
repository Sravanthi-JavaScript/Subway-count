//initalize the count_el as 0
//listen for clicks on the increment button
//increment the count variable when button is clicked
//change the count in the HTML to reflect the new count_el
let countEl = document.getElementById("count");
let saveEl = document.getElementById("save-el");
let count_el = 0;
function increment() {
  count_el += 1;
  countEl.innerText = count_el;
}

//create a function save() which logs out the count when its called

function save() {
  let para = count_el + " - ";
  saveEl.textContent += para;
  countEl.textContent = 0;
  count_el = 0;
}
//1. Grab the save-el paragraph and store it in a variable called saveEl
// 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
// 3. Render the variable in the saveEl using innerText
// NB: Make sure to not delete the existing content of the paragraph

// let name = "Sravanthi";
// let greeting = "Hi, my name is ";
// let myGreeting = greeting + name;
// console.log(myGreeting);

// console.log(4 + 5); //9
// console.log("2" + "4"); // 24
// console.log("5" + 1); //51
// console.log(100 + "100"); //100100
// create a function that logs out the number 42
//call/invoke the function

// function bangtan() {
//   console.log(42);
// }
// bangtan();

//creates a function that logs out the sum of all the lap times

// let lap1 = 34,
//   lap2 = 33,
//   lap3 = 36;
// function sumOfLaps() {
//   let sum = lap1 + lap2 + lap3;
//   console.log(sum);
// }
// sumOfLaps();

// create a function that increments the lapscompleted variable with one
//run it three times
// let lapscompleted = 0;
// function lap() {
//   lapscompleted += 1;
//   console.log(lapscompleted);
// }
// lap();
// lap();
// lap();
// console.log(lapscompleted);

// grab the welcome-el paragraph and store it in a variable called welcomeEl
// create two variables (name & greeting) that contains your name
//and the greeting we want to render on the page
//Render the welcome message using welcomeWl.iinerText

// let name1 = "sravanthi";
// let greeting1 = "welcome Home ";
// let welcomeEl = document.getElementById("welcome-el");

// welcomeEl.innerText = greeting1 + " " + name1;

// //add an emoji to the end!
// // hint : count = count + 1
// welcomeEl.innerText += "🙌";

//1. Grab the save-el paragraph and store it in a variable called saveEl
//2. create a variable that contains both the and the dash separator, i.e. "12 - "
//3. render the variable in the saveEl using innerText
// NB: make sure to not delete the existing content of the paragraph
