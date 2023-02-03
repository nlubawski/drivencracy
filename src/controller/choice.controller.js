import { ObjectId } from 'mongodb';
import db from './../database/db.js';
import dayjs from 'dayjs';

export async function postChoice(req, res) {
  try {
    const {title, pollId} = user.locals.choice
    const choice = {title, pollId}
    await db.collection('choices').insertOne(choice)
    res.status(201).send(choice)
  } catch (error) {
    return res.sendStatus(500)
  }

  //validar title com joi

  //ver se tem a enquete com o id  
  //ver se title é repetido 
  //ver se ja expirou
}

export async function postChoiceById(req, res) {
  const choiceId  = req.params.id
  try {
    const choice = await db.collection('choices').findOne({_id:ObjectId(choiceId)})
    if(!choice) return res.sendStatus(404)

    const poll = await db.collection("polls").findOne({ _id: ObjectId(choice.pollId)});
    if (!poll) return res.sendStatus(404)

    const expired = dayjs().isAfter(poll.expireAt, 'days');
    if (expired) return res.sendStatus(403)

    await db.collection("votes").insertOne({choiceId, createdAt: dayjs().format('YYYY-MM-DD HH:mm')})
    return res.sendStatus(201)
  } catch (error) {
    return res.sendStatus(500)
  }
}