import { Router } from "express";
import { getPoll, postPoll, getPollById, getResultPollById } from "../controller/poll.controller.js";
import { hasPoll, pollValidation } from "../middleware/poll.middleware.js";

const poll = Router()

poll.post('/poll', pollValidation, postPoll)
poll.get('/poll', getPoll)
poll.get('/poll/:id/choice', hasPoll, getPollById)
poll.get('/poll/:id/result', hasPoll, getResultPollById)

export default poll