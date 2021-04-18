const http = require('http');
const fs = require("fs");
var request = require("")

const homeFile = fs.readFileSync("home.html", "utf-8");

const server =http.createServer((req,res) => {
    if (req.url == "/") {
        requests("http://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=eed390a5c5768b10802ef8fca4de8e3b"); //api from openweather.com with my personal key
        .on("data", (chunk) =>{
            console.log(chunk);
        })
        .on("end", (err) => {
        if (err) return console.log("connection closed due to errors",err);

        console.log("end");
        });

    }
}
