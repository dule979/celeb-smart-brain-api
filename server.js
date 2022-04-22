const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('data flowing');
});

app.listen(3000, () => console.log('Server is running'));

/*

res = this is working
/signin --> POST = success/fail
/register --> POST = user
/profile/:userId --> GET = user
/image --> PUT = user

*/