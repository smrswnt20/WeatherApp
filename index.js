const http = require('http');
const fs = require("fs");
var request = require("requests");

const replaceVal = (tempVal,orgVal) => {
    let temperature= tempVal.replace("{%tempval%}",orgVal.main.temp);
}

const homeFile = fs.readFileSync("home.html", "utf-8");

const server =http.createServer((req,res) => {
    if (req.url == "/") {
        requests("http://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=eed390a5c5768b10802ef8fca4de8e3b"); //api from openweather.com with my personal key
        .on("data", (chunk) =>{
            const objdata = JSON.parse(chunk);
            const arrData = [objdata];
            const realTimeData = arrData.map((val) => {
                replaceVal(homeFile, val);
            });
        })
        .on("end", (err) => {
        if (err) return console.log("connection closed due to errors",err);

        console.log("end");
        });

    }
}
server.listen(8000,"127.0.0.1");
