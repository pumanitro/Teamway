export type QuestionAnswerType = {
  answerText: string;
  introvertScore: number;
  extrovertScore: number;
};

export type QuestionType = {
  id: string;
  question: string;
  answers: QuestionAnswerType[];
  questionsAmount: number;
};
