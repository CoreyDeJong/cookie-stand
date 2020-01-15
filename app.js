// // Collaborated with Alex and Anthony, mad props for their skills//
'use strict';

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

// var allGlobal = [];

// //RNGESUS//
function getRandomInt(customerMin, customerMax) {
  var randomNumber = Math.random() * (customerMax - customerMin) + customerMin;
  return Math.floor(randomNumber);
}
// console.log(getRandomInt(23,65));

// //store object//
// var seattleStore = {
//   name: 'Seattle',
//   customerMin: 23,
//   customerMax: 65,
//   customerAverage: 6.3,
//   salesPerHour: [],
//   //Customer/sales per hour//
//   getHourlySales: function(){
//     // Go through the hours of the day
//     for (var i = 0; i < hours.length; i++){
//     // create a variable named customersPerHour and call the random function
//       var customersPerHour = getRandomInt(this.customerMin, this.customerMax);
//       // create a new varaible called totalCookiesPerHour = customersPerHour * this.customerAverage
//       var totalCookiesPerHour = Math.floor(customersPerHour * this.customerAverage);
//       // add the totalCookies to the salesPerHourArray
//       this.salesPerHour.push(totalCookiesPerHour);
//     }
//     console.log(this.salesPerHour);
//   },
//   render: function(){
//     this.getHourlySales();
//     // output HTML to the DOC
//     // Unordered list with the name of the city
//     var storesArticle = document.getElementById('stores');
//     var cityUL = document.createElement('ul');
//     var cityHeader = document.createElement('h1');
//     cityHeader.textContent = this.name;
//     cityUL.appendChild(cityHeader);
//     // I need to create a LI for every hour the store is open
//     for(var i = 0; i < hours.length; i++){
//       var hourLI = document.createElement('li');
//       hourLI.textContent = `${hours[i]}: ${this.salesPerHour[i]} cookies`;
//       cityUL.appendChild(hourLI);
//     }
//     // create the total
//     var total = 0;
//     for(var i = 0; i < this.salesPerHour.length; i++){
//       total += this.salesPerHour[i];
//     }
//     var totalLI = document.createElement('li');
//     totalLI.textContent = `Total ${total} cookies`;
//     cityUL.appendChild(totalLI);

//     storesArticle.appendChild(cityUL);
//     // 2 pieces of data: hourOfDay : ## cookies
//   },
// };

// //store object//
// var tokyoStore = {
//   name: 'Tokyo',
//   customerMin: 3,
//   customerMax: 24,
//   customerAverage: 1.2,
//   salesPerHour: [],
//   //Customer/sales per hour//
//   getHourlySales: function(){
//     // Go through the hours of the day
//     for (var i = 0; i < hours.length; i++){
//     // create a variable named customersPerHour and call the random function
//       var customersPerHour = getRandomInt(this.customerMin, this.customerMax);
//       // create a new varaible called totalCookiesPerHour = customersPerHour * this.customerAverage
//       var totalCookiesPerHour = Math.floor(customersPerHour * this.customerAverage);
//       // add the totalCookies to the salesPerHourArray
//       this.salesPerHour.push(totalCookiesPerHour);
//     }
//     console.log(this.salesPerHour);
//   },
//   render: function(){
//     this.getHourlySales();
//     // output HTML to the DOC
//     // Unordered list with the name of the city
//     var storesArticle = document.getElementById('stores');
//     var cityUL = document.createElement('ul');
//     var cityHeader = document.createElement('h1');
//     cityHeader.textContent = this.name;
//     cityUL.appendChild(cityHeader);
//     // I need to create a LI for every hour the store is open
//     for(var i = 0; i < hours.length; i++){
//       var hourLI = document.createElement('li');
//       hourLI.textContent = `${hours[i]}: ${this.salesPerHour[i]} cookies`;
//       cityUL.appendChild(hourLI);
//     }
//     // create the total
//     var total = 0;
//     for(var i = 0; i < this.salesPerHour.length; i++){
//       total += this.salesPerHour[i];
//     }
//     var totalLI = document.createElement('li');
//     totalLI.textContent = `Total ${total} cookies`;
//     cityUL.appendChild(totalLI);

