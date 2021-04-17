const http = require('http')
const {readFileSync} = require('fs')

// Get all files
const homePage = readFileSync('./index.html')

const server = http.createServer((req, res) => { //This callback is invoked everytime the user hits our server
    //console.log('User hit the server');
    
    const url = req.url;

    //Home Page
    if(url === '/'){
        res.writeHead(200, { 'content-type': 'text/html' }) //For more content types search MIME type mdn
        res.write(homePage)
        res.end() //In every response qhe should have a response end
    }
    //About Page
    else if(url === '/about'){
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1>About Page</h1>')
        res.end()
    }
    // 404
    else{
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write('<h1>Page not found</h1>')
        res.end()
    }

   
})

server.listen(5000) //In development whe use arbitrary port numbers but in production there are specific numbers like 443 for https