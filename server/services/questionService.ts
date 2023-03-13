import { questionsDB } from "../questionsInMemoryDB";
import { QuestionType } from "../../sharedTypes/Question";

export function getQuestionService(id: string): QuestionType {
  return {
    ...questionsDB.get(id),
    questionsAmount: questionsDB.size,
  };
}
