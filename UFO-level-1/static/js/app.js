// from data.js
var tableData = data;


// Create handlers
var selTable = d3.select("tbody");
var button = d3.select("#filter-btn");
var input = d3.select(".form-control");

// Function to handle input change, filtering data and rendering results
function handleChange (event) {
    var inputDate = d3.event.target.value
    var formatDate = new Date(inputDate)

    // Clean table from previous results
    selTable.selectAll("tr").remove()
    
    // Loop through data and filter based on date
    var results = [];
    tableData.forEach(entry => {
        var entryDate = new Date(entry.datetime);

        if (entryDate.getTime() == formatDate.getTime()) {
            results.push(entry);
        }
    })

    // Return values from Results array
    var resultsValues = results.map(function(result) {
        return Object.values(result)
    })
    console.log(resultsValues);
    
    // Append values to table
    resultsValues.forEach(result => {
        var tableRow = selTable.append("tr");
        result.forEach(d => {
            tableRow.append("td").text(d);
        })
    })
}

input.on("change", handleChange);



//Select first two elements
// var obsArray = [];
// for (i = 0; i < 3; i++) {
//     obsArray.push(Object.values(tableData[i]));
// }
// console.log(obsArray);

// var newArray = [];
// for (i = 0; i < 3; i++) {
//     newArray.push(tableData[i]);
// }

// var selTable = d3.select("tbody");
//  obsArray.forEach(entry => {
//     var tableRow = selTable.append("tr");
//     entry.forEach(d => {
//          tableRow.append("td").text(d);
//      })
//  })
