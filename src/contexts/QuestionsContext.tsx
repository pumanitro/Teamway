import React from "react";
import { QuestionAnswerType } from "../../sharedTypes/Question";
import { createCtx } from "../utils/createCtx";

type QuestionContextType = {
  question: string;
  id: string;
  answer: QuestionAnswerType;
};

type QuestionsContextType = {
  questions: QuestionContextType[];
  setQuestions: (questions: QuestionContextType[]) => void;
};

export const [useQuestionsContext, QuestionsContextDefaultProvider] = createCtx<QuestionsContextType>();

type QuestionsContextProviderPropsType = {
  children: React.ReactNode;
};

export const QuestionsContextProvider: React.FC<QuestionsContextProviderPropsType> = ({ children }) => {
  const [questions, setQuestions] = React.useState<QuestionContextType[]>([]);

  return (
    <QuestionsContextDefaultProvider value={{ questions, setQuestions }}>{children}</QuestionsContextDefaultProvider>
  );
};
