'use strict';

const hours = ['','6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','daily location total'];

let citySales=document.getElementById('dailySales');
let table=document.createElement('table');
citySales.appendChild(table);
function getRandomCustomer(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
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
  this.randomCustomer=0;
  this.fragRandomPurches=0;
  this.trueCutomerPurches=0;
  this.total=0;
}
CookieSalesPerCity.prototype.customers= function(min, max){
  this.randomCustomer=getRandomCustomer(min, max);
};
CookieSalesPerCity.prototype.customersPurcheses= function(){
  this.fragRandomPurches=this.randomCustomer * this.avgCustomerPurches;
  this.trueCutomerPurches=Math.ceil(this.fragRandomPurches);
};
CookieSalesPerCity.prototype.tableVeiw=function(){
  let tableRow1= document.createElement('tr');
  table.appendChild(tableRow1);
  for(let i=0; i<hours.length; i++){
    let tableHeader= document.createElement('th');
    tableHeader.textContent=(hours[i]);
    tableRow1.appendChild(tableHeader);
  }
  let tableRow2=document.createElement('tr');
  table.appendChild(tableRow2);
  for (let i=0; i<hours.length; i++){
    if (i===0){
      let name=document.createElement('td');
      name.textContent=(this.cityName);
      tableRow2.appendChild(name);
    }else if(i>0 && i<hours.length-1){
      let data=document.createElement('td');
      data.textContent=(this.trueCutomerPurches);
      tableRow2.appendChild(data);
      this.total += this.trueCutomerPurches;
    }else if(i===hours.length-1){
      let data=document.createElement('td');
      data.textContent=(this.total);
      tableRow2.appendChild(data);
    }
  }
};

let seattleCity= new CookieSalesPerCity('Seattle', 23, 65 ,6.3);
seattleCity.customers(seattleCity.minimumCustomers,seattleCity.maximunCustomers);
seattleCity.customersPurcheses();
seattleCity.tableVeiw();

let tokyoCity= new CookieSalesPerCity('Tokyo', 3, 24, 1.2);
tokyoCity.customers(tokyoCity.minimumCustomers,tokyoCity.maximunCustomers);
tokyoCity.customersPurcheses();
tokyoCity.tableVeiw();

let dubaiCity= new CookieSalesPerCity('Dubai', 11, 38 ,3.7);
dubaiCity.customers(dubaiCity.minimumCustomers,dubaiCity.maximunCustomers);
dubaiCity.customersPurcheses();
dubaiCity.tableVeiw();

let parisCity= new CookieSalesPerCity('Paris', 20, 38, 2.3);
parisCity.customers(parisCity.minimumCustomers,parisCity.maximunCustomers);
parisCity.customersPurcheses();
parisCity.tableVeiw();

let limaCity= new CookieSalesPerCity('Lima', 2, 16, 4.6);
limaCity.customers(limaCity.minimumCustomers,limaCity.maximunCustomers);
limaCity.customersPurcheses();
limaCity.tableVeiw();
