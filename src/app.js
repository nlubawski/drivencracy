import express from "express";
import dotenv from 'dotenv'
import cors from 'cors'
import poll from "./route/poll.route.js";
import choice from "./route/choice.route.js";

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
app.use([poll, choice])

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server run in ${PORT}`)
})
