import db from './../database/db.js';
import {pollSchema} from './../schema/poll.schema.js'


export async function postPoll(req,res){
  const {title, expireAt} = req.body

  const { error } = pollSchema.validate({
    title,
    expireAt
  }, { abortEarly: false });
  if (error)
    return res
      .status(422)
      .send(error.details.map((detail) => detail.message));
  

  try {
    await db.collection('pools').insertOne({title,expireAt})
    return res.sendStatus(201)
  } catch (error) {
    return res.sendStatus(500)
  }
}