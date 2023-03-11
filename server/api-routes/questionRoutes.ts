import express from "express";
import { getQuestionService } from "../services/questionService";

const router = express.Router();

// I am aware there is missing authenticaiton middleware here - but I feel it is out of the scope of the task
router.get("/question/:id", getQuestionRoute);

async function getQuestionRoute(req: express.Request, res: express.Response) {
  const { id } = req.params;
  try {
    const results = await getQuestionService(id);
    res.json(results);
  } catch (e) {
    console.error(`Could not get question`, e);
    res.status(500).send("Could not get question " + e.message);
  }
}

export default router;
