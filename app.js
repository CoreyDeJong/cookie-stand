'use strict';

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

//RNGESUS//
function getRandomInt(customerMin, customerMax) {
  var randomNumber = Math.random() * (customerMax - customerMin) + customerMin;
  return Math.floor(randomNumber);
}
console.log(getRandomInt(23,65));

//store object//
var seattleStore = {
  name: 'Seattle',
  customerMin: 23,
  customerMax: 65,
  customerAverage: 6.3,
  salesPerHour: [],
  //Customer/sales per hour//
  getHourlySales: function(){
    // Go through the hours of the day
    for (var i = 0; i < hours.length; i++){
    // create a variable named customersPerHour and call the random function
      var customersPerHour = getRandomInt(this.customerMin, this.customerMax);
      // create a new varaible called totalCookiesPerHour = customersPerHour * this.customerAverage
      var totalCookiesPerHour = Math.floor(customersPerHour * this.customerAverage);
      // add the totalCookies to the salesPerHourArray
      this.salesPerHour.push(totalCookiesPerHour);
    }
    console.log(this.salesPerHour);
  },
  render: function(){
    this.getHourlySales();
    // output HTML to the DOC
    // Unordered list with the name of the city
    var storesArticle = document.getElementById('stores');
    var cityUL = document.createElement('ul');
    var cityHeader = document.createElement('h1');
    cityHeader.textContent = this.name;
    cityUL.appendChild(cityHeader);
    // I need to create a LI for every hour the store is open
    for(var i = 0; i < hours.length; i++){
      var hourLI = document.createElement('li');
      hourLI.textContent = `${hours[i]}: ${this.salesPerHour[i]} cookies`;
      cityUL.appendChild(hourLI);
    }
    // create the total
    var total = 0;
    for(var i = 0; i < this.salesPerHour.length; i++){
      total += this.salesPerHour[i];
    }
    var totalLI = document.createElement('li');
    totalLI.textContent = `Total ${total} cookies`;
    cityUL.appendChild(totalLI);

    storesArticle.appendChild(cityUL);
    // 2 pieces of data: hourOfDay : ## cookies
  },
};

// var myTable = document.getElementById('myTable');
// var coffeeArray = ['Latte', 'Mocha', 'Americano', 'Cappiccino'];

// var coffeeTable = document.createElement('table');
// var headerRow = document.createElement('tr');

// for(var i = 0; i < coffeeArray.length; i++){
//   var tableHeader = document.createElement('th');
//   tableHeader.textContent = coffeeArray[i];
//   headerRow.appendChild(tableHeader);
// }
// coffeeTable.appendChild(headerRow);

// for(var i = 0; i < 4; i++){
//   var row = document.createElement('tr');
//   for(var j = 0; j < coffeeArray.length; j++){
//     var tableData = document.createElement('td');
//     tableData.textContent = Math.floor(getRandomInt(0, 100));
//     row.appendChild(tableData);
//   }
//   coffeeTable.appendChild(row);
// }

// myTable.appendChild(coffeeTable);

seattleStore.render();


// function Coffee(size, type, price){
//   // set our properties using this
//   this.size = size;
//   this.coffeeType = type;
//   this.potato = price;
//   this.temperature = 180;
//   this.ingredients = [];
//   this.generateHourSales = function(){
//     console.log('hello');
//   };
// }

// Coffee.prototype.render = function(){
//   // put rendering logic here
// };
// // to Create an object using a constructor function
// // we INSTANTIATE the object using the construction function

// var amandasLatte = new Coffee('Large', 'latte', 5);

// console.log(amandasLatte.size);
// amandasLatte.render();



// //Worked with Alex, used his code given issues with mine to progress to the next steps of the lab


// //These are  the hours the stores are open//
// var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
// //This is the  random nember generator//
// function getRandomInt(customerMin, customerMax){
//   return Math.floor(Math.random() * (customerMax - customerMin)) + customerMin;
// }
// console.log(getRandomInt(23,65));

