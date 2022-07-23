// get role-specific icon
const getRoleIcon = role => {
    switch(role) {
        case 'Manager':
            return `supervisor_account`;
        case 'Intern':
            return `engineering`;
        case 'Engineer':
            return `school`;
    };
};

// generate markup for role-specific data
const generateDetailRow = employee => {
    switch(employee.getRole()) {
        case 'Manager':
            return `<span class='material-icons md-20 md-bright md-margin-r'>meeting_room</span>
                            <p>${employee.getOfficeNumber()}</p>`;
        case 'Intern':
            return `<span class='material-icons md-20 md-bright md-margin-r'>local_library</span>
                            <p>${employee.getSchool()}</p>`;
        case 'Engineer':
            return `<span class='material-icons md-20 md-bright md-margin-r'>terminal</span>
                            <a>github.com/${employee.getGithub().toLowerCase()}</a>`;
    };
};

// generate markup for an employee card
const generateEmployeeCard = employee => {
    return `
            <article class='col-12 col-md-5 col-lg-3'>
                <div class='card'>
                    <div class='card-header flex-row'>
                        <div class='col-4 justify-flex-end'>
                            <span class='material-icons'>${getRoleIcon(employee.getRole())}</span>
                        </div>
                        <div class='col-8'>
                            <h2>${employee.getName()}</h2>
                            <h3>${employee.getRole()}</h3>
                        </div>
                    </div>
                    <div class='card-body flex-row'>
                        <!-- employee id row -->
                        <div class='employee-details flex-row align-center'>
                            <span class='material-icons md-20 md-bright md-margin-r'>badge</span>
                            <p>${employee.getId()}</p>
                        </div>
                        <!-- employee email row -->
                        <div class='employee-details flex-row align-center'>
                            <span class='material-icons md-20 md-bright md-margin-r'>email</span>
                            <a href='mailto:'${employee.getEmail()}'>${employee.getEmail()}</a>
                        </div>
                        <!-- role-specific details row -->
                        <div class='employee-details flex-row align-center'>
                            ${generateDetailRow(employee)}
                        </div>
                    </div>
                </div>
            </article>`;
};

// generate full page markup
const generateHTML = employees => {
    return `
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <meta http-equiv='X-UA-Compatible' content='ie=edge'>
    <title>My Team</title>
    <!-- icons -->
    <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
    <!-- Oswald font -->
    <link href='https://fonts.googleapis.com/css2?family=Oswald:wght@300;500;700&display=swap' rel='stylesheet'>
    <link rel='stylesheet' href='./style.css'>
</head>

<body class='flex-row'>
    <header>
        <h1 class='page-title'>My Team</h1>
    </header>
    <main>
        <section class='flex-row justify-center'>${employees.map(item => generateEmployeeCard(item)).join('')}
        </section>
    </main>
</body>
</html>
    `;        
};
    
module.exports = generateHTML;
