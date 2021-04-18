const http = require('http')
const {readFileSync} = require('fs')

// Get all files
const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

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
    //Styles
    else if(url === '/styles.css'){
        res.writeHead(200, { 'content-type': 'text/css' })
        res.write(homeStyles)
        res.end()
    }
    //Logo
    else if(url === '/logo.svg'){
        res.writeHead(200, { 'content-type': 'image/svg+xml' })
        res.write(homeImage)
        res.end()
    }
    //Logic
    else if(url === '/browser-app.js'){
        res.writeHead(200, { 'content-type': 'text/javascript' })
        res.write(homeLogic)
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