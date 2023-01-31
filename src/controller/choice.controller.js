import { ObjectId } from 'mongodb';
import db from './../database/db.js';
import { choiceSchema } from '../schema/choice.schema.js';

export async function postChoice(req, res) {
  const { title, pollId } = req.body
  try {
    const { error } = choiceSchema.validate({
      title,
      pollId
    }, { abortEarly: false });
    if (error)
      return res
        .status(422)
        .send(error.details.map((detail) => detail.message));
    const poll = await db.collection('polls').findOne({ _id: ObjectId(pollId) })
    if (!poll) return res.sendStatus(404)


    const titlePoll = await db.collection('choices').findOne({ title })
    if (titlePoll) return res.sendStatus(409)
    await db.collection('choices').insertOne({
      title,
      pollId: ObjectId(pollId)
    })
    res.sendStatus(201)
  } catch (error) {
    return res.sendStatus(500)
  }

  //validar title com joi

  //ver se tem a enquete com o id  
  //ver se title é repetido 
  //ver se ja expirou
}