/* eslint-disable no-unused-vars */
'use strict';

// object for my Seattle Store
const seattleStore = document.getElementById('seattleList');
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
//console.log(seattleStore);

// const salesTable = document.querySelector('tbody');
// const salesTHead = document.querySelector('thead');
// const salesTFoot = document.querySelector('tfoot');


let seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  cookiesSoldEachHourArray: [],
  seattleTotal: 0,
  // between min and max * avg
  getRandomCustomers: function () {
    //return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    return Math.floor(this.max - Math.random() * (this.max - this.min + 1));
  },

  getCookieSalesPerHour: function () {

    // write a for loop that uses the length of the hours away in that loop
    for (let i = 0; i < hours.length; i++) {

      // Get the number of customers this hour
      let customersThisHour = this.getRandomCustomers();

      // calculate the cookies sold for all 14 hours
      let totalCookiesSoldThisHour = Math.ceil(customersThisHour * this.avg);

      // that value of total cookies sold that hour on to our array
      this.cookiesSoldEachHourArray.push(totalCookiesSoldThisHour);
    }
    console.log(this.cookiesSoldEachHourArray);
  },

  renderTheList: function () {
    this.getCookieSalesPerHour();
    // code that will render the lists to the page
    let p = document.createElement('p');
    p.textContent = this.name;
    seattleStore.appendChild(p);

    for (let i = 0; i < this.cookiesSoldEachHourArray.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]} cookies`;
      seattleStore.appendChild(li);

      this.seattleTotal += this.cookiesSoldEachHourArray[i];
    }
    // render the LIs inside our UL
    let li = document.createElement('li');
    li.textContent = `Total: ${this.seattleTotal} cookies`;
    seattleStore.appendChild(li);
    // let li2 = document.createElement('li');
    // li2.textContent = `hello`;
    //seattleStore.appendChild(li2);
  }
};

seattle.renderTheList();

// Sales.prototype.renderTable = function(){
//   let tr = document.createElement('tr');
//   salesTableBody.appendChild(tr);
//   let td = document.createElement('td');
//   td.textContent= this.name;
//   tr.appendChild(td);
//   for (let i= 0; i<this.cookiesSoldEachHourArray.length;i++){
//     let tdSales = document.createElement('td');
//     tdSales.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]} cookies`;
//     tr.appendChild(tdSales);
//   }
// };

// seattle.renderTable();
// replace above line with Array[i]. render() and .renderTable();

const tokyoStore = document.getElementById('tokyoList');
let tokyo = {
  name:'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  cookiesSoldEachHourArray:[],
  tokyoTotal:0,
  getRandomCustomers:function(){
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  getCookieSalesPerHour:function(){
    for (let i = 0; i < hours.length; i++) {
      let customersThisHour = this.getRandomCustomers();
      let totalCookiesSoldThisHour = Math.ceil(customersThisHour * this.avg);
      this.cookiesSoldEachHourArray.push(totalCookiesSoldThisHour);
    }
    console.log(this.cookiesSoldEachHourArray);
  },

  renderTheList:function(){
    this.getCookieSalesPerHour();
    let p=document.createElement('p');
    p.textContent=this.name;
    tokyoStore.appendChild(p);

    for (let i= 0; i<this.cookiesSoldEachHourArray.length;i++){
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]} cookies`;
      tokyoStore.appendChild(li);
      this.tokyoTotal += this.cookiesSoldEachHourArray[i];
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.tokyoTotal} cookies`;
    tokyoStore.appendChild(li);
  }
};
tokyo.renderTheList();


const dubaiStore = document.getElementById('dubaiList');
let dubai = {
  name:'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  cookiesSoldEachHourArray:[],
  dubaiTotal:0,
  getRandomCustomers:function(){
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  getCookieSalesPerHour:function(){
    for (let i = 0; i < hours.length; i++) {
      let customersThisHour = this.getRandomCustomers();
      let totalCookiesSoldThisHour = Math.ceil(customersThisHour * this.avg);
      this.cookiesSoldEachHourArray.push(totalCookiesSoldThisHour);
    }
    console.log(this.cookiesSoldEachHourArray);
  },

  renderTheList:function(){
    this.getCookieSalesPerHour();
    let p=document.createElement('p');
    p.textContent=this.name;
    dubaiStore.appendChild(p);

    for (let i= 0; i<this.cookiesSoldEachHourArray.length;i++){
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]} cookies`;
      dubaiStore.appendChild(li);
      this.dubaiTotal += this.cookiesSoldEachHourArray[i];
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dubaiTotal} cookies`;
    dubaiStore.appendChild(li);
  }
};
dubai.renderTheList();


const parisStore = document.getElementById('parisList');
let paris = {
  name:'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
  cookiesSoldEachHourArray:[],
  parisTotal:0,
  getRandomCustomers:function(){
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  getCookieSalesPerHour:function(){
    for (let i = 0; i < hours.length; i++) {
      let customersThisHour = this.getRandomCustomers();
      let totalCookiesSoldThisHour = Math.ceil(customersThisHour * this.avg);
      this.cookiesSoldEachHourArray.push(totalCookiesSoldThisHour);
    }
    console.log(this.cookiesSoldEachHourArray);
  },

  renderTheList:function(){
    this.getCookieSalesPerHour();
    let p=document.createElement('p');
    p.textContent=this.name;
    parisStore.appendChild(p);

    for (let i= 0; i<this.cookiesSoldEachHourArray.length;i++){
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]} cookies`;
      parisStore.appendChild(li);
      this.parisTotal += this.cookiesSoldEachHourArray[i];
    }

    let li = document.createElement('li');
    li.textContent = `Total: ${this.parisTotal} cookies`;
    parisStore.appendChild(li);
  }
};
paris.renderTheList();

const limaStore = document.getElementById('limaList');
let lima = {
  name:'Lima',
  min: 2,
  max: 16,
  avg: 4.6,
  cookiesSoldEachHourArray:[],
  limaTotal:0,
  getRandomCustomers:function(){
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  getCookieSalesPerHour:function(){
    for (let i = 0; i < hours.length; i++) {
      let customersThisHour = this.getRandomCustomers();
      let totalCookiesSoldThisHour = Math.ceil(customersThisHour * this.avg);
      this.cookiesSoldEachHourArray.push(totalCookiesSoldThisHour);
    }
    console.log(this.cookiesSoldEachHourArray);
  },

  renderTheList:function(){
    this.getCookieSalesPerHour();
    let p=document.createElement('p');
    p.textContent=this.name;
    limaStore.appendChild(p);

    for (let i= 0; i<this.cookiesSoldEachHourArray.length;i++){
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]} cookies`;
      limaStore.appendChild(li);
      this.limaTotal += this.cookiesSoldEachHourArray[i];
    }
    
    let li = document.createElement('li');
    li.textContent = `Total: ${this.limaTotal} cookies`;
    limaStore.appendChild(li);
  }
};
lima.renderTheList();
