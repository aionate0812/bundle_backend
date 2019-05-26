const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const port = 5000

const tripRouter = require('./routes/tripRouter');
const bagRouter = require('./routes/bagRouter');
const weatherRouter = require('./routes/weatherRouter')
const itemRouter = require('./routes/itemRouter');
const todoListRouter = require('./routes/todoListRouter');
const categoryRouter = require('./routes/categoryRouter');


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())

const itineraryRouter = require('./routes/itineraryRouter')




app.use('/itinerary', itineraryRouter)
app.use('/weather', weatherRouter)
app.use('/trip', tripRouter);
app.use('/bag', bagRouter);
app.use('/items', itemRouter);
app.use('/todolist', todoListRouter);
app.use('/categories', categoryRouter);

app.get('/', (req, res) => {
    res.send('hello')
})

app.listen(port, () => {
    console.log('Server is started on port ' + port)
})