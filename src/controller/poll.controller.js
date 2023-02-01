import db from './../database/db.js';

export async function postPoll(req,res){
  const poll = res.locals.poll
  try {
    await db.collection('polls').insertOne(poll)
    return res.status(201).send(poll)
  } catch (error) {
    return res.sendStatus(500)
  }
}

export async function getPoll(req,res){
  try {
    const polls = await db.collection('polls').find({}).toArray()
    return res.send(polls)
  } catch (error) {
    return res.sendStatus(500)
  }
}

export async function getPollById(req,res){
  const {id} = req.params
  try { 
    const choices = await db.collection('choices').find({pollId: id}).toArray()
    console.log(choices)
    return res.send(choices)
    } catch (error) {
    return res.sendStatus(500)
  } 
}