var tabella = document.getElementById('tabella');

window.addEventListener('DOMContentLoaded', init);

var elenco = [];

function init() {
    printData();
}

function printData() {
    fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
        return response.json();
    }).then((data) => {
        elenco = data;
        if (elenco.length > 0) {
            elenco.map(function (element) {
                tabella.innerHTML += `<tr><td>${element.id}</td><td>${element.name}</td><td>${element.username}</td><td>${element.email}</td><td>${element.phone}</td><td>${element.website}</td></tr>`
                console.log(elenco);
            });
        }
    });
}

