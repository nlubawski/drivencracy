import { Router } from "express";
import { postPoll } from "../controller/poll.controller.js";

const pool = Router()

pool.post('/poll', postPoll )

export default pool