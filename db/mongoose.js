const mongoose = require('mongoose')
const url = process.env.mongo_url 

mongoose.connect(url, {}, () =>{
    console.log('Conexión exitosa')
})

module.exports = mongoose