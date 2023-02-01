import { Router } from "express";
import { postChoice, postChoiceById} from "../controller/choice.controller.js";

const choice = Router()

choice.post('/choice', postChoice)
choice.post('/choice/:id/vote', postChoiceById)

export default choice