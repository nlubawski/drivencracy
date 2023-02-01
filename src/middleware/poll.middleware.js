import {pollSchema} from '../schema/poll.schema.js'

export function pollValidation(req, res, next){
  const poll = req.body
  const  {title} = poll
  const { error } = pollSchema.validate({
    title
  }, { abortEarly: false });
  if (error)
    return res
      .status(422)
      .send(error.details.map((detail) => detail.message));
  res.locals.poll = poll
  next()
}
  