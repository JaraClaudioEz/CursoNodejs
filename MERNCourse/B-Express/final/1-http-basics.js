const http = require('http')

const server = http.createServer((req, res) => { //This callback is invoked everytime the user hits our server
  //console.log('User hit the server');
  // console.log(req.method)
  const url = req.url
  // home page
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' }) //For more content types search MIME type mdn
    res.write('<h1>home page</h1>')
    res.end() //In every response qhe should have a response end
  }
  // about page
  else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>about page</h1>')
    res.end()
  }
  // 404
  else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1>page not found</h1>')
    res.end()
  }
})

server.listen(5000) //In development whe use arbitrary port numbers but in production there are specific numbers like 443 for https
