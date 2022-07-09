const mongoose = require('mongoose')
const url = 'mongodb+srv://Luis_Antonio:luis117@cluster0.dgcdvy7.mongodb.net'

mongoose.connect(url, {}, () =>{
    console.log('Conexión exitosa')
})

module.exports = mongoose