const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Book = require('./Book.model')

const db = 'mongodb://localhost/library'
const app = express()
const port = 8080

mongoose.connect(db)
    .then(db => console.log('Db is connected'))
    .catch(error => console.log(error))

app.get('/', (req, res) => {
    res.send('happy to be here')
})

app.get('/books', (req, res) => {
    console.log('getting all books')
    Book.find({})
        .exec((err, books) => {
            if (err) {
                res.send('error has occured')
            } else {
                console.log(books)
                res.json(books)
            }
        })
})

app.listen(port, () => {
    console.log('app listening on port: ' + port)
})
