const express = require("express")
const dotenv = require("dotenv")
const connectDB = require("./config/db")
const color = require("colors")
const userRoutes = require('./routes/userRoutes')
const cors = require('cors')
const { notFound,errorHandler } = require('./middleware/errorMiddleware')

dotenv.config()
const app = express() 
connectDB()

app.use(cors())

app.use(express.json())

app.get('/', (req,res) => {
    res.send("API Running")
})

app.use('/api/user', userRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server is running on PORT ${PORT}`))