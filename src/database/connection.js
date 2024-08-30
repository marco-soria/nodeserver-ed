const mongoose = require('mongoose')
const { db } = require('../../config')

const connection = mongoose.connect(`${db.connection}://${db.user}:${db.password}@${db.host}:${db.port}/?authSource=admin`)
.then(()=>{
    console.log('Successful connection')
}).catch((err)=>{
    console.log('Error in connection', err)
})

module.exports = connection