import { Router } from "express";
import { postChoice, postChoiceById} from "../controller/choice.controller.js";
import { choiceValidation } from "../middleware/choice.middleware.js";

const choice = Router()

choice.post('/choice', choiceValidation,  postChoice)
choice.post('/choice/:id/vote', postChoiceById)

export default choice