// function totalSalesCalc(salesPerCustomer){
//   for (i = 0; i < hours.length; i++);
//   return;
// //   console.log (total);
// }

// //Seattle store object//
// var seattleStore = {
//   name: 'Seattle',
//   customerMin: 23,
//   customerMax: 65,
//   customerAverage: 6.3,
//   salesPerHour: [],

//   //This function calculates customers per HR & sales per HR//
//   getHourlySales: function(){

//     for (var i = 0; i < hours.length; i++){
//       // create a variable named customersPerHour and call the random function
//       var customersPerHour = getRandomInt(this.customerMin,this.customerMax);

//       // create a new variable called totalCookiesPerHour = customerPerHour * this.customerAverage
//       var totalCookiesPerHour = Math.floor(customersPerHour * this.customerAverage);
//       //add the totalCookiesPerHour to the salesPerHourArray
//       this.salesPerHour.push(totalCookiesPerHour);
//     }
//     console.log(this.salesPerHour);

//   },

//   render: function(){
//     // output HTML to the DOC

//     // Unordered list wit hthe name of the city
//     var storesArticle = document.getElementById('stores');
//     var cityUL = document.createElement('ul');
//     var cityHeader = document.createElement('hi');
//     cityHeader.textContent = this.name;
//     cityUL.appendChild(cityHeader);


//     //I need to create a LI for every hour the store is open
//     for(var i = 0; i < hours.length; i++){
//       var hourLI = document.createElement('Li');
//       hourLI.textContent = `${hours[i]}: ${this.salesPerHour[i]} cookies`;
//       cityUL.appendChild(hourLI);
//     }
//     // create the total
//     var total = 0;
//     for(var i = 0; i < this.salesPerHour.length; i++)
//       total += this.salesPerHour[i];

//     var totalLI = document.createElement('li');
//     totalLI.textContent = `Total ${total} cookies`;
//     cityUL.appendChild(totalLI);

//     storesArticle.appendChild(cityUL);


// //CPA = create, populate and append

//     // 2 pieces of data: hourOfDay: ## cookies

//     //create the li, popultate it, and then append it

//   },

// };
// seattleStore.getHourlySales();
// seattleStore.render();



//     for (i = 0; i < hours.length; i++){
//       salesPerCustomer.push(customersPerHour[i] * this.customerAverage);
//     }
//     console.log(customersPerHour);
//     console.log(salesPerCustomer);
//   }
//   ,
//   totalSales: function(){
//     for (var i = 0; i < salesPerCustomer.length; i++);
//     var total = salesPerCustomer.push;
//     console.log (total);
//   },
// };

// seattleStore.totalSales();





// var element = document.createElement('ul');

// element.textContent = 'Hello';

// var seattleStore = document.getElementById('seattleStore');

// seattleStore.appendChild(element);






// //insert object into sales.html site
// var seattleStoreArticle = document.getElementById('seattleStore');


// //create an unordered list for the new location
// var newStoreUL = document.createElement('ul');
// newStoreUL.textContent = seattleStore.name;

// // Created one LI
// var salesPerCustomerLI = document.createElement('li');
// salesPerCustomerLI.textContent = `${seattleStore.age}`;

// // attached the li to the UL
// newStoreUL.appendChild(salesPerCustomerLI);

// // Created a second LI
// var weightLI = document.createElement('li');
// weightLI.textContent = `${seattleStore.weight}`;
// // Attached the LI to the UL
// newCatUL.appendChild(weightLI);

// catArticle.append(newCatUL);

// var numbersUL = document.createElement('ul');

// for(var i = 0; i < 5; i++){
//   var newTag = document.createElement('li');
//   newTag.textContent = i;
//   numbersUL.append(newTag);
// }

// locationArticle.appendChild(numbersUL);




































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