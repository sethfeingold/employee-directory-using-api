// URL that calls the random user api and fetches 12 random employees from US, UK, Australia, France, and Canada
const twelveEmployeesURL = 'https://randomuser.me/api/?results=12&nat=GB,US,AU,FR,CA';

// Employee grid section (for inserting employee data)
const employeeGrid = document.querySelector('#employee-grid');

// Variable to store info for all 12 employees

let employees = {};

// Function that fetches employees, url must point to randomuser API

function fetchEmployees(url) {
    return fetch(url)
        .then(data => data.json())
        .then(data => {
            employees = data.results; // stores employee data in 'employees' variable
            return data.results;
        })
        .then(data => generateEmployeeCards(data))
        .catch(err => console.error(`We're sorry, there was an error fetching your data: ${err.name}`));
}

fetchEmployees('https://randomuser.me/api/?results=12&nat=US');

// Function that generates employee card

function generateEmployeeCards (data) {
    data.forEach( person => employeeGrid.innerHTML += `
    <div class="employee-card">
        <div>
            <img class="employee-thumbnail" src="${person.picture.large}" alt="${person.name.first}'s profile picture">
        </div>
        <div>
            <h3 class="employee-name">${person.name.first} ${person.name.last}</h3>
            <p class="employee-email">${person.email}</p>
            <p class="employee-city">${person.location.city}</p>
        </div>
    </div>
    `);

    // Setting up event listener for each employee card

    document.querySelectorAll('.employee-card').forEach((card, index) => {
        card.addEventListener('click', () => {
          // code to call modal function will go here
          generateModal(employees[index]);
        });
    });
}

const generateModal = employee => {
    const modalContainer = document.querySelector('.modal-container');
    const dob = new Date(Date.parse(employee.dob.date)).toLocaleDateString(navigator.language); // Formats date depending on users locale.
    
    modalContainer.innerHTML = `
      <div class="modal">
        <div class="modal-info-container">
          <img class="modal-img" src="${employee.picture.large}" alt="${employee.name.first}'s profile picture">
          <h3 id="name" class="modal-name cap">${employee.name.first} ${employee.name.last}</h3>
          <p class="modal-text">${employee.email}</p>
          <p class="modal-text cap">${employee.location.city}</p><hr>
          <p class="modal-text">${employee.phone}</p>
          <p class="modal-text cap">${employee.location.street.number} ${employee.location.street.name}, ${employee.location.state} ${employee.location.postcode}</p>
          <p class="modal-text">Birthday: ${dob}</p>
        </div>
      </div>
    `
};