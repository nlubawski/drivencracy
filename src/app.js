import express from "express";
import dotenv from 'dotenv'
import cors from 'cors'
import { MongoClient } from "mongodb";

dotenv.config()
const mongoClient = new MongoClient(process.env.DATABASE_URL);
let db;

try {
  await mongoClient.connect()
  db = mongoClient.db()
  console.log("deu bom")
} catch (error) {
  console.error(error)
}

const app = express()
app.use(cors())
app.use(express.json())

app.post('/poll', async(req,res)=>{
  const {title, expireAt} = req.body
  try {
    await db.collection('pools').insertOne({title,expireAt})
    return res.sendStatus(201)
  } catch (error) {
    return res.sendStatus(500)
  }
})




const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
  console.log(`Server run in ${PORT}`)
})
