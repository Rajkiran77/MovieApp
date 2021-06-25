const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 5000

// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))

// Templating Engine
app.set('views', './src/views')
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended : true }))

app.use(bodyParser.json());

// Routes
const moviesTrailersRouter = require('./src/routes/moviesTrailers')

app.use('/', moviesTrailersRouter)
app.use('/article', moviesTrailersRouter)

// Listen on port 5000
app.listen(port, () => console.log(`Listening on port ${port}`))