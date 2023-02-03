import { pollSchema } from '../schema/poll.schema.js'
import dayjs from "dayjs";

export function pollValidation(req, res, next) {
  let { title, expireAt } = req.body
  const { error } = pollSchema.validate({
    title
  }, { abortEarly: false });
  if (error)
    return res
      .status(422)
      .send(error.details.map((detail) => detail.message));
  if (expireAt === '') {
    expireAt = dayjs().add(30, 'day').format('YYYY-MM-DD HH:mm')
  }
  res.locals.poll = { title, expireAt }
  next()
}

export async function hasPoll(req, res, next) {
  const { id } = req.params
  const poll = await db.collection('polls').findOne({ _id: ObjectId(id) })
  if (!poll) return res.sendStatus(404)
  res.locals.hasPoll = poll
  res.locals.id = id
  next()
}