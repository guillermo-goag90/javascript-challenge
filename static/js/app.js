// from data.js
var tableData = data;

// YOUR CODE HERE!
// var cities = [];

// function print(city) {
//     console.log(city);
// }



// tableData.forEach(function(element) {
//     cities.push(element.city)
// })

// cities.forEach(print)

// var ufoArray = Object.values(tableData);
// console.log(typeof ufoArray);
// console.log(ufoArray);
// console.log(tableData);

// Object.values(tableData).forEach(observation => {
//     console.log(observation.state)
// })

// Select first two elements
var obsArray = [];
for (i = 0; i < 3; i++) {
    obsArray.push(Object.values(tableData[i]));
}

console.log(obsArray);
console.log(typeof obsArray);

var selTable = d3.select("tbody");

 obsArray.forEach(entry => {
    var tableRow = selTable.append("tr");
    entry.forEach(d => {
         tableRow.append("td").text(d);
     })
 })
    
