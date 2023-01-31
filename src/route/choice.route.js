import { Router } from "express";
import { postChoice } from "../controller/choice.controller.js";

const choice = Router()

choice.post('/choice', postChoice)

export default choice