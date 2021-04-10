//CommonJS, every file is module (by default)
//Modules - Encapsulated Code (only share minimun)

/*
//Local variables are avaliable everywhere in this file
const secret = 'SUPER SECRET' 
const juan = 'Juan'
const pedro = 'Pedro'


const sayHi = (name) =>{
    console.log(`Hello there ${name}`);
}
*/

const names = require('./4-names'); //Could use Object Destructuring also
const sayHi = require('./5-utils');

sayHi('eze')
sayHi(names.juan)
sayHi(names.pedro)