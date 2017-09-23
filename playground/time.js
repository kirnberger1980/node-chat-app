// Jan 1st 1970 00:00:00 am
var moment = require('moment');

// var date = moment();
// date.add(100,'years').subtract(9,'months');
// console.log(date.format('MMM Do, YYYY'));

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('H:mm a'));
date.subtract(8,'hours');
console.log(date.format('H:mm a'));
// var date = new Date();
// console.log(date.getMonth());
