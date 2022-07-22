module.exports = employees => {
    // TODO: write a function to pick an icon
    const getIconName = role => {
        switch (role) {
            case 'Manager':
                return `briefcase`;
            case 'Intern':
                return `book-open`;
            case 'Engineer':
                return `terminal`
        };
    };

    // TODO: write a function to generate a span with role-specific data
    const generateDetailRow = employee => {
        switch(employee.getRole()) {
            case 'Manager':
                return `
                    <p>Office: #${employee.getOfficeNumber()}</p>
                `;
            case 'Intern':
                return `
                    <p>School: ${employee.getSchool()}</p>
                `;
            case 'Engineer':
                return `
                    <p>GitHub: ${employee.getGithub()}</p>
                `;
        };
    };
    
    // TODO: write a function to generate an employee card
    const generateEmployeeCard = employee => {

        return `
            <article class='col-12 col-md-6 col-lg-4'>
                <div class='card'>
                    <div class='card-header'>
                        <h2>${employee.getName()}</h2>
                        <h3>${employee.getRole()}</h3>
                    </div>
                    <div class='card-body card-divider'>
                        <!-- employee role icon -->
                        <span class='card-icon'><i data-feather="${getIconName(employee.getRole())}" class='icon'></i></span>
                        <!-- employee id row -->
                        <span class='employee-details flex-row'>
                            <i data-feather="credit-card" class='icon'></i>
                            <p>${employee.getId()}</p>
                        </span>
                        <!-- employee email row -->
                        <span class='employee-details flex-row'>
                            <i data-feather="at-sign" class='icon'></i>
                            <p>${employee.getEmail()}</p>
                        </span>
                        <!-- role-specific details row -->
                        <span class='employee-details flex-row'>
                            ${generateDetailRow(employee)}
                        </span>
                    </div>
                </div>
            </article>
        `;
    };

    // TODO: write a function to generate html
    const generateHTML = employees => {
        return `
        <!DOCTYPE html>
        <html lang='en'>
        <head>
            <meta charset='UTF-8'>
            <meta name='viewport' content='width=device-width, initial-scale=1.0'>
            <meta http-equiv='X-UA-Compatible' content='ie=edge'>
            <title>My Team</title>
            <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/simple-icons/7.4.0/simpleicons.svg'>
            <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;500;700&display=swap" rel="stylesheet">
            <link rel='stylesheet' href='./style.css'>
        </head>

        <body>
            <header>
                <div class='container flex-row justify-space-between align-center py-3'>
                    <h1 class='page-title text-secondary bg-dark py-2 px-3'>My Team</h1>
                </div>
            </header
            <main class='m-5'>
                <section class='container flex-row space-between align-center'>
                    ${employees.foreach(item, generateEmployeeCard(item))}
                </section>
            </main>
            <script src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js"></script>
        </body>
        </html>
        `;        
    };
};
