const express = require('express')
const mongoose = require('mongoose')
const Book = require('./Book.model')

const db = 'mongodb://localhost/library'
const app = express()
const port = 8080

mongoose.connect(db, err => err ? console.log(err) : console.log('Db is connected!'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('MongooseJS Essentials - Learn MongoDB for Node.js')
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

app.get('/books/:id', (req, res) => {
    console.log('getting one books')
    Book.findOne({
        _id: req.params.id
    })
        .exec((err, book) => {
            if (err) {
                res.send('error has occured')
            } else {
                console.log(book)
                res.json(book)
            }
        })
})

app.post('/book', (req, res) => {
    const newBook = new Book()

    newBook.title = req.body.title
    newBook.author = req.body.author
    newBook.category = req.body.category

    newBook.save((err, book) => {
        if (err) {
            res.send('error saving book')
        } else {
            console.log(book)
            res.send(book)
        }
    })
})

app.listen(port, () => {
    console.log('app listening on port: ' + port)
})
