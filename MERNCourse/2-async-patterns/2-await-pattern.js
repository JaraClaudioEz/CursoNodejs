//const { readFile, writeFile } = require('fs')
const { readFile, writeFile } = require('fs').promises //Third and best aproach

//Inicial setup, wrapper function who returns a Promise. Just for this course, there is a better resource in node: util
/*
const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
}
*/

//SECOND APROACH
//const util = require('util')
//const readFilePromise = util.promisify(readFile)
//const writeFilePromise = util.promisify(writeFile)

/*
getText('./content/first.txt')
    .then((result) => console.log(result))
    .catch((err) => console.log(err))
*/

const start = async () => { //This function awaits to promises to be resolved
    try {
        //const first = await getText('./content/first.txt'); This is a more cleaner and readable aproach instead of nested callbacks
        //const first = await readFilePromise('./content/first.txt', 'utf8'); Second aproach. Also the ncoding add is needed
        const first = await readFile('./content/first.txt', 'utf8'); //Third and best aproach!
        const second = await readFile('./content/second.txt', 'utf8');
        await writeFile('./content/result-mind-grenade.txt', `THIS IS AWESOME: ${first}, ${second}`)
        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
}

start()