//     storesArticle.appendChild(cityUL);
//     // 2 pieces of data: hourOfDay : ## cookies
//   },
// };

// //store object//
// var dubaiStore = {
//   name: 'Dubai',
//   customerMin: 11,
//   customerMax: 38,
//   customerAverage: 3.7,
//   salesPerHour: [],
//   //Customer/sales per hour//
//   getHourlySales: function(){
//     // Go through the hours of the day
//     for (var i = 0; i < hours.length; i++){
//     // create a variable named customersPerHour and call the random function
//       var customersPerHour = getRandomInt(this.customerMin, this.customerMax);
//       // create a new varaible called totalCookiesPerHour = customersPerHour * this.customerAverage
//       var totalCookiesPerHour = Math.floor(customersPerHour * this.customerAverage);
//       // add the totalCookies to the salesPerHourArray
//       this.salesPerHour.push(totalCookiesPerHour);
//     }
//     console.log(this.salesPerHour);
//   },
//   render: function(){
//     this.getHourlySales();
//     // output HTML to the DOC
//     // Unordered list with the name of the city
//     var storesArticle = document.getElementById('stores');
//     var cityUL = document.createElement('ul');
//     var cityHeader = document.createElement('h1');
//     cityHeader.textContent = this.name;
//     cityUL.appendChild(cityHeader);
//     // I need to create a LI for every hour the store is open
//     for(var i = 0; i < hours.length; i++){
//       var hourLI = document.createElement('li');
//       hourLI.textContent = `${hours[i]}: ${this.salesPerHour[i]} cookies`;
//       cityUL.appendChild(hourLI);
//     }
//     // create the total
//     var total = 0;
//     for(var i = 0; i < this.salesPerHour.length; i++){
//       total += this.salesPerHour[i];
//     }
//     var totalLI = document.createElement('li');
//     totalLI.textContent = `Total ${total} cookies`;
//     cityUL.appendChild(totalLI);

//     storesArticle.appendChild(cityUL);
//     // 2 pieces of data: hourOfDay : ## cookies
//   },
// };

// //store object//
// var parisStore = {
//   name: 'Paris',
//   customerMin: 20,
//   customerMax: 38,
//   customerAverage: 2.3,
//   salesPerHour: [],
//   //Customer/sales per hour//
//   getHourlySales: function(){
//     // Go through the hours of the day
//     for (var i = 0; i < hours.length; i++){
//     // create a variable named customersPerHour and call the random function
//       var customersPerHour = getRandomInt(this.customerMin, this.customerMax);
//       // create a new varaible called totalCookiesPerHour = customersPerHour * this.customerAverage
//       var totalCookiesPerHour = Math.floor(customersPerHour * this.customerAverage);
//       // add the totalCookies to the salesPerHourArray
//       this.salesPerHour.push(totalCookiesPerHour);
//     }
//     console.log(this.salesPerHour);
//   },
//   render: function(){
//     this.getHourlySales();
//     // output HTML to the DOC
//     // Unordered list with the name of the city
//     var storesArticle = document.getElementById('stores');
//     var cityUL = document.createElement('ul');
//     var cityHeader = document.createElement('h1');
//     cityHeader.textContent = this.name;
//     cityUL.appendChild(cityHeader);
//     // I need to create a LI for every hour the store is open
//     for(var i = 0; i < hours.length; i++){
//       var hourLI = document.createElement('li');
//       hourLI.textContent = `${hours[i]}: ${this.salesPerHour[i]} cookies`;
//       cityUL.appendChild(hourLI);
//     }
//     // create the total
//     var total = 0;
//     for(var i = 0; i < this.salesPerHour.length; i++){
//       total += this.salesPerHour[i];
//     }
//     var totalLI = document.createElement('li');
//     totalLI.textContent = `Total ${total} cookies`;
//     cityUL.appendChild(totalLI);

//     storesArticle.appendChild(cityUL);
//     // 2 pieces of data: hourOfDay : ## cookies
//   },
// };


