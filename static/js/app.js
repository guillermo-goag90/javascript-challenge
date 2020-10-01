// from data.js
var tableData = data;

// YOUR CODE HERE!

// Select first two elements
var obsArray = [];
for (i = 0; i < 3; i++) {
    obsArray.push(Object.values(tableData[i]));
}

console.log(obsArray);
//console.log(typeof obsArray);

var selTable = d3.select("tbody");

 obsArray.forEach(entry => {
    var tableRow = selTable.append("tr");
    entry.forEach(d => {
         tableRow.append("td").text(d);
     })
 })
    
// jalar toda la data
var drill = tableData.filter(entry => entry.datetime < "1/10/2010");
//console.log(drill)

var newArray = [];
for (i = 0; i < 3; i++) {
    newArray.push(tableData[i]);
}

// Create handlers
var selTable = d3.select("tbody");
var button = d3.select("#filter-btn");
var input = d3.select(".form-control");

//input.on("change", FUNCTION)


//var results = [];
function handleChange (event) {
    var inputDate = d3.event.target.value
    var formatDate = new Date(inputDate)
    
    console.log(inputDate)
    console.log(formatDate)
    
    // Loop through data and filter based on date
    var results = [];
    tableData.forEach(entry => {
        var entryDate = new Date(entry.datetime);

        if (entryDate <= formatDate) {
            results.push(entry);
        }
    })
    
    //
    results.forEach(result => {
        var tableRow = selTable.append("tr");
        results.forEach(d => {
            tableRow.append("td").text(d);
        })
    })
}

input.on("change", handleChange);

//console.log(results.length)

// input.on("change", () => {
//     var drill = d3.event.target.value;
//     console.log(drill);
// })


var endDate = new Date("01/04/2010");

// Convert string to date
function strToDate (str) {
    var newDate = new Date(string);
    return newDate;
}

// tableData.forEach(entry => {
//     var entryDate = new Date(entry.datetime);
    
//     if (entryDate <= formatDate) {
//         results.push(entry);
//     }
// })