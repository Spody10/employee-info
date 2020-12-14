const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');

function GenerateHTML (data) {
    // stores employees indiv data
    let htmlString = [];
    for(let i = 0; i < data.storage.length; i++) {
        let employeeType = ""
        const employeeRole = data.storage[i].role;
        if(employeeRole === 'Engineer') {
            employeeType = new Engineer (data.storage[i]);
        } else if (employeeRole === 'Manager') {
            employeeType = new Manager (data.storage[i]);
        } else {
            employeeType = new Intern (data.storage[i]);
        }
        // applies HTML to employees 
        if(employeeType.role === 'Manager') {
            htmlString[i] = `
            <div class="card text-light bg-primary m-3" style="width: 18rem; height: 14rem;">
                <h2 class="card-header">${employeeType.name}</h2>
                <div class="card-body">
                    <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i> ${employeeType.role}</h3>
                    <p class="card-text">ID:${employeeType.id}</p>
                    <p class="card-text"><a href="mailto:${employeeType.email}">Email: ${employeeType.email}</a></p>
                    <p class="card-text">Office number: ${employeeType.officeNumber}</p>
                </div>
            </div>`;
        } else if (employeeType.role === 'Intern') {
            htmlString[i] =`
            <div class="card text-light bg-primary m-3" style="width: 18rem; height: 14rem;">
                <h2 class="card-header">${employeeType.name}</h2>
                <div class="card-body">
                    <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i> ${employeeType.role}</h3>
                    <p class="card-text">ID: ${employeeType.id}</p>
                    <p class="card-text"><a href="mailto:${employeeType.email}">Email: ${employeeType.email}</a></p>
                    <p class="card-text">School: ${employeeType.school}</p>
                </div>
            </div>`;
        } else {
            htmlString[i] = `
            <div class="card text-light bg-primary m-3" style="width: 18rem; height: 14rem;">
                <h2 class="card-header">${employeeType.name}</h2>
                <div class="card-body">
                    <h3 class="card-title"><i class="fas fa-glasses mr-2"></i> ${employeeType.role}</h3>
                    <p class="card-text">ID: ${employeeType.id}</p>
                    <p class="card-text"><a href="mailto:${employeeType.email}">Email: ${employeeType.email}</a></p>
                    <p class="card-text"><a href="${employeeType.github}" target="_blank">Github: ${employeeType.github}</a></p>
                </div>
            </div>`;
        };
    };
    // sending the WriteFile function
    return `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Employee Card Generator</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
            <link href="./style.css" rel="stylesheet">
        </head>
        <body>
            <header class="bg-danger d-flex justify-content-center align-items-center flex-wrap">
                <h1 class="text-white">My Team</h1>
            </header>
            <section class="d-flex justify-content-center align-items-start flex-wrap">
                ${htmlString.join('')}
            </section>
        </body>
    </html>`;
 };


module.exports = GenerateHTML;