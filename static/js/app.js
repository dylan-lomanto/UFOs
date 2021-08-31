// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Populate table with data function
function buildTable(data) {
    //clear out existing data
    tbody.html("");

    //loop through each object in data and append row and cells for each value in row
    data.forEach((dataRow) => {
        //append row to the table body
        let row = tbody.append("tr");
       
        // Loop through each field in the dataRow and add each value to a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
  }
