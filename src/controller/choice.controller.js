import { ObjectId } from 'mongodb';
import db from './../database/db.js';

export async function postChoice(req,res){
  const  {title, pollId} = req.body
  try {
    const poll = await db.collection('polls').findOne({_id:ObjectId(pollId)}) 
    console.log(poll)
    if(!poll) return res.sendStatus(404)

    const titlePoll = await db.collection('polls').findOne({title}) 
    console.log(titlePoll)
    if(!titlePoll) return res.sendStatus(409)
    res.sendStatus(201)
  } catch (error) {
    return res.sendStatus(500)
  }

  //validar title com joi

  //ver se tem a enquete com o id  
  //ver se title é repetido 
  //ver se ja expirou
}