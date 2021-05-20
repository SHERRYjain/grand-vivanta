const path =  require('path')
const express = require('express')
const hbs = require('hbs')

const port = process.env.PORT || 3000

const publicDirectory = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

const app = express()

app.set('view engine', 'hbs')
app.set('views', viewsPath)

app.use(express.static(publicDirectory))
hbs.registerPartials(partialsPath)

const webRouter = require('./routes/web')

app.use(webRouter)

app.listen(port, () => {
    console.log('Server is on at port ' + port)
})