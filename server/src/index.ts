import express from 'express'
const app = express()

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

app.listen(3000, () =>
    console.log('REST API server ready at: http://localhost:3000'),
)