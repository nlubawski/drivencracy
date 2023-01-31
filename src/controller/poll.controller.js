import db from './../database/db.js';



export async function postPoll(req,res){

  const pool = res.locals.pool

  try {
    await db.collection('pools').insertOne(pool)
    return res.sendStatus(201)
  } catch (error) {
    return res.sendStatus(500)
  }
}