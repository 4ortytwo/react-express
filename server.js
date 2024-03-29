const express = require('express');

const app = express();


app.get('/api/customers', (req, res) => {
    const customers = [{
        id: 1,
        firstName: 'Max',
        lastName: 'Kroeger'
    }, {
        id: 2,
        firstName: 'Kate',
        lastName: 'Wilson'
    }, {
        id: 3,
        firstName: 'Abel',
        lastName: 'Johnson'
    }];

    res.json(customers);
})

const port = 5000;

app.listen(port, () => console.log(`server started on port ${port}`));