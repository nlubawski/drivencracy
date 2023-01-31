import {pollSchema} from './../schema/poll.schema.js'

export function pollValidation(req, res, next){
  const pool = req.body
  const  {title, expireAt} = pool
  const { error } = pollSchema.validate({
    title,
    expireAt
  }, { abortEarly: false });
  if (error)
    return res
      .status(422)
      .send(error.details.map((detail) => detail.message));
  res.locals.pool = pool
  next()
}
  