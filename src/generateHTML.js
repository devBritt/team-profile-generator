module.exports = employees => {
    // TODO: write a function to generate an employee card
    const generateEmployeeCard = employee => {

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
            <main class='container my-5'>

            </main>
        </body>
        </html>
        `;        
    };
};
