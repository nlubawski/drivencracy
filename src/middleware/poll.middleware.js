import {pollSchema} from '../schema/poll.schema.js'
import dayjs from "dayjs";

export function pollValidation(req, res, next){
  let  {title, expireAt} = req.body
  const { error } = pollSchema.validate({
    title
  }, { abortEarly: false });
  if (error)
    return res
      .status(422)
      .send(error.details.map((detail) => detail.message));
  if(expireAt === '') {
    expireAt = dayjs().add(30, 'day').format('YYYY-MM-DD HH:mm')
  }
  res.locals.poll = {title, expireAt}
  next()
}
  