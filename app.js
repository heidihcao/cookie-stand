/* eslint-disable no-unused-vars */
'use strict';

// object for my Seattle Store
const seattleStore = document.getElementById('seattleList');
let hours = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.','12 p.m.','1 p.m.','2 p.m.','3 p.m.','4 p.m.','5 p.m.','6 p.m.','7 p.m.'];

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
  getRandomCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },


  getCookieSalesPerHour: function() {
    
    // write a for loop that uses the length of the hours away in that loop
    for (let i=0; i<hours.length; i++){
       
    // Get the number of customers this hour
    let customersThisHour = this.getRandomCustomers();

    // calculate the cookies sold for all 14 hours
    let totalCookiesSoldThisHour = Math.ceil(customersThisHour * this.avg);
    
    // that value of total cookies sold that hour on to our array
    this.cookiesSoldEachHourArray.push(totalCookiesSoldThisHour);
    console.log(this.cookiesSoldEachHourArray);

  }

  renderTheList: function() {
    this.getCookieSalesPerHour();
    // code that will render the lists to the page
    // render the LIs inside our UL
  }
},

seattle.renderTheList(),