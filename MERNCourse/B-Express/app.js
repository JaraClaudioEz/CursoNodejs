const express = require('express');
const app = express();
const { products } = require('./data')

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">Products</a>')
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => { //To send specific parameters
        const { id, name, image } = product;
        return { id, name, image }
    })
    res.json(newProducts)
})

app.get('/api/products/:productID', (req, res) => { //Instead of hardcode the id we setup a route parameter using :myParamName
    //console.log(req.params);
    const { productID } = req.params;

    const singleProduct = products.find((product) => prduct.id === Number(productID)) //productID need to be parsed to number becaues is a string
    if (!singleProduct) {
        return res.status(404).send('Product does not exist')
    }
    return res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => { //The route params can be more complex
    console.log(req.params)
    res.send('hello world')
})

app.get('/api/v1/query', (req, res) => {
    //console.log(req.query);
    const { search, limit } = req.query;
    let sortedProducts = [...products]

    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts.length < 1) {
        //res.status(200).send('No products matched your search') First alternative
        return res.status(200).json({ success: true, data: [] }) //We are not giving a 404 status code because the search was successful but not returned anything
    }
    res.status(200).json(sortedProducts)

})

app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
})