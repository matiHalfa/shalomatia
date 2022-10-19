var http = require('http');
var fs = require('fs');

const path = require('path');
const express = require('express');
const port = process.env.PORT || 8080;

const baseDir = path.dirname(__dirname);
const viewsFolder = path.join(baseDir, 'views');
const jsFolder = path.join(baseDir, 'js');
const cssFolder = path.join(baseDir, 'css');
const dataFolder = path.join(baseDir, 'data');

// const logger = require(path.join(jsFolder, 'myfuncs'));


//JSON//////////////////////////////////////////////////////////////////////
var jsonDataPath = path.join(dataFolder, 'data.json');

let rawdata = fs.readFileSync(jsonDataPath);
let appointmentOptions = JSON.parse(rawdata);
// let dates = GetDatesFromJson();

//  let daysDict = CreateDictionary();
//JSON//////////////////////////////////////////////////////////////////////

var app = express();

app.use(express.static(viewsFolder));
app.use(express.static(jsFolder));
app.use(express.static(cssFolder));
app.use(express.static(dataFolder));

app.listen(port);


app.get('/', function (req, res) {
    res.redirect('/Home');
})

app.post('/', function (req, res) {
    console.log("\nPOST was!\n");
    
    var indexOfData = (req.rawHeaders.findIndex('dates') + 1);

    switch (req.rawHeaders[indexOfData -1]) {
        case 'dates':
            res.setHeader('dataBack',GetDatesFromJson());
            break;
        case 'hours':
            console.log(req.rawHeaders[indexOfData]);
            var result = GetHoursofDate(req.rawHeaders[indexOfData])
            console.log(result);
            res.setHeader('dataBack',result);
                break;
        default:
            break;
    }

    res.end('dataBack Sent');
})

app.post('/data', function (req, res) {
    console.log("\nPOST dates was!\n");
    
    const dataString = (element) => element=="GetAppointmentData";
    var indexOfData = req.rawHeaders.findIndex(dataString);
    console.log(req.rawHeaders[indexOfData+1]);
    switch (req.rawHeaders[indexOfData+1]) {
        case 'dates':
            res.setHeader('dataBack',GetDatesFromJson());
            break;
            default:
            var result = GetHoursofDate(req.rawHeaders[indexOfData+1])
            console.log(result);
            res.setHeader('dataBack',result);
                break;
    }

    res.end('dataBack,Sent');
})


app.get('/Home', function (req, res) {
    console.log("GET Home");

    // print the hours and the dates
    GetDatesFromJson().forEach(element => {
        console.log(GetHoursofDate(element));
        console.log(element);
    });
    
    // res.json({ text: 'Lorem Ipsum' });
    res.sendFile(path.join(viewsFolder, 'Home.html'));
})

//JSON//////////////////////////////////////////////////////////////////////

function GetDatesFromJson() {
    const datesarray = [];
    let i = 0;
    appointmentOptions.forEach(element => {
        datesarray[i] = element['Date'];
        i = i + 1;
    });
    return datesarray;
};

function GetHoursofDate(selectedDate) {
    var hours = [];
    console.log("hours = ");
    hours.forEach(h => {
        console.log(h);
    });
    
    appointmentOptions.forEach(element => {
        if (element['Date'] == selectedDate) 
        { 
            element['Hours'].forEach(hour => {
                if(hour['status']=="free")
                hours.push(hour['Hour']);
            });
            // hours = element['Hours']; 
        }
    });
    return hours;
};

function WriteToJson(appointmentOption)
{

}

// function CreateDictionary()
// {
//     var dict = {};
//     dates.forEach(date => {
//         dict[date]=GetHoursofDate(date);
//     });
//     return dict;
// }

//JSON//////////////////////////////////////////////////////////////////////
