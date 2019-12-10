// URL that calls the random user api and fetches 12 random employees from US, UK, Australia, France, and Canada
const twelveEmployeesURL = 'https://randomuser.me/api/?results=12&nat=GB,US,AU,FR,CA';

//Employee grid section (for inserting employee data)
const employeeGrid = document.getElementById('employee-grid');

// Function that fetches employees, url must point to randomuser API

function fetchEmployees(url) {
    return fetch(url)
        .then(data => data.json())
        .then(data => generateEmployeeCards(data.results))
        .catch(err => console.error(`We're sorry, there was an error fetching your data: ${err.name}`));
}

fetchEmployees('https://randomuser.me/api/?results=12&nat=GB,US,AU,FR,CA');

// Function that generates employee card

function generateEmployeeCards (data) {
    console.log(data);

    data.forEach( person => console.log(person.name));

    data.forEach( person => employeeGrid.innerHTML += `
    <div class="employee-card">
        <div>
            <img class="employee-thumbnail" src="${person.picture.thumbnail}">
        </div>
        <div>
            <h3 class="employee-name">${person.name.first} ${person.name.last}</h3>
            <p class="employee-email">${person.email}</p>
            <p class="employee-city">${person.location.city}</p>
        </div>
    </div>
    `);
}