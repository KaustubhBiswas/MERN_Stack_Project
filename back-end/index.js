const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
require('dotenv').config()

const app = express()

const port = process.env.PORT || 7000;

//middlware
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true,
}))

//routes
const bookRoutes = require('./src/books/book.route');
app.use('/api/books', bookRoutes);

const orderRoutes = require('./src/orders/order.route');
app.use('/api/orders', orderRoutes);

const userRoutes = require('./src/users/user.route');
app.use('/api/auth', userRoutes);

async function main() {
    await mongoose.connect(process.env.DB_URI);
    app.use('/', (req, res) => {
        res.send("Welcome to the bookstore server!");
    })
}

main().then(() => console.log("MongoDB connected successfully")).catch(err => console.log(err));


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})