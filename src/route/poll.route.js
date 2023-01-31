import { Router } from "express";
import { postPoll } from "../controller/poll.controller.js";
import { pollValidation } from "../middleware/pool.middleware.js";

const pool = Router()

pool.post('/poll', pollValidation, postPoll )

export default pool