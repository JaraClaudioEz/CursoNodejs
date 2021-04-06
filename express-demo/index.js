const Joi = require('joi');
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
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
];

app.get('/', (req, res) => { //Callback function called route handler
    res.send('Hello world');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

//PORT: it is an enviroment variable, to handle the port asigned in the host who is running our api
const port = process.env.PORT || 3000; //PORT is the name of the enviroment variable, if that variable is seted it will use it otherwise will use an arbitrary port number, 3000 in thi case

app.get('/api/courses/:id', (req, res) => { //id is the name of the parameter, could be any like courseId
    //res.send(req.params.id); This returns a string
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) { //If the client ask for a resource that is not in the server, by convention we should response with a status code 404
        res.status(404).send('The course with the given ID was not found.');
        return; //To exit the function
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

function validateCourse(course) {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });

    return schema.validate(course);
};

app.post('/api/courses', (req, res) => {
    /* FIRST SIMPLE INPUT VALIDATION
    if(!req.body.name || req.body.name.length < 3){ //For larger objects the input validation should be made using joi for example
        //By convention we has to response with a status code 400: Bad request
        res.status(400).send('Name is required and should be minimun 3 characters.');
        return;
    };
    */
    /* SECOND INPUT VALIDATION WITH JOI
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });

    const result = schema.validate(req.body);
    //const result = Joi.validate(req.body, schema);
    //console.log(result);

    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    };
    */

    //THIRD AND FINAL INPUT VALIDATION WITH JOI REFACTURED
    //const result = validateCourse(req.body);
    const { error } = validateCourse(req.body); //By object destructuring we get the error, who equals to result.error
    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    };

    const course = {
        id: courses.length + 1, //When we work with a db the id is asigned by the db
        name: req.body.name //Assuming that in the request body we have an object and that object has a name property
    };
    courses.push(course);
    res.send(course); //By convention when we post an object to the server, we should return that object in the body of the response
});

app.put('/api/courses/:id', (req, res) => {
    //Look up the course
    //If not existig, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        return res.status(404).send('The course with the given ID was not found.'); //Direct return to exit the funciont, short version
    };

    //Validate
    //If invalid, return 400
    const { error } = validateCourse(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //Update course
    course.name = req.body.name; //If we have more properties we set them here
    //Return updated course to the client
    res.send(course);

});

app.delete('/api/courses/:id', (req, res) => {
    //Look up the course
    //If not existig, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given ID was not found.'); //Shorter version in one line to exit the function

    //Delete
    const index = courses.indexOf(course);
    courses.splice(index, 1); //The 1 stands for remove one object

    //Return the same course
    res.send(course);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});