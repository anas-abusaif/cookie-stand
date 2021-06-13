'use strict';

let citySales=document.getElementById('dailySales');


let SeatleCity={
  cityName: 'Seatle',
  minimumCustomers: 23,
  maximumCustemers: 65,
  avgCookiePerCustomer: 6.3,
  render: function(){
    let heading=document.createElement('h2');
    heading.textContent=this.cityName;
    citySales.appendChild(heading);
    let unorderedList=document.createElement('ul');
    citySales.appendChild(unorderedList);
    let aa=0;
    for(let a=6; a<21; a++ ){
      let randmCustomer=Math.floor(Math.random() * this.maximumCustemers) + this.minimumCustomers;
      let randmCustomerPurshase=randmCustomer*this.avgCookiePerCustomer;
      randmCustomerPurshase.toFixed(0);
      if(a<12){
        let hour=document.createElement('li');
        unorderedList.appendChild(hour);
        hour.textContent=`${a}am:${randmCustomer} cookies`;
        aa=aa+randmCustomer;
      }else if(a===12){
        let hour=document.createElement('li');
        unorderedList.appendChild(hour);
        hour.textContent=`${a}pm:${randmCustomer} cookies`;
      }else if(a>12 && a<20){
        let hour=document.createElement('li');
        unorderedList.appendChild(hour);
        hour.textContent=`${a-12}pm:${randmCustomer} cookies`;
      }else if(a===20){
        let totalSales=document.createElement('li');
        unorderedList.appendChild(totalSales);
        totalSales.textContent=`Total:${aa} cookies`;
      }
    }

  }
};

let TokyoCity={
  cityName: 'Tokyo',
  minimumCustomers: 3,
  maximumCustemers: 24,
  avgCookiePerCustomer: 1.2,
  render: function(){
    let heading=document.createElement('h2');
    heading.textContent=this.cityName;
    citySales.appendChild(heading);
    let unorderedList=document.createElement('ul');
    citySales.appendChild(unorderedList);
    let aa=0;
    for(let a=6; a<21; a++ ){
      let randmCustomer=Math.floor(Math.random() * this.maximumCustemers) + this.minimumCustomers;
      let randmCustomerPurshase=randmCustomer*this.avgCookiePerCustomer;
      randmCustomerPurshase.toFixed(0);
      if(a<12){
        let hour=document.createElement('li');
        unorderedList.appendChild(hour);
        hour.textContent=`${a}am:${randmCustomer} cookies`;
        aa=aa+randmCustomer;
      }else if(a===12){
        let hour=document.createElement('li');
        unorderedList.appendChild(hour);
        hour.textContent=`${a}pm:${randmCustomer} cookies`;
      }else if(a>12 && a<20){
        let hour=document.createElement('li');
        unorderedList.appendChild(hour);
        hour.textContent=`${a-12}pm:${randmCustomer} cookies`;
      }else if(a===20){
        let totalSales=document.createElement('li');
        unorderedList.appendChild(totalSales);
        totalSales.textContent=`Total:${aa} cookies`;
      }
    }

  }
};
let DubaiCity={
  cityName: 'Dubai',
  minimumCustomers: 11,
  maximumCustemers: 38,
  avgCookiePerCustomer: 3.7,
  render: function(){
    let heading=document.createElement('h2');
    heading.textContent=this.cityName;
    citySales.appendChild(heading);
    let unorderedList=document.createElement('ul');
    citySales.appendChild(unorderedList);
    let aa=0;
    for(let a=6; a<21; a++ ){
      let randmCustomer=Math.floor(Math.random() * this.maximumCustemers) + this.minimumCustomers;
      let randmCustomerPurshase=randmCustomer*this.avgCookiePerCustomer;
      randmCustomerPurshase.toFixed(0);
      if(a<12){
        let hour=document.createElement('li');
        unorderedList.appendChild(hour);
        hour.textContent=`${a}am:${randmCustomer} cookies`;
        aa=aa+randmCustomer;
      }else if(a===12){
        let hour=document.createElement('li');
        unorderedList.appendChild(hour);
        hour.textContent=`${a}pm:${randmCustomer} cookies`;
      }else if(a>12 && a<20){
        let hour=document.createElement('li');
        unorderedList.appendChild(hour);
        hour.textContent=`${a-12}pm:${randmCustomer} cookies`;
      }else if(a===20){
        let totalSales=document.createElement('li');
        unorderedList.appendChild(totalSales);
        totalSales.textContent=`Total:${aa} cookies`;
      }
    }

  }
};
let ParisCity={
  cityName: 'Paris',
  minimumCustomers: 20,
  maximumCustemers: 38,
  avgCookiePerCustomer: 2.3,
  render: function(){
    let heading=document.createElement('h2');
    heading.textContent=this.cityName;
    citySales.appendChild(heading);
    let unorderedList=document.createElement('ul');
    citySales.appendChild(unorderedList);
    let aa=0;
    for(let a=6; a<21; a++ ){
      let randmCustomer=Math.floor(Math.random() * this.maximumCustemers) + this.minimumCustomers;
      let randmCustomerPurshase=randmCustomer*this.avgCookiePerCustomer;
      randmCustomerPurshase.toFixed(0);
      if(a<12){
        let hour=document.createElement('li');
        unorderedList.appendChild(hour);
        hour.textContent=`${a}am:${randmCustomer} cookies`;
        aa=aa+randmCustomer;
      }else if(a===12){
        let hour=document.createElement('li');
        unorderedList.appendChild(hour);
        hour.textContent=`${a}pm:${randmCustomer} cookies`;
      }else if(a>12 && a<20){
        let hour=document.createElement('li');
        unorderedList.appendChild(hour);
        hour.textContent=`${a-12}pm:${randmCustomer} cookies`;
      }else if(a===20){
        let totalSales=document.createElement('li');
        unorderedList.appendChild(totalSales);
        totalSales.textContent=`Total:${aa} cookies`;
      }
    }

  }
};
let LimaCity={
  cityName: 'Lima',
  minimumCustomers: 2,
  maximumCustemers: 16,
  avgCookiePerCustomer: 4.6,
  render: function(){
    let heading=document.createElement('h2');
    heading.textContent=this.cityName;
    citySales.appendChild(heading);
    let unorderedList=document.createElement('ul');
    citySales.appendChild(unorderedList);
    let aa=0;
    for(let a=6; a<21; a++ ){
      let randmCustomer=Math.floor(Math.random() * this.maximumCustemers) + this.minimumCustomers;
      let randmCustomerPurshase=randmCustomer*this.avgCookiePerCustomer;
      randmCustomerPurshase.toFixed(0);
      if(a<12){
        let hour=document.createElement('li');
        unorderedList.appendChild(hour);
        hour.textContent=`${a}am:${randmCustomer} cookies`;
        aa=aa+randmCustomer;
      }else if(a===12){
        let hour=document.createElement('li');
        unorderedList.appendChild(hour);
        hour.textContent=`${a}pm:${randmCustomer} cookies`;
      }else if(a>12 && a<20){
        let hour=document.createElement('li');
        unorderedList.appendChild(hour);
        hour.textContent=`${a-12}pm:${randmCustomer} cookies`;
      }else if(a===20){
        let totalSales=document.createElement('li');
        unorderedList.appendChild(totalSales);
        totalSales.textContent=`Total:${aa} cookies`;
      }
    }

  }
};

SeatleCity.render();
TokyoCity.render();
DubaiCity.render();
ParisCity.render();
LimaCity.render();
