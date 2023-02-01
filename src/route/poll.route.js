import { Router } from "express";
import { getPoll, postPoll, getPollById, getResultPollById} from "../controller/poll.controller.js";
import { pollValidation } from "../middleware/poll.middleware.js";

const poll = Router()

poll.post('/poll', pollValidation, postPoll )
poll.get('/poll', getPoll)
poll.get('/poll/:id/choice', getPollById)
poll.get('/poll/:id/result', getResultPollById)

export default poll