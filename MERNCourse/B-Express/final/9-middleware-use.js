const express = require('express');
const app = express();
const logger = require('./logger')
const authorize = require('./authorize')

// req => middleware => res

//app.use(logger) //app.use invokes the middleware for any route, must be before the get methods
//app.use('/api', logger)
// api/home/about/products Middlewares are executed when the base of the request matches
app.use([logger, authorize]) //To add more than one middleware, the order in execution will be the same order in the array

app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/api/products', (req, res) => {
    res.send('Products')
})

app.get('/api/items', (req, res) => {
    console.log(req.user); //To see the new parameter attached in the middleware
    res.send('Items')
})