// //store object//
// var limaStore = {
//   name: 'Lima',
//   customerMin: 2,
//   customerMax: 16,
//   customerAverage: 4.6,
//   salesPerHour: [],
//   //Customer/sales per hour//
//   getHourlySales: function(){
//     // Go through the hours of the day
//     for (var i = 0; i < hours.length; i++){
//     // create a variable named customersPerHour and call the random function
//       var customersPerHour = getRandomInt(this.customerMin, this.customerMax);
//       // create a new varaible called totalCookiesPerHour = customersPerHour * this.customerAverage
//       var totalCookiesPerHour = Math.floor(customersPerHour * this.customerAverage);
//       // add the totalCookies to the salesPerHourArray
//       this.salesPerHour.push(totalCookiesPerHour);
//     }
//     console.log(this.salesPerHour);
//   },
//   render: function(){
//     this.getHourlySales();
//     // output HTML to the DOC
//     // Unordered list with the name of the city
//     var storesArticle = document.getElementById('stores');
//     var cityUL = document.createElement('ul');
//     var cityHeader = document.createElement('h1');
//     cityHeader.textContent = this.name;
//     cityUL.appendChild(cityHeader);
//     // I need to create a LI for every hour the store is open
//     for(var i = 0; i < hours.length; i++){
//       var hourLI = document.createElement('li');
//       hourLI.textContent = `${hours[i]}: ${this.salesPerHour[i]} cookies`;
//       cityUL.appendChild(hourLI);
//     }
//     // create the total
//     var total = 0;
//     for(var i = 0; i < this.salesPerHour.length; i++){
//       total += this.salesPerHour[i];
//     }
//     var totalLI = document.createElement('li');
//     totalLI.textContent = `Total ${total} cookies`;
//     cityUL.appendChild(totalLI);

//     storesArticle.appendChild(cityUL);
//     // 2 pieces of data: hourOfDay : ## cookies
//   },
// };

// ///////////////////Creating Table ///////////////////////////
// // links to the myTable link in sales.html and calls it myTable
// var myTable = document.getElementById('myTable');

// // array of hours
// // var coffeeArray = ['Latte', 'Mocha', 'Americano', 'Cappiccino'];

// //creates a table named coffeeTable
// var coffeeTable = document.createElement('table');

// //creates and headerRow
// var headerRow = document.createElement('tr');


// ///////Creates the Header.//////////////////////////////////
// // by using a for loop that runs the length of the hours array.
// for(var i = 0; i < hours.length; i++){
//   //creates a heading called tableHeader
//   var tableHeader = document.createElement('th');
//   //add text in the table header relative to the hours array[0, 1, 2,....]
//   tableHeader.textContent = hours[i];
//   //append will take the value defined in tableHeader and append it to the headerRow
//   headerRow.appendChild(tableHeader);
// }
// // will append the headerRow to the coffeeTable
// coffeeTable.appendChild(headerRow);


// //Creates rows of data using a nested for loop to create a row as many times as needed
// //for loop that runs 4 times, (need to switch it to number of locations)

// for(var i = 0; i < 5; i++){
// //variable row is created
//   var row = document.createElement('tr');
//   //nested for loop
//   for(var j = 0; j < hours.length; j++){
//     //data element is created
//     var tableData = document.createElement('td');
//     //assigns a random number to table data (need to reference the min/max from each sites)
//     tableData.textContent = Math.floor(getRandomInt(0, 100));
//     //adds that data to a row
//     row.appendChild(tableData);
//   }
//   // append the value of row into the table
//   coffeeTable.appendChild(row);
// }
// //append the rows to the myTable table
// myTable.appendChild(coffeeTable);


// //Need to add another column with the totals for each location, add to the end of each nested for loop



// //Need to create a 3rd for loop to create a row of totals
// // will need to select the appropriate value from each row across the multiple locations




// seattleStore.render();
// tokyoStore.render();
// dubaiStore.render();
// parisStore.render();
// limaStore.render();


// var salesPerHour = [];
var badConstructor = Cookiemonster(Seatte, 25, 45, 5);
console.log(badConstructor);

/////////////////////////Constructor////////////////////////////
//inputs name, customerMin, customerMax, customerAverage and determines salesperhout
function Cookiemonster(name, customerMin, customerMax, customerAverage){
  this.name = name;
  this.customerMin = customerMin;
  this.customerMax = customerMax;
  this.customerAverage = customerAverage ;
  this.salesPerHour = function(){
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
  };
}
