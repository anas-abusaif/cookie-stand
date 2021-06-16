'use strict';

const hours = ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

let table=document.getElementById('table');

let addLocationForm=document.getElementById('addBranchForm');

function getRandomCustomer(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let deletion=6;
function rowDeletion() {
  document.getElementById('table').deleteRow(deletion);
  deletion++;
}
// let seattle = {
//   name: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   agvCookie: 6.3,
//   cookiesPerHour: [],
//   total: 0,
//   getCustomer: function() {
//     for(let i = 0; i < hours.length; i++) {

//       let cookies = Math.ceil(getRandomCustomer(this.minCust, this.maxCust) * this.agvCookie);

//       this.cookiesPerHour.push(cookies);

//       this.total += cookies;
//       // this.total = this.total + cookies;
//     }

//   },
//   render: function() {
//     let h2 = document.createElement('h2');
//     citySales.appendChild(h2);
//     h2.textContent = this.name;

//     let ul = document.createElement('ul');
//     citySales.appendChild(ul);

//     for(let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       ul.appendChild(li);
//       li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
//     }

//     let total = document.createElement('li');
//     ul.appendChild(total);
//     total.textContent = `Total: ${this.total} cookies`;
//   }
// };
// seattle.getCustomer();
// seattle.render();

// let tokyo = {
//   name: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   agvCookie: 1.2,
//   cookiesPerHour: [],
//   total: 0,
//   getCustomer: function() {
//     for(let i = 0; i < hours.length; i++) {

//       let cookies = Math.ceil(getRandomCustomer(this.minCust, this.maxCust) * this.agvCookie);

//       this.cookiesPerHour.push(cookies);

//       this.total += cookies;
//       // this.total = this.total + cookies;
//     }
//   },
//   render: function() {
//     let h2 = document.createElement('h2');
//     citySales.appendChild(h2);
//     h2.textContent = this.name;

//     let ul = document.createElement('ul');
//     citySales.appendChild(ul);

//     for(let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       ul.appendChild(li);
//       li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
//     }

//     let total = document.createElement('li');
//     ul.appendChild(total);
//     total.textContent = `Total: ${this.total} cookies`;
//   }
// };
// tokyo.getCustomer();
// tokyo.render();

// let dubai = {
//   name: 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   agvCookie: 3.7,
//   cookiesPerHour: [],
//   total: 0,
//   getCustomer: function() {
//     for(let i = 0; i < hours.length; i++) {

//       let cookies = Math.ceil(getRandomCustomer(this.minCust, this.maxCust) * this.agvCookie);

//       this.cookiesPerHour.push(cookies);

//       this.total += cookies;
//       // this.total = this.total + cookies;
//     }
//   },
//   render: function() {
//     let h2 = document.createElement('h2');
//     citySales.appendChild(h2);
//     h2.textContent = this.name;

//     let ul = document.createElement('ul');
//     citySales.appendChild(ul);

//     for(let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       ul.appendChild(li);
//       li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
//     }

//     let total = document.createElement('li');
//     ul.appendChild(total);
//     total.textContent = `Total: ${this.total} cookies`;
//   }
// };
// dubai.getCustomer();
// dubai.render();

// let paris = {
//   name: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   agvCookie: 2.3,
//   cookiesPerHour: [],
//   total: 0,
//   getCustomer: function() {
//     for(let i = 0; i < hours.length; i++) {

//       let cookies = Math.ceil(getRandomCustomer(this.minCust, this.maxCust) * this.agvCookie);

//       this.cookiesPerHour.push(cookies);

//       this.total += cookies;
//       // this.total = this.total + cookies;
//     }
//   },
//   render: function() {
//     let h2 = document.createElement('h2');
//     citySales.appendChild(h2);
//     h2.textContent = this.name;

//     let ul = document.createElement('ul');
//     citySales.appendChild(ul);

//     for(let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       ul.appendChild(li);
//       li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
//     }

//     let total = document.createElement('li');
//     ul.appendChild(total);
//     total.textContent = `Total: ${this.total} cookies`;
//   }
// };
// paris.getCustomer();
// paris.render();

// let lima = {
//   name: 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   agvCookie: 4.6,
//   cookiesPerHour: [],
//   total: 0,
//   getCustomer: function() {
//     for(let i = 0; i < hours.length; i++) {

//       let cookies = Math.ceil(getRandomCustomer(this.minCust, this.maxCust) * this.agvCookie);

//       this.cookiesPerHour.push(cookies);

//       this.total += cookies;
//       // this.total = this.total + cookies;
//     }
//   },
//   render: function() {
//     let h2 = document.createElement('h2');
//     citySales.appendChild(h2);
//     h2.textContent = this.name;

//     let ul = document.createElement('ul');
//     citySales.appendChild(ul);

//     for(let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       ul.appendChild(li);
//       li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
//     }

//     let total = document.createElement('li');
//     ul.appendChild(total);
//     total.textContent = `Total: ${this.total} cookies`;
//   }
// };
// lima.getCustomer();
// lima.render();


// // Helper function
// function getRandomCustomer(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
// }

function CookieSalesPerCity(cityName, minimumCustomers, maximunCustomers, avgCustomerPurches){
  this.cityName= cityName;
  this.minimumCustomers= minimumCustomers;
  this.maximunCustomers= maximunCustomers;
  this.avgCustomerPurches= avgCustomerPurches;
  this.total=0;
  this.cookiesPerHour=[];
  CookieSalesPerCity.allValues.push(this);
}
CookieSalesPerCity.allValues=[];

CookieSalesPerCity.prototype.customersPurcheses= function(){
  for(let i=0; i<hours.length; i++){
    let cookies=Math.ceil(getRandomCustomer(this.minimumCustomers, this.maximunCustomers)*this.avgCustomerPurches);
    this.cookiesPerHour.push(cookies);
    this.total+=cookies;
  }
};
CookieSalesPerCity.prototype.tableContent= function(){
  let TRow2=document.createElement('tr');
  table.appendChild(TRow2);
  let THeaderV=document.createElement('th');
  TRow2.appendChild(THeaderV);
  THeaderV.textContent=(this.cityName);

  for(let i=0; i<hours.length; i++){
    let tableView=document.createElement('td');
    TRow2.appendChild(tableView);
    tableView.textContent=(this.cookiesPerHour[i]);

  }
  let totalDaily=document.createElement('td');
  TRow2.appendChild(totalDaily);
  totalDaily.textContent=(this.total);
};

function makeTableHeader(){
  let TRow=document.createElement('tr');
  table.appendChild(TRow);
  let THeader=document.createElement('th');
  TRow.appendChild(THeader);
  THeader.textContent=('');
  for (let i=0; i<hours.length; i++){
    let workHour=document.createElement('th');
    workHour.textContent=(hours[i]);
    TRow.appendChild(workHour);
  }
  let daily=document.createElement('th');
  daily.textContent=('daily location total');
  TRow.appendChild(daily);
}
function makeTableFooter(){
  let TRow3=document.createElement('tr');
  table.appendChild(TRow3);
  let T3Header=document.createElement('th');
  TRow3.appendChild(T3Header);
  let totalPerHour=0;
  let ovarAllTotal=0;
  for(let i=0; i<hours.length;i++){
    totalPerHour=0;
    for(let j=0; j<CookieSalesPerCity.allValues.length; j++){
      let total1=CookieSalesPerCity.allValues[j].cookiesPerHour[i];
      totalPerHour+=total1;
      ovarAllTotal+=total1;
    }
    let TableHeader2=document.createElement('th');
    TRow3.appendChild(TableHeader2);
    TableHeader2.textContent=(totalPerHour);
  }
  let overAllHeader=document.createElement('th');
  TRow3.appendChild(overAllHeader);
  overAllHeader.textContent=(ovarAllTotal);
}

makeTableHeader();
let seattleCity= new CookieSalesPerCity('Seattle', 23, 65 ,6.3);
seattleCity.customersPurcheses();
seattleCity.tableContent();

let tokyoCity= new CookieSalesPerCity('Tokyo', 3, 24 ,1.2);
tokyoCity.customersPurcheses();
tokyoCity.tableContent();

let dubaiCity= new CookieSalesPerCity('Dubai', 11, 38 ,3.7);
dubaiCity.customersPurcheses();
dubaiCity.tableContent();

let parisCity= new CookieSalesPerCity('Paris', 20, 38 ,2.3);
parisCity.customersPurcheses();
parisCity.tableContent();

let limaCity= new CookieSalesPerCity('Lima', 2, 16 ,4.6);
limaCity.customersPurcheses();
limaCity.tableContent();
makeTableFooter();


function addLocatin(event) {
  event.preventDefault();
  let location=event.target.location.value;
  let mini=event.target.mini.value;
  let maxi=event.target.maxi.value;
  let avg=event.target.avg.value;
  let newLocation= new CookieSalesPerCity(location, mini, maxi,avg);
  newLocation.customersPurcheses();
  newLocation.tableContent();
  makeTableFooter();
  rowDeletion();
}
addLocationForm.addEventListener('submit',addLocatin);
