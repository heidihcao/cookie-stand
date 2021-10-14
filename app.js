/* eslint-disable no-unused-vars */
'use strict';

// object for my Seattle Store
const seattleStore = document.getElementById('seattleList');
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
console.log(seattleStore);

//  min 6
// max 15
// 10 possible values that are between 6 and 15
// 15 - 6 = 9 + 10
// math.random() will give us a number between 1 & 10
// ex.: 2
// 2 + 6 = 8
// 1, 2, 3 ,4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// let's say we have a random number of 2.34
// Math.floor() = 2
// Math.ceil() = 3

let seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  cookiesSoldEachHourArray: [],
  // between min and max * avg
  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
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
    }
    // render the LIs inside our UL
  }
};

seattle.renderTheList();


const tokyoStore = document.getElementById('tokyoList');

let tokyo = {
  name:'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  cookiesSoldEachHourArray:[],
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
    }
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
    }
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
    }
  }
};
paris.renderTheList();
