import express from "express";
const app = express();
const PORT = 4000;

let date_time = new Date();
// console.log(date_time)
// get current date
// adjust 0 before single digit date
let date = ("0" + date_time.getDate()).slice(-2);

// get current month
let month = ("0" + (date_time.getMonth() + 1)).slice(-2);

// get current year
let year = date_time.getFullYear();

// get current hours
let hours = date_time.getHours();

// get current minutes
let minutes = date_time.getMinutes();

// get current seconds
let seconds = date_time.getSeconds();

// prints date in YYYY-MM-DD format
console.log(year + "-" + month + "-" + date);

// prints date & time in YYYY-MM-DD HH:MM:SS format
console.log(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);


app.get("/", function (request, response) {
    response.send(`Current Timestamp = "${year}-${month}-${date}"   ${hours}:${minutes}:${seconds}`)
});
app.listen(PORT, () => console.log("SERVER CONNECTED"));
