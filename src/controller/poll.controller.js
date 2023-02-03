import db from './../database/db.js';

export async function postPoll(req, res) {
  const poll = res.locals.poll
  try {
    await db.collection('polls').insertOne(poll)
    return res.status(201).send(poll)
  } catch (error) {
    return res.sendStatus(500)
  }
}

export async function getPoll(req, res) {
  try {
    const polls = await db.collection('polls').find({}).toArray()
    return res.send(polls)
  } catch (error) {
    return res.sendStatus(500)
  }
}

export async function getPollById(req, res) {
  const id = user.locals.id
  try {
    const choices = await db.collection('choices').find({ pollId: id }).toArray()
    return res.send(choices)
  } catch (error) {
    return res.sendStatus(500)
  }
}

export async function getResultPollById(req, res) {
  const id = user.locals.id
  const poll = user.locals.hasPoll
  const ranking = []
  let choices;
  try {
    choices = await db.collection('choices').find({ pollId: id }).toArray()
    if (choices.length === 0) return res.send([])
    for (const choice of choices) {
      const votes = await db.collection('votes').find({ choiceId: choice._id.toString() }).toArray()
      if (votes.length > 0) {
        ranking.push({ title: choice.title, votes: votes.length })
      }
    }
    ranking.sort((a, b) => b.votes > a.votes)
    const result = {
      _id: poll[0]._id.toString(),
      title: poll[0].title,
      expireAt: poll[0].expireAt,
      result: {
        title: ranking[0].title,
        votes: ranking[0].votes
      }
    }
    return res.send(result)
  } catch (error) {
    return res.sendStatus(500)
  }
}