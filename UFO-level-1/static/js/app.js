// from data.js
var tableData = data;

// Create handlers
var selTable = d3.select("tbody");
var input = d3.select(".form-control");
var form = d3.select("#form")

// Create event handlers
input.on("change", handleChange);
form.on("submit", handleChange);

// Create a function that renders HTML table from an input table
function renderTable(results) {
    // Clean table from previous results
    selTable.selectAll("tr").remove();
    
    // Return values from data array
    var resultsValues = results.map(function(result) {
        return Object.values(result)
    })

    // Append values to table
    resultsValues.forEach(result => {
        var tableRow = selTable.append("tr");
        result.forEach(d => {
            tableRow.append("td").text(d);
        })
    })
}

// Function to handle input change, filtering data and feed a new results table
function handleChange() {
    // Prevent the page from refreshing (when hitting enter key --> otherwise needs a server connection)
    d3.event.preventDefault();

    // Save input datetime in format tag in a new variable
    var inputDate = d3.select("#datetime").property("value");

    // Filter data to match date input. Returns a new filtered array
    var resultsArray = tableData.filter(row => row.datetime === inputDate);
    
    // Call renderTable function with new results array
    renderTable(resultsArray);
}

renderTable(tableData)


// Old function; new script creates two functions for readability and fixes bugs

// Function to handle input change, filtering data and rendering results

// function handleChange() {

//     //var inputDate = d3.event.target.value
//     var inputDate = d3.select("#datetime").property("value")
//     var formatDate = new Date(inputDate)

//     // Prevent the page from refreshing
//     d3.event.preventDefault();

//     // Clean table from previous results
//     selTable.selectAll("tr").remove()
    
//     // Loop through data and filter based on date
//     var results = [];
//     tableData.forEach(entry => {
//         var entryDate = new Date(entry.datetime);

//         if (entryDate.getTime() == formatDate.getTime()) {
//             results.push(entry);
//         }
//     })

//     // Return values from Results array
//     var resultsValues = results.map(function(result) {
//         return Object.values(result)
//     })
//     console.log(resultsValues);
    
//     // Append values to table
//     resultsValues.forEach(result => {
//         var tableRow = selTable.append("tr");
//         result.forEach(d => {
//             tableRow.append("td").text(d);
//         })
//     })
// }