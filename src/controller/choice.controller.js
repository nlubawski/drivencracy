import { ObjectId } from 'mongodb';
import db from './../database/db.js';
import dayjs from 'dayjs';

export async function postChoice(req, res) {
  try {
    const {title, pollId} = user.locals.choice
    const choice = {title, pollId}
    await db.collection('choices').insertOne(choice)
    res.status(201).send(choice)
  } catch (error) {
    return res.sendStatus(500)
  }
}

export async function postChoiceById(req, res) {
  try {
    const choiceId = user.locals.choiceId
    await db.collection("votes").insertOne({choiceId, createdAt: dayjs().format('YYYY-MM-DD HH:mm')})
    return res.sendStatus(201)
  } catch (error) {
    return res.sendStatus(500)
  }
}