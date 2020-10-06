// from data.js
var tableData = data;

// Create handlers

// var button = d3.select("#filter-btn");
// var input = d3.select(".form-control");

// // Function to handle input change, filtering data and rendering results
// function handleChange (event) {
//     var inputDate = d3.event.target.value
//     var formatDate = new Date(inputDate)

//     // Clean table from previous results
//     selTable.selectAll("tr").remove()
    
//     // Loop through data and filter based on date
//     var results = [];
//     tableData.forEach(entry => {
//         var entryDate = new Date(entry.datetime);

//         if (entryDate <= formatDate) {
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

// input.on("change", handleChange);

//tableData.forEach(row => console.log(row))

var cajon = tableData.filter(row => row.city == "el cajon");

//console.log(cajon)

var citySelect = d3.select("#city-str");
var dateSelect = d3.select("#datetime");
var selTable = d3.select("tbody");

function renderTable (filteredData) {
    // Clean table from previous results
    selTable.selectAll("tr").remove();

    // Render table
    filteredData.forEach(result => {
        var tableRow = selTable.append("tr");
        Object.values(result).forEach(d => {
            tableRow.append("td").text(d);
        })
    })
}

renderTable(cajon)
var filters = {
    city: "el cajon",
    state: "ca"
};

console.log(filters)
//Object.values(filters).forEach(value => console.log(value));

function filterData () {
    // Clean filteredData table from previous filters (reboot) 
    //let filteredData = tableData;

    //
    Object.values(filters).forEach(value => {
        console.log(value)
        //var outputdData = filteredData.filter(value => value[i] == value)
    })
}

filterData(filters)