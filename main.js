function fetch12Employees(url) {
    fetch(url)
        .then(data => data.json())
        .then(data => console.log(data))
        .catch(err => console.error(`We're sorry, there was an error fetching your data: ${err.name}`));
}

fetch12Employees('https://randomuser.me/api/?results=12&nat=GB,US,AU,FR,CA')