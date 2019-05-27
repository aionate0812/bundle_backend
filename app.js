const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

const tripRouter = require('./routes/tripRouter');
const bagRouter = require('./routes/bagRouter');
const weatherRouter = require('./routes/weatherRouter')
const itemRouter = require('./routes/itemRouter');
const todoListRouter = require('./routes/todoListRouter');
const categoryRouter = require('./routes/categoryRouter');
const itineraryRouter = require('./routes/itineraryRouter')


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())

app.use('/itinerary', itineraryRouter)
app.use('/weather', weatherRouter)
app.use('/trip', tripRouter);
app.use('/bag', bagRouter);
app.use('/items', itemRouter);
app.use('/todolist', todoListRouter);
app.use('/categories', categoryRouter);

app.get('/', (req, res) => {
    res.send('hello world')
})


module.exports = app