import { Router } from "express";
import { getPoll, postPoll } from "../controller/poll.controller.js";
import { pollValidation } from "../middleware/pool.middleware.js";

const pool = Router()

pool.post('/poll', pollValidation, postPoll )
pool.get('/poll', getPoll)

export default pool