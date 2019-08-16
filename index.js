const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3001
const mysql = require('mysql')
const bodyParser = require('body-parser')

const connection = mysql.createConnection({
    host: '192.168.64.2',
    user: 'root',
    password: '',
    database: 'cadastro'
})

const pessoas = require('./routes/pessoas')

const dependencies = {
    connection
}

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'))

app.get('/', (req, res) => res.render('home'))
app.use('/pessoas', pessoas(dependencies))

//view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

connection.connect(() => {
    app.listen(port, () => console.log('CRUD active on port: ' + port))
})