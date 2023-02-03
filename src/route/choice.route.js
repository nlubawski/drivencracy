import { Router } from "express";
import { postChoice, postChoiceById} from "../controller/choice.controller.js";
import { choiceValidation, choiceByIdValidation} from "../middleware/choice.middleware.js";

const choice = Router()

choice.post('/choice', choiceValidation,  postChoice)
choice.post('/choice/:id/vote', choiceByIdValidation, postChoiceById)

export default choice