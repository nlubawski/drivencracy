import { Router } from "express";
import { getPoll, postPoll, getPollById} from "../controller/poll.controller.js";
import { pollValidation } from "../middleware/pool.middleware.js";

const pool = Router()

pool.post('/poll', pollValidation, postPoll )
pool.get('/poll', getPoll)
pool.get('/poll/:id/choice', getPollById)

export default pool