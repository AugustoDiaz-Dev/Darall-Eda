import express from 'express'
import cors from 'cors'
const app = express()
// Middleware
app.use(cors());

const port = process.env.PORT || 3000;

const shopController = require('./controllers/shopController')
const menuController = require('./controllers/menuController')
const priceController = require('./controllers/priceController')
const allController = require('./controllers/allController')

app.use(express.json())
// SHOP METHODS
app.get('/shops', shopController.get)
app.get('/shop/:id', shopController.getOne)
app.post('/shop', shopController.post)

// app.put('/shop/publish/:id', shopController.put)
app.delete('/shop/:id', shopController.delete)
// MENU METHODS
app.get('/menus', menuController.get)
app.get('/menu/:id', menuController.getOne)
app.post(`/menu`, menuController.post)
app.put('/menu/publish/:id', menuController.put)
app.delete(`/menu`, menuController.delete)
// PRICES METHODS
app.get('/prices', priceController.get)
app.get('/price/:id', priceController.getOne)
app.post('/price', priceController.post)
app.put('/price/publish/:id', priceController.put)
app.delete('/price', priceController.delete)

// GET ALL
app.get('/', allController.get)

// Handle production 
if(process.env.NODE_ENV === 'production') {
    // Static folder
    app.use(express.static(__dirname + '/public'));

    // Handle App
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

app.listen(PORT, () =>
    console.log(`REST API server ready at: ${PORT}),
)