const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    //res.send('Testing')
    next() //ALWAYS close a middleware by sending a message or go to the next middleware
}

module.exports = logger;