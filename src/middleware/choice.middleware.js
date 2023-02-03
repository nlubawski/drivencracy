import {choiceSchema} from '../schema/choice.schema.js'
import dayjs from "dayjs";

export async function choiceValidation(req, res, next){
  const { title, pollId } = req.body
  const { error } = choiceSchema.validate({
      title,
      pollId
    }, { abortEarly: false });
    if (error)
      return res
        .status(422)
        .send(error.details.map((detail) => detail.message));
    try {
      const poll = await db.collection('polls').findOne({ _id: ObjectId(pollId) })
    if (!poll) return res.sendStatus(404)

    const expired = dayjs().isAfter(poll.expireAt, 'days');
    if (expired) return res.sendStatus(403)
    
    const titlePoll = await db.collection('choices').findOne({ title })
    if (titlePoll) return res.sendStatus(409)
    } catch (error) {
      return res.sendStatus(500)
    }
  res.locals.choice = {title, pollId}
  next()
}