const express = require('express');
const path = require('path'); //To provide an absolute path

const app = express();

//Setup static and middleware, no need to setup statuses or content type, express takes care of all
app.use(express.static('./public')) //public folder contains all the static resources that the app uses, are files that the server doesnt have to change

app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})

app.all('*', (req, res)=>{
    res.status(404).send('Resource not found')
})

 app.listen(5000, ()=>{
     console.log('Server is listening on port 5000...');
 })
