'use strict';

//Worked with Alex, used his code given issues with mine to progress to the next steps of the lab


//These are  the hours the stores are open//
var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
//This is the  random nember generator//
function getRandomInt(customerMin, customerMax){
  return Math.floor(Math.random() * (customerMax - customerMin)) + customerMin;
}
console.log(getRandomInt(23,65));
function totalSalesCalc(salesPerCustomer){
  for (i = 0; i < hours.length; i++);
  return;
//   console.log (total);
}
// .
// .
//Seattle store object//
var seattleStore = {
  store: 'Seattle',
  customerMin: 23,
  customerMax: 65,
  customerAverage: 6.3,
  //This function calculates customers per HR & sales per HR//
  hourlySales: function(){
    var customersPerHour = [];
    var salesPerCustomer = [];
    for (var i = 0; i < hours.length; i++){
      customersPerHour.push(getRandomInt(this.customerMin,this.customerMax));
    }
    for (i = 0; i < hours.length; i++){
      salesPerCustomer.push(customersPerHour[i] * this.customerAverage);
    }
    console.log(customersPerHour);
    console.log(salesPerCustomer);
  }
  ,
  totalSales: function(){
    for (var i = 0; i < salesPerCustomer.length; i++);
    var total = salesPerCustomer.push;
    console.log (total);
  },
};

seattleStore.hourlySales();
seattleStore.totalSales();



















//insert object into sales.html site
var locationArticle = document.getElementById('seattleStore');


//create an unordered list for the new location
var newLocationUL = document.createElement('ul');
newLocationUL.textContent = seattleStore.store;

// Created one LI
var ageLI = document.createElement('li');
ageLI.textContent = `Age: ${seattleStore.age}`;
// attached the li to the UL
newCatUL.appendChild(ageLI);

// Created a second LI
var weightLI = document.createElement('li');
weightLI.textContent = `Weight: ${seattleStore.weight}`;
// Attached the LI to the UL
newCatUL.appendChild(weightLI);

catArticle.append(newCatUL);

var numbersUL = document.createElement('ul');

for(var i = 0; i < 5; i++){
  var newTag = document.createElement('li');
  newTag.textContent = i;
  numbersUL.append(newTag);
}

locationArticle.appendChild(numbersUL); 




































//Corey's Code





// var hoursOfOperation = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12am:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'];

// //create a random number between maxCustomerOrder and minCustomerOrder
// function randomNumber(max,min){
//     return(Math.random() * (max - min)) + min;
// }
// console.log(getRandomInt(65,23));


// //create an object that stores min/max hourly customers
// var seattle = {
//     location: 'Seattle',
//     minCustomerOrder: 23,
//     maxCustomerOrder: 65,
//     avgCustomerDemand: 6.3,

//         //Create a function that creates an array of cookiesPerHour (gets a random number, multiplies by 6.3 and creates an array)
//         cookiesPerHour: function(){
//         var cookiesPerHour = [];
//         for (var i=0; i < hoursOfOperation.length; i++ ){
//             var hourlyCust = randomNumber(maxCustomerOrder, minCustomerOrder);
//             totalSales = multiply(hourlyCust, avgCustomerDemand);
//             cookiesPerHour.push(totalSales);
//         }
//         console.log(seattle.cookiesPerHour);

// }



//     // # of two arrays have same length
//     var cats = ['josie', 'belle', 'frodo'];
//     var catAges = ['9', '8', '10'];
//     van answer = '';
//     for(var i=0; i < cats.length; i++){
//         answer += `${cats[i]} is ${catAges[i]} years old ||`;} // the ` is not an apostophe, is next to the number 1. Template literals is the ${}





//     //  for loop that goes through the number of occurrences in the hoursOfOperation and creates an array with a random number between minCustomerOrder and MaxCustomerOrder



// //combines the hours of operations and the total sales per hour
// varSales = '';
// for(var i=0; i<hoursOfOperation.length; i++){
//     varSales += `${hoursOfOperation[i]} ${totalSalesPerHour} cookies ||`;}





//         //Total amount, use altSum +=myarray
//             var myArray = [4,8,15,16,23,42]; //change to reference the array of total customer sales per day
//         var altSum = 0;
//         for(var i=0; i<myArray.length; i++){
//             altSum += myArray[i]