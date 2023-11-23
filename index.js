const express = require('express');
const port = process.env.PORT || 3000;
const App = express();
const router = require('./Router/Routes')
App.use(express.json());

App.use('/user', router)



App.listen(port, ()=> {
    console.log(`The server on running on //https:localhost${port}`)
})