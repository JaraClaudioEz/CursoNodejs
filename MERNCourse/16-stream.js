const { createReadStream } = require('fs');

const stream = createReadStream('./content/big.txt'); //This returns the read stream

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 }) To control the size of the buffer
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })

stream.on('data', (result) => {
    console.log(result);
})

stream.on('error', (err) => console.log(err))