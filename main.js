// URL that calls the random user api and fetches 12 random employees from US, UK, Australia, France, and Canada
const twelveEmployeesURL = 'https://randomuser.me/api/?results=12&nat=GB,US,AU,FR,CA';

//Employee grid section (for inserting employee data)
const employeeGrid = document.getElementById('employee-grid');

// Function that fetches employees, url must point to randomuser API

function fetchEmployees(url) {
    fetch(url)
        .then(data => data.json())
        .then(data => console.log(data))
        .catch(err => console.error(`We're sorry, there was an error fetching your data: ${err.name}`));
}

fetchEmployees('https://randomuser.me/api/?results=12&nat=GB,US,AU,FR,CA');

// Function that generates employee card

function generateEmployeeCards (data) {
    
}