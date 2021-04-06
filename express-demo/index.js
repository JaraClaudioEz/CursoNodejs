const express = require('express');
const app = express(); //By convenction the object type express is called app
/* Http methods
app.get();
app.post();
app.put();
app.delete();
*/
app.use(express.json()); //This is adding a piece of middleware, to use it in the request processing pipeline

const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}
];

app.get('/', (req, res) => { //Callback function called route handler
    res.send('Hello world');
});

app.get('/api/courses', (req, res)=>{
    res.send(courses);
})

//PORT: it is an enviroment variable, to handle the port asigned in the host who is running our api
const port = process.env.PORT || 3000; //PORT is the name of the enviroment variable, if that variable is seted it will use it otherwise will use an arbitrary port number, 3000 in thi case

app.get('/api/courses/:id', (req, res)=>{ //id is the name of the parameter, could be any like courseId
    //res.send(req.params.id); This returns a string
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course){ //If the client ask for a resource that is not in the server, by convention we should response with a status code 404
        res.status(404).send('The course with the given ID was not found.');
    }
    res.send(course); //Otherwise if the server have the resourse we return the course for the given id
});
/*Also is possibly have multiply parameters in a route
app.get('api/posts/:year/:month', (req, res)=>{
    res.send(req.params); This returns a Request Params Object, this route parameters are used to essential o required values
})

app.get('api/posts/:year/:month', (req, res)=>{
    res.send(req.query); This returns a Query String Parameters, used to provide adiccional data to our backend service, anything optional
*/

app.post('/api/courses', (req, res) =>{
    const course = {
        id: courses.length + 1, //When we work with a db the id is asigned by the db
        name: req.body.name //Assuming that in the request body we have an object and that object has a name property
    };
    courses.push(course);
    res.send(course); //By convention when we post an object to the server, we should return that object in the body of the response
});

app.listen(port, ()=>{
    console.log(`Listening on port ${port}...`);
})