

require('dotenv').config()


module.exports = {
    db: {
        host: process.env.MONGO_HOST,
        user: process.env.MONGO_INITDB_ROOT_USERNAME,
        password: process.env.MONGO_INITDB_ROOT_PASSWORD,
        database: process.env.MONGO_DB,
        port: process.env.MONGO_PORT,
        connection: process.env.MONGO_CONNECTION
    },
    secretKey: process.env.SECRET_KEY
}