import db from './../database/db.js';

export async function postPoll(req,res){
  const pool = res.locals.pool
  try {
    await db.collection('polls').insertOne(pool)
    return res.sendStatus(201)
  } catch (error) {
    return res.sendStatus(500)
  }
}

export async function getPoll(req,res){
  try {
    const pools = await db.collection('polls').find({}).toArray()
    return res.send(pools)
  } catch (error) {
    return res.sendStatus(500)
  }
}