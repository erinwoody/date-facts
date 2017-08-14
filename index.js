var moment = require('moment');
const chalk = require('chalk');

let now = new moment();
console.log("It is " + chalk.blue.bold(moment().format("dddd, MMMM Do YYYY, h:mm:ss a")) + ".");

console.log("It is the " + chalk.magenta.bold(now.dayOfYear() + "th") + " day of the year.");

console.log("It is " + chalk.green.bold(now.second() + (now.minute() * 60) + (now.hour() * 360)), "seconds into the day.");

if (now.isDST() === true) {
    console.log("It" + chalk.hex('#5A6C40').bold(" is ") + ("Daylight Savings Time."))
}

if (now.isLeapYear() === false) {
    console.log("It" + chalk.hex('#AB4245').bold(" is not ") + ("a Leap Year."))
}
