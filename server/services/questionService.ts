import { questionsDB } from "../questionsInMemoryDB";
import { QuestionType } from "../../sharedTypes/Question";

export async function getQuestionService(id: string): Promise<QuestionType> {
  return {
    ...questionsDB.get(id),
    questionsAmount: questionsDB.size,
  };
}
