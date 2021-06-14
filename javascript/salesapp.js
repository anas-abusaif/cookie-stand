'use strict';

const hours = ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

let citySales=document.getElementById('dailySales');

let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  agvCookie: 6.3,
  cookiesPerHour: [],
  total: 0,
  getCustomer: function() {
    for(let i = 0; i < hours.length; i++) {

      let cookies = Math.ceil(getRandomCustomer(this.minCust, this.maxCust) * this.agvCookie);

      this.cookiesPerHour.push(cookies);

      this.total += cookies;
      // this.total = this.total + cookies;
    }

  },
  render: function() {
    let h2 = document.createElement('h2');
    citySales.appendChild(h2);
    h2.textContent = this.name;

    let ul = document.createElement('ul');
    citySales.appendChild(ul);

    for(let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      ul.appendChild(li);
      li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
    }

    let total = document.createElement('li');
    ul.appendChild(total);
    total.textContent = `Total: ${this.total} cookies`;
  }
};
seattle.getCustomer();
seattle.render();

let tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  agvCookie: 1.2,
  cookiesPerHour: [],
  total: 0,
  getCustomer: function() {
    for(let i = 0; i < hours.length; i++) {

      let cookies = Math.ceil(getRandomCustomer(this.minCust, this.maxCust) * this.agvCookie);

      this.cookiesPerHour.push(cookies);

      this.total += cookies;
      // this.total = this.total + cookies;
    }
  },
  render: function() {
    let h2 = document.createElement('h2');
    citySales.appendChild(h2);
    h2.textContent = this.name;

    let ul = document.createElement('ul');
    citySales.appendChild(ul);

    for(let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      ul.appendChild(li);
      li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
    }

    let total = document.createElement('li');
    ul.appendChild(total);
    total.textContent = `Total: ${this.total} cookies`;
  }
};
tokyo.getCustomer();
tokyo.render();

let dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  agvCookie: 3.7,
  cookiesPerHour: [],
  total: 0,
  getCustomer: function() {
    for(let i = 0; i < hours.length; i++) {

      let cookies = Math.ceil(getRandomCustomer(this.minCust, this.maxCust) * this.agvCookie);

      this.cookiesPerHour.push(cookies);

      this.total += cookies;
      // this.total = this.total + cookies;
    }
  },
  render: function() {
    let h2 = document.createElement('h2');
    citySales.appendChild(h2);
    h2.textContent = this.name;

    let ul = document.createElement('ul');
    citySales.appendChild(ul);

    for(let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      ul.appendChild(li);
      li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
    }

    let total = document.createElement('li');
    ul.appendChild(total);
    total.textContent = `Total: ${this.total} cookies`;
  }
};
dubai.getCustomer();
dubai.render();

let paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  agvCookie: 2.3,
  cookiesPerHour: [],
  total: 0,
  getCustomer: function() {
    for(let i = 0; i < hours.length; i++) {

      let cookies = Math.ceil(getRandomCustomer(this.minCust, this.maxCust) * this.agvCookie);

      this.cookiesPerHour.push(cookies);

      this.total += cookies;
      // this.total = this.total + cookies;
    }
  },
  render: function() {
    let h2 = document.createElement('h2');
    citySales.appendChild(h2);
    h2.textContent = this.name;

    let ul = document.createElement('ul');
    citySales.appendChild(ul);

    for(let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      ul.appendChild(li);
      li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
    }

    let total = document.createElement('li');
    ul.appendChild(total);
    total.textContent = `Total: ${this.total} cookies`;
  }
};
paris.getCustomer();
paris.render();

let lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  agvCookie: 4.6,
  cookiesPerHour: [],
  total: 0,
  getCustomer: function() {
    for(let i = 0; i < hours.length; i++) {

      let cookies = Math.ceil(getRandomCustomer(this.minCust, this.maxCust) * this.agvCookie);

      this.cookiesPerHour.push(cookies);

      this.total += cookies;
      // this.total = this.total + cookies;
    }
  },
  render: function() {
    let h2 = document.createElement('h2');
    citySales.appendChild(h2);
    h2.textContent = this.name;

    let ul = document.createElement('ul');
    citySales.appendChild(ul);

    for(let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      ul.appendChild(li);
      li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
    }

    let total = document.createElement('li');
    ul.appendChild(total);
    total.textContent = `Total: ${this.total} cookies`;
  }
};
lima.getCustomer();
lima.render();


// Helper function
function getRandomCustomer(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

