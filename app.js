
'use strict';

////////////////////////////////////Table///////////////////////////////////////////

///////Table Header/////////////////////////
//start by creating a row using <tr>
//populate with <th> table headings so that they display in bold, <td> would just be data and not be bold
//create a string element for "location" and append it to the <tr> row
//create a loop to add the var hours array
// append a string element called "totals" for the last column of information in the row
////////////////////////////////////////////

////////Table Body /////////////////////////////////
//Need an array of hours
// need an arry of locations

// loop through locations and create a table row
// create a <td> and add location
// create an inner loop through locations and create an

// var locations = []; // this will need to be at the top of code
// var seattle = new CookieStore('seattle', 23, 45, 6.3);

// locations.push(seattle);




/////////Table Footer///////////////////////////////


//These are the hours the stores are open//
var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
//This is the  random nember generator//
function getRandomInt(customerMin, customerMax){
  var randomNumber = Math.random() * (customerMax - customerMin) + customerMin;
  return Math.floor(randomNumber);
}

var tableBody = document.getElementById('table');

var storeLocations = [];
function SalmonCookies(storeName, customerMin, customerMax, customerAverage){
  this.storeName = storeName;
  this.hourlySales = [];
  this.dailyTotals = 0;
  this.customerMin = customerMin;
  this.customerMax = customerMax;
  this.customerAverage = customerAverage;
  for (var i = 0; i < hours.length; i++){
    //Create a variable and call it
    var customersPerHour = getRandomInt(this.customerMin, this.customerMax);
    //Create new  variable for total cookies per HR = customers per HR * this. customer average.
    var totalCookiesPerHr = Math.floor(customersPerHour * this.customerAverage);
    // Add the total cookies to the sales per HR array.
    this.hourlySales.push(totalCookiesPerHr);
  }
  for (var i = 0; i < this.hourlySales.length; i++){
    this.dailyTotals = this.hourlySales[i] + this.dailyTotals;
    //Heres where you can also write this.dailyTotals += hourlySales[i]
  }
  for (var i = 0; i < hours.length; i++){
  }
  // console.log(this.hourlySales);
}
var seattleStore = new SalmonCookies('Seattle', 23,65,6.3);
var tokyoStore = new SalmonCookies('Tokyo', 3,24,1.2);
var dubaiStore = new SalmonCookies('Dubai', 11,38,3.7);
var parisStore = new SalmonCookies('Paris', 20,38,2.3);
var limaStore = new SalmonCookies('Lima', 2,16,4.6);
storeLocations.push(seattleStore, tokyoStore, dubaiStore, parisStore, limaStore);
// console.log(seattleStore);
console.log(storeLocations);

//render will take the information from the SalmonCookies constructor and display it.
function renderHeader (){
// CPA the 'location' to the table
  var tableHeader = document.createElement('tr');
  var tableData = document.createElement('th');
  tableData.textContent = 'Location';
  tableHeader.appendChild(tableData);
  tableBody.appendChild(tableHeader);

  //Hours loop CPA within the for loop
  for (var i = 0; i < hours.length; i++) {
    var tableData2 = document.createElement('th');
    tableData2.textContent = hours[i];
    tableHeader.appendChild(tableData2);
  }

  //Create a header for the store totals column
  var tableColumnTotal = document.createElement('th');
  tableColumnTotal.textContent = 'Store Totals';
  tableHeader.appendChild(tableColumnTotal);


};

renderHeader();
