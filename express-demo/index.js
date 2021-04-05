const express = require('express');
const app = express(); //By convenction the object type express is called app
/* Http methods
app.get();
app.post();
app.put();
app.delete();
*/
app.get('/', (req, res) => { //Callback function called route handler
    res.send('Hello world');
});

app.get('/api/courses', (req, res)=>{
    res.send([1, 2, 3]); //Actually we can replace this numbers for course objects
})

app.listen(3000, ()=>{
    console.log('Listening on port 3000...');
})