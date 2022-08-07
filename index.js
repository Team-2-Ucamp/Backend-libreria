require('dotenv').config()
const app = require('./src/app')
require('./db/mongoose')


const port = process.env.port || 3000
app.listen(port, () => {
    console.log('El servidor esta corriendo')
})
