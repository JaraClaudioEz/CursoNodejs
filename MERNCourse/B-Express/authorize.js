const authorize = (req, res, next) => {
    const { user } = req.query; 
    if (user === 'eze') {
        req.user = { name: 'eze', id: 3 } //Here we are attaching a new parameter to the request
        next()
    }
    else {
        res.status(401).send('Unauthorized')
    }
}

module.exports = authorize;
//This is not how we authorize users in our express application, is only a example!!!