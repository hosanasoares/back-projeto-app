import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from "dotenv"
import Route from "./src/routes/routes.js"
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000)