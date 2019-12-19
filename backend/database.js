const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/booksdb', {
    useNewUrlParser: true
})
    .then(db => console.log('DB is connected '))
    .catch(error => console.error(error));

    //conexion